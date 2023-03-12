import React from "react";
import PopupWithForm from "./PopupWithForm";

const PopupWithConfirmation = ({ isOpen, onClose, onConfirm }) => {

    function handleSubmit(event) {
        event.preventDefault();
        onConfirm();
    }

    return (
        <PopupWithForm
            name="confirm"
            title="Вы уверены?"
            buttonText="Да"
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
        />
    );
}

export default PopupWithConfirmation;