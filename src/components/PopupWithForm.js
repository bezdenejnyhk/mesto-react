import React from "react";

const PopupWithForm = (props) => {
  return (
    <div className={`popup popup_${props.name} ${props.isOpen ? "popup_opened" : ""}`}>
      <div className="popup__conteiner">
        <button type="button" className="popup__close" onClick={props.onClose}></button>
        <h3 className="popup__title">{props.title}</h3>
        <form
          name={`${props.name}`}
          action="#"
          className="popup__content"
          onSubmit={props.onSubmit}>
          {props.children}
        </form>
      </div>
    </div>
  );
};

export default PopupWithForm;