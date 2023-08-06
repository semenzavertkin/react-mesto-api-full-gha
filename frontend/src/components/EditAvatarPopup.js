import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({ onSubmit, isOpen, onClose }) {
  const ref = React.useRef();

  React.useEffect(() => {
    ref.current.value = "";
  }, [isOpen]);

  function handleAvatarChange() {
    return ref.current.value;
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    onSubmit({
      userAvatar: ref.current.value,
    });
  }

  return (
    <PopupWithForm
      name={"avatar"}
      title={"Обновить аватар"}
      form={"popupFormAvatar"}
      buttonText={"Сохранить"}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <div className="popup__section">
        <input
          name="userAvatar"
          id="userAvatar-input"
          type="url"
          className="popup__input popup__input_form_user-avatar"
          placeholder="ссылка на аватар"
          ref={ref}
          onChange={handleAvatarChange}
          required
        />
        <span className="popup__error userAvatar-input-error"></span>
      </div>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
