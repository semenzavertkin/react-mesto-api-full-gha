import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddCardPopup({ onSubmit, isOpen, onClose }) {
  const [name, setName] = React.useState("");
  const [link, setLink] = React.useState("");

  React.useEffect(() => {
    if (isOpen) {
      setName("");
      setLink("");
    }
  }, [isOpen]);

  function handleNameChange(evt) {
    setName(evt.target.value);
  }

  function handleLinkChange(evt) {
    setLink(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    onSubmit({
      cardName: name,
      cardLink: link,
    });
  }

  return (
    <PopupWithForm
      name={"add-card"}
      title={"Новое место"}
      form={"popupFormCard"}
      buttonText={"Сохранить"}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <div className="popup__section">
        <input
          name="cardName"
          id="cardName-input"
          type="text"
          className="popup__input popup__input_form_card-name"
          placeholder="Название"
          minLength="2"
          maxLength="30"
          value={name}
          onChange={handleNameChange}
          required
        />
        <span className="popup__error cardName-input-error"></span>
      </div>
      <div className="popup__section">
        <input
          name="cardLink"
          id="cardLink-input"
          type="url"
          className="popup__input popup__input_form_card-link"
          placeholder="Ссылка на картинку"
          value={link}
          onChange={handleLinkChange}
          required
        />
        <span className="popup__error cardLink-input-error"></span>
      </div>
    </PopupWithForm>
  );
}

export default AddCardPopup;
