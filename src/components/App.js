import React from "react";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup.js";
import api from "../utils/api.js"

function App() {
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [userName, setUserName] = React.useState([]);
    const [userDescription, setUserDescription] = React.useState([]);
    const [userAvatar, setUserAvatar] = React.useState([]);
    const [cards, setCard] = React.useState([]);
    const [selectedCard, setSelectedCard] = React.useState({});
   
    React.useEffect(() => {
        api.getUserInfo(userName, userDescription, userAvatar)
        .then((userData) => { 
            setUserName(userData.name);
            setUserDescription(userData.about);
            setUserAvatar(userData.avatar);
        })
    }, []);

    React.useEffect(() => {
        api.getInitialCards(cards)
        .then((initialcards) => {
            setCard(initialcards);
        })
    }, []);

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
            userAvatar={userAvatar} 
            userName={userName} 
            userDescription={userDescription}
            cards={cards}
        />
        <Footer />
      
        <PopupWithForm
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
            name="avatar"
            title="Обновить аватар"
            children = {
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
                <button className="popup__save popup__save_add" type="submit">Сохранить</button>
                </>
            }
        />
        <PopupWithForm
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            name="edit"
            title="Редактировать профиль"
            children = {
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
            <button className="popup__save popup__save_edit" type="submit">Сохранить</button>
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
            children = {
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
            <button className="popup__save popup__save_add" type="submit">Создать</button>
                </>
            }
        />    
        <div className="popup popup_delete-card">
            <div className="popup__conteiner popup__conteiner_delete-card">
              <button className="popup__close" type="button"></button>        
              <h3 className="popup__title popup__title_delete-card">Вы уверены?</h3>
              <form className="popup__content" name="question" noValidate>
                <button type="submit" className="popup__save">Да</button>
              </form>
            </div>
        </div> 
    </div>      
    );
}

export default App;
