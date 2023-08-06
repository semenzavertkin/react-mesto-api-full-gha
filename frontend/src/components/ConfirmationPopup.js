import React from "react";
import PopupWithForm from "./PopupWithForm";

function ConfirmationPopup({ onSubmit, isOpen, onClose, card }) {
  const handleCardDelete = (evt) => {
    evt.preventDefault();
    onSubmit(card);
  };

  return (
    <PopupWithForm
      title="Вы уверены?"
      name="delete-card"
      buttonText="Да"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleCardDelete}
    ></PopupWithForm>
  );
}

export default ConfirmationPopup;
