import React from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup({ onSubmit, isOpen, onClose }) {
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    if (isOpen) {
      setName(currentUser.name);
      setDescription(currentUser.about);
    }
  }, [isOpen, currentUser]);

  function handleNameChange(evt) {
    setName(evt.target.value);
  }

  function handleDescriptionChange(evt) {
    setDescription(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    onSubmit({
      userName: name,
      userAbout: description,
    });
  }
  return (
    <PopupWithForm
      name={"profile"}
      title={"Редактировать профиль"}
      form={"popupFormAvatar"}
      buttonText={"Сохранить"}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <div className="popup__section">
        <input
          name="userName"
          id="userName-input"
          type="text"
          className="popup__input popup__input_form_user-name"
          placeholder="Имя"
          minLength="2"
          maxLength="40"
          value={name || ""}
          onChange={handleNameChange}
          required
        />
        <span className="popup__error userName-input-error"></span>
      </div>
      <div className="popup__section">
        <input
          name="userAbout"
          id="userAbout-input"
          type="text"
          className="popup__input popup__input_form_user-about"
          placeholder="Профессия"
          minLength="2"
          maxLength="40"
          value={description || ""}
          onChange={handleDescriptionChange}
          required
        />
        <span className="popup__error userAbout-input-error"></span>
      </div>
    </PopupWithForm>
  );
}
export default EditProfilePopup;
