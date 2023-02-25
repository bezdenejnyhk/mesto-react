import React from "react";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup.js";

function App() {
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState({});

    const handleEditAvatarClick = () => {
        setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
    };

    const handleEditProfileClick = () => {
        setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
    };

    const handleAddPlaceClick = () => {
        setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
    };

    const handleCardClick = (cards) => {
        setSelectedCard(cards);
    };

    const closeAllPopups = () => {
        setIsEditAvatarPopupOpen(false);
        setIsEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setSelectedCard({});
    };

    return (
        <div className="page">
            <Header />
            <Main
                onEditAvatar={handleEditAvatarClick}
                onEditProfile={handleEditProfileClick}
                onAddPlace={handleAddPlaceClick}
                onCardClick={handleCardClick}
                onClose={closeAllPopups}
            />
            <Footer />

            <PopupWithForm
                isOpen={isEditAvatarPopupOpen}
                onClose={closeAllPopups}
                name="avatar"
                title="Обновить аватар"
                buttonText="Сохранить"
                children={
                    <>
                        <label className="popup__field">
                            <input
                                type="url"
                                placeholder="Ссылка на аватар"
                                className="popup__input popup__input_type_title"
                                id="popup__input_type_avatar"
                                name="avatar"
                                required />
                            <span className="popup__input-error" id="popup__input_type_avatar-error"></span>
                        </label>
                    </>
                }
            />
            <PopupWithForm
                isOpen={isEditProfilePopupOpen}
                onClose={closeAllPopups}
                name="edit"
                title="Редактировать профиль"
                buttonText="Сохранить"
                children={
                    <>
                        <label className="popup__field">
                            <input
                                type="text"
                                placeholder="Название"
                                className="popup__input popup__input_type_title"
                                id="popup__input_type_title"
                                name="name"
                                minLength={2}
                                maxLength={30}
                                required />
                            <span className="popup__input-error" id="popup__input_type_title-error"></span>
                        </label>
                        <label className="popup__field">
                            <input
                                type="url"
                                placeholder="Описание"
                                className="popup__input popup__input_type_link"
                                id="popup__input_type_link"
                                name="job"
                                required />
                            <span className="popup__input-error" id="popup__input_type_link-error"></span>
                        </label>
                    </>
                }
            />
            <ImagePopup
                card={selectedCard}
                onClose={closeAllPopups}
            />
            <PopupWithForm
                isOpen={isAddPlacePopupOpen}
                onClose={closeAllPopups}
                name="add"
                title="Новое место"
                buttonText="Создать"
                children={
                    <>
                        <label className="popup__field">
                            <input
                                type="text"
                                placeholder="Название"
                                className="popup__input popup__input_type_title"
                                id="popup__input_type_title"
                                name="title"
                                minLength={2}
                                maxLength={30}
                                required />
                            <span className="popup__input-error" id="popup__input_type_title-error"></span>
                        </label>
                        <label className="popup__field">
                            <input
                                type="url"
                                placeholder="Ссылка на картинку"
                                className="popup__input popup__input_type_link"
                                id="popup__input_type_link"
                                name="link"
                                required />
                            <span className="popup__input-error" id="popup__input_type_link-error"></span>
                        </label>
                    </>
                }
            />
        </div>
    );
}

export default App;
