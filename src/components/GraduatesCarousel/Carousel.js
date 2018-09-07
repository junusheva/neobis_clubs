import React, { Children, Component, cloneElement } from 'react';
import styled from 'styled-components';
import debounce from 'lodash.debounce';

const Container = styled.div`
	display: flex;
	justify-content: center;
`;

const Outer = styled.div`
	overflow: hidden;	
`;

const Inner = styled.div`
	display: inline-flex;
`;

const animate = (func, start, to, onEnd) => {

  const diff = Math.abs(start - to) / 30;
  let value = Math.max(0, start);

  const timer = () => {
    const newValue = func(diff);
    if (newValue === value) return onEnd && onEnd();
    if ((to > start) ? newValue >= to : newValue <= to) {
      return onEnd && onEnd();
    }
    value = newValue;
    requestAnimationFrame(timer);
  };
  timer();
}

export default class Carousel extends Component {

  state = {
    atEnd: false,
    isScrolling: false,
  }

  componentDidMount() {
    this.init();
    this.init = debounce(this.init, 100);
    window.addEventListener('resize', this.init);
    this.setInitialPosition();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.init);
  }

  init = () => {
    console.log('INIT')
    this.scrollWidth = this.container.scrollWidth;
    this.width = this.container.clientWidth;
  }

  setInitialPosition() {
    const { initialIndex } = this.props;
    const target = this.inner.children[initialIndex];
    if (!target) return;
    const { left, width } = target.getBoundingClientRect();
    // center it
    this.scroll = (left + (width / 2)) - (this.width / 2);
  }

  set scroll(value) {
    this.container.scrollLeft = value;
  }

  get scroll() {
    return this.container.scrollLeft;
  }

  incScroll = v => {
    return this.container.scrollLeft += v;
  }

  decScroll = v => {
    return this.container.scrollLeft -= v;
  }

  getNextPosition = () => {
    // if we're within 10% of the end just scroll to the end
    const target = this.scroll + this.width;
    const distanceToEnd = this.scrollWidth - target;
    return (distanceToEnd < (this.width / 10)) ? this.scrollWidth : target;
  }

  checkScrolling = () => {
    if (this.state.isScrolling) return;
    console.log('START');
    this.setState({ isScrolling: true });
    return true;
    
  }

  stopScroll = () => {
    this.setState({ isScrolling: false }, () => console.log('END'));
  }

  right = () => {
    if (!this.checkScrolling()) return;
    if (this.scroll + this.width === this.scrollWidth) {
      return this.reachedEnd();
    }
    this.scrollRight(this.stopScroll);
  }

  scrollRight = (cb) => {
    animate(this.incScroll, this.scroll, this.getNextPosition(), cb);
  }

  reachedEnd = () => {
    this.setState(
      { atEnd: true },
      () => {
        this.scrollRight(() => {
          this.scroll = 0;
          this.setState({ atEnd: false, isScrolling: false });
        });
      }
    );
  }

  reachedBeginning = () => {
    this.setState(
      { atEnd: true },
      () => {
        this.scroll = this.scrollWidth;
        this.scrollLeft(() => {
          this.setState({ atEnd: false, isScrolling: false });
        })
      }
    );
  }

  left = () => {
    if (!this.checkScrolling()) return;
    if (this.scroll === 0) {
      return this.reachedBeginning();
    }
    this.scrollLeft(this.stopScroll);
  }

  scrollLeft = (cb) => {
    animate(this.decScroll, this.scroll, this.scroll - this.width, cb);
  }

  getCopies = () => {
    const { children } = this.props;
    return Children.map(children, (child, i) =>
      cloneElement(child, { key: children.length + 1 }));
  }

  render() {
    const { children } = this.props;
    const items = this.state.atEnd ? children.concat(this.getCopies()) : children;
    return (
      <Container>
        <a onClick={this.left}>&#10229;</a>
        <Outer
          innerRef={container => this.container = container}
        >
          <Inner innerRef={inner => this.inner = inner}>
            {items}
          </Inner>
        </Outer>
        <a onClick={this.right}>&#10230;</a>
      </Container>
    );
  }
}