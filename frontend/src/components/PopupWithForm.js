function PopupWithForm({
  name,
  title,
  form,
  buttonText,
  children,
  onSubmit,
  isOpen,
  onClose,
}) {
  return (
    <div className={`popup popup_type_${name} ${isOpen ? "popup_opened" : ""}`}>
      <div className="conteiner__popup">
        <button
          className="popup__close"
          type="button"
          onClick={onClose}
        ></button>
        <h2 className="popup__title">{title}</h2>
        <form
          action=""
          className="popup__form"
          name={form}
          onSubmit={onSubmit}
          noValidate
        >
          {children}
          <button type="submit" className="popup__btn">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
