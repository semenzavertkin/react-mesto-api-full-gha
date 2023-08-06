function ImagePopup({ card, onClose }) {
  return (
    <div className={`popup popup_type_big-img" ${card ? "popup_opened" : ""}`}>
      <div className="conteiner__popup-big-img">
        <button
          className="popup__close"
          type="button"
          onClick={onClose}
        ></button>
        <img
          src={card ? card.link : ""}
          alt={card ? card.name : ""}
          className="popup__img"
        />
        <h2 className="popup__text">{card ? card.name : ""}</h2>
      </div>
    </div>
  );
}

export default ImagePopup;
