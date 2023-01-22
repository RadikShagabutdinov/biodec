import * as React from 'react';
import { PromiseCanceleable } from '../makeCancelable';

export type ScriptAttributes = Record<string, string>;

function setAttributes(el: Element, attr: ScriptAttributes) {
  Object.entries(attr).forEach((a) => {
    el.setAttribute(a[0], a[1])
  });
}

export function asyncScriptLoader(src: string, attr: ScriptAttributes = { type: "text/javascript" }): Promise<Element> {
  const scriptElem = document.createElement('script');
  return new Promise((resolve, reject) => {

    function handleComplete() {
      scriptElem.removeEventListener('load', handleComplete);
      scriptElem.removeEventListener('error', handleError);
      resolve(scriptElem);
    }

    function handleError() {
      scriptElem.removeEventListener('load', handleComplete);
      scriptElem.removeEventListener('error', handleError);
      reject(scriptElem);
    }

    setAttributes(scriptElem, {...attr, src });

    scriptElem.addEventListener('load', handleComplete);
    scriptElem.addEventListener('error', handleError);
    document.body.appendChild(scriptElem);
  });
}

export function scriptExist(src: string): [boolean, NodeListOf<Element>] {
  const nodes = document.querySelectorAll(`script[src="${src}"]`);
  return [Boolean(nodes.length), nodes];
}

export function removeNode(node: Element): void {
  // node.remove();
}

function scriptLoader(WrappedComponent) {
  class ScriptsLoader extends React.Component {

    componentDidMount() {

    }

    componentWillUnmount() {
      if (this.cancelable) {
        this.cancelable.cancel();
      }
    }

    loadScript(src: string, attr?: ScriptAttributes): Promise<Element> {
      const [isExist, nodes] = scriptExist(src);
      if (isExist) {
        return Promise.resolve(nodes[0]);
      }
      return asyncScriptLoader(src, attr);
    }

    cancelable: PromiseCanceleable<HTMLElement> | void;

    render() {
      const props = {
        ...this.props,
        loadScript: this.loadScript,
      }
      return (
        <WrappedComponent { ...props } />
      )
    }
  }
  return ScriptsLoader;
}

export default scriptLoader;