import { updateStyle } from '../../../../lib/domHelper';

export function getElements(styles: Record<string, string>) {
  const container = document.querySelector(`.${styles.wrapper}`).getBoundingClientRect();
  const drawer: HTMLElement = document.querySelector('[data-element="drawer"');
  const clip: HTMLElement = document.querySelector('[data-element="clip"');
  return { container, drawer, clip };
}

export function slideDawer(drower: HTMLElement, t: DOMRect, container: DOMRect, pd: number ) {
  updateStyle(drower, [
    { name: 'width', value: `${t.width + 2 * pd}px` },
    { name: 'transform', value: `translateX(${t.x - container.x - pd}px)` },
  ]);
}

export function slideClip(clip: HTMLElement, t: DOMRect, container: DOMRect, pd: number ) {
  const l = t.x - container.x;
  updateStyle(clip, [
    { name: 'clip', value: `rect(0px, ${l + t.width + pd}px, 50px, ${l - pd}px)` },
  ]);
}
