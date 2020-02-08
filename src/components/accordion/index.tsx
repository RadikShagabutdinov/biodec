import * as React from 'react';
import cx from 'classnames';
import styles from './accordion.module.css';

interface Props {
  title: string;
  children: React.ReactNode;
}

interface State {
  isOpen: boolean;
}

class Accordion extends React.Component<Props, State> {

  state = {
    isOpen: true
  }

  componentDidMount() {
    if (this.container) {
      this.height = this.container.offsetHeight;
      this.setClose();
    }
  }

  setOpen = () => {
    this.setState({ isOpen: true }, () => {
      if (this.container) {
        this.container.style.setProperty('height', `${this.height}px`);
      }
    });
  }

  setClose = () => {
    this.setState({ isOpen: false }, () => {
      if (this.container) {
        this.container.style.setProperty('height', `0px`);
      }
    });
  }

  toggle = () => {
    const { isOpen } = this.state;
    if (isOpen) {
      this.setClose();
    } else {
      this.setOpen();
    }
  }

  refproxy = (el: HTMLElement | void) => {
    this.container = el;
    if (el) {
      this.height = el.offsetHeight + 20;
      this.setClose();
    }
  }

  container: HTMLElement | void;

  height: number;

  render() {
    const { title, children } = this.props;
    return (
      <div className={cx(styles.container, { [styles.open]: this.state.isOpen })}>
        <button className={styles.toggler} onClick={this.toggle}>{title}</button>
        <div className={styles.content} ref={this.refproxy}>{children}</div>
      </div>
    )
  }
}

export default Accordion;