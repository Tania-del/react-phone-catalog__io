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
  numberOfVisibleItems: number;
}

export const PhonesSlider = <T extends unknown>({
  items,
  children,
  topLineButtons,
  spaceBetween,
  numberOfVisibleItems,
}: IPhonesSlider<T>) => {
  const refContainer = useRef<HTMLDivElement>(null);
  const refList = useRef<HTMLUListElement>(null);

  const [currentPosition, setCurrentPosition] = useState(0);

  const handleNextClick = () => {
    const containerWidth = refContainer?.current?.clientWidth;
    const cardElement = refList?.current?.children?.[0] as
      | HTMLElement
      | undefined;
    const cardWidth = cardElement?.offsetWidth ?? 0;

    // eslint-disable-next-line max-len
    const totalWidth = (containerWidth ?? 0) * Math.ceil(items.length / numberOfVisibleItems)

    + spaceBetween * (Math.ceil(items.length / numberOfVisibleItems) - 1);
    const maxScrollPosition = -(totalWidth - (containerWidth ?? 0));
    const newPosition = currentPosition - cardWidth - spaceBetween;

    if (newPosition > maxScrollPosition) {
      setCurrentPosition(
        // eslint-disable-next-line max-len
        Math.max(newPosition, maxScrollPosition),
      );
    }
  };

  const handlePrevClick = () => {
    const cardElement = refList?.current?.children?.[0] as
      | HTMLElement
      | undefined;
    const cardWidth = cardElement?.offsetWidth ?? 0;

    if (currentPosition < 0) {
      // eslint-disable-next-line max-len
      setCurrentPosition((prevPosition) => Math.min(prevPosition + cardWidth + spaceBetween, 0));
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-shadow
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
            <Fragment
              // eslint-disable-next-line react/no-array-index-key
              key={index}
            >
              {typeof children === 'function' ? children(item) : children}
            </Fragment>
          ))}
        </ul>
      </div>
    </>
  );
};
