/* eslint-disable no-confusing-arrow */
import {
  ReactNode, Fragment, useState, useRef,
} from 'react';

interface IPhonesSlider<T> {
  // eslint-disable-next-line react/require-default-props
  items: T[];
  topLineButtons: (prevButton: () => void, nextButton: () => void) => ReactNode;
  children: ((item: T) => ReactNode) | ReactNode;
  spaceBetween: number;
}

export const PhonesSlider = <T extends unknown>({
  items,
  children,
  topLineButtons,
  spaceBetween,
}:
IPhonesSlider<T>) => {
  const refContainer = useRef<HTMLDivElement>(null);
  const refList = useRef<HTMLUListElement>(null);

  const [currentPosition, setCurrentPosition] = useState(0);
  const cardWidth = (refList?.current?.children?.[0] as HTMLElement)
    .offsetWidth;
  const containerWidth = refContainer?.current?.clientWidth;
  const scrollWidth = refList?.current?.scrollWidth;

  const handleNextClick = () => {
    if (currentPosition > -((scrollWidth ?? 0) - (containerWidth ?? 0))) {
      setCurrentPosition((prevPosition) => (
        prevPosition - cardWidth) - spaceBetween);
    }
  };

  const handlePrevClick = () => {
    if (currentPosition < 0) {
      setCurrentPosition((prevPosition) => (
        prevPosition + cardWidth) + spaceBetween);
    }
  };

  return (
    <>
      {topLineButtons?.(handlePrevClick, handleNextClick)}
      <div className="phones-container" ref={refContainer}>
        <ul
          ref={refList}
          className="phones-list"
          style={{
            transform: `translateX(${currentPosition}px)`,
          }}
        >
          {items.map((item, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <Fragment key={index}>
              {typeof children === 'function' ? children(item) : children}
            </Fragment>
          ))}
        </ul>
      </div>
    </>
  );
};
