import React from "react";
import successImage from "../images/successImage.svg";
import unsuccessImage from "../images/unsuccessImage.svg";

function InfoTooltip({ isOpen, onClose, isErr }) {
  return (
    <div className={`popup popup_type_tooltip ${isOpen ? "popup_opened" : ""}`}>
      <div className="conteiner__popup">
        <button
          className="popup__close"
          type="button"
          onClick={onClose}
        ></button>
        <div className="popup__tooltip-conteiner">
          <img
            className="popup__icon"
            src={isErr ? unsuccessImage : successImage}
            alt={
              isErr
                ? "Что-то пошло не так! Попробуйте ещё раз."
                : "Вы успешно зарегистрировались"
            }
          />
          <p className="popup__tooltip-text">
            {isErr
              ? "Что-то пошло не так! Попробуйте ещё раз."
              : "Вы успешно зарегистрировались!"}
          </p>
        </div>
      </div>
    </div>
  );
}
export default InfoTooltip;
