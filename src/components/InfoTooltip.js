import React from "react";
import popupCloseButton from "../images/popup__button-close.svg";

import success from "../images/success.svg";
import fail from "../images/fail.svg";

export default function InfoTooltip(props) {
  return (
    <div
      className={`popup popup_type_infoTooltip ${
        props.isOpen && "popup_opened"
      }`}
    >
      <div className="popup__container">
        <button
          onClick={props.onClose}
          className="popup__button-close opacity"
          type="button"
        >
          <img
            className="popup__button-close-image"
            src={popupCloseButton}
            alt="рисунок 'крестик' закрытия окна"
          />
        </button>
        <div className="popup__infoTooltip-container">
          <figure className="popup__figure">
            <img
              className="popup__infoTooltip-image"
              src={success}
              alt={props.text}
              // src={`${props.card.link}`}
              // alt={props.card.name}
            />
            <h3 className="popup__infoTooltip-text">{props.text}</h3>
          </figure>
        </div>
      </div>
    </div>
  );
}
