/* eslint-disable jsx-a11y/click-events-have-key-events */
import {
  FC, useRef, useState, useEffect,
} from 'react';
import SvgArrowDown from '../icons/ArrowDown';
import '../styles/СustomSelect.scss';
import '../styles/MobileList.scss';
import { Option } from '../type/Option';

interface ICustomSelector {
  options: Option[];
  defaultOption: string | number;
}

export const CustomSelect: FC<ICustomSelector> = ({
  options,
  defaultOption,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState(defaultOption);
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const selectRef = useRef<HTMLDivElement>(null);

  const toogleSelect = () => {
    setIsOpen(!isOpen);
    setIsClicked(true);
  };

  const handleSelectChange = (value: string | number) => {
    setSelectedOption(String(value));
    setIsOpen(false);
    setIsClicked(false);
  };

  useEffect(() => {
    const handleOusideClick = (e: MouseEvent) => {
      if (!selectRef.current?.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOusideClick);

    return () => {
      document.removeEventListener('mousedown', handleOusideClick);
    };
  }, []);

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div ref={selectRef} className={`custom-select ${isOpen ? 'open' : ''} ${isClicked ? 'clicked' : ''}`} onClick={toogleSelect}>
      <div className="select-header">
        <p className="select-header__text">{selectedOption || defaultOption}</p>
        <SvgArrowDown className={`arrow-image ${isOpen ? 'active' : ''}`} />
      </div>
      <ul className="options">
        {options.map((option) => (
          // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
          <li
            key={option.value}
            onClick={() => handleSelectChange(option.value)}
          >
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  );
};
