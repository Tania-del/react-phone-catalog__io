import { FC } from 'react';
import SvgClose from '../icons/Close';
import '../styles/Popup.scss';

interface IPopup {
  text: string;
  closePopup: () => void;
  closeSvg: string;
}
export const Popup: FC<IPopup> = ({ text, closePopup, closeSvg }) => {
  return (
    <div className="popup-container">
      <div className="popup-body">
        <h1 className="phones-text">{text}</h1>
        <button type="button" className="close-btn">
          <SvgClose onClick={closePopup} className={closeSvg} />
        </button>
      </div>
    </div>
  );
};
