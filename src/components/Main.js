import React from "react";
import Card from "./Card.js";
import api from "../utils/api.js"

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getUserInfo(userName, userDescription, userAvatar)
      .then((userData) => {
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      });
  }, []);

  React.useEffect(() => {
    api.getInitialCards(cards)
      .then((initialcards) => {
        setCards(initialcards);
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      });
  }, []);

  return (
    <main>
      <section className="profile">
        <div className="profile__avatar-wrapper">
          <img className="profile__avatar"
            src={userAvatar}
            alt="Аватар" />
          <button className="profile__avatar-button" onClick={onEditAvatar}></button>
        </div>
        <div className="profile__info">
          <h1 className="profile__info-name">{userName}</h1>
          <button className="profile__edit" type="button" onClick={onEditProfile}></button>
          <p className="profile__info-description">{userDescription}</p>
        </div>
        <button className="profile__add" type="button" onClick={onAddPlace}></button>
      </section>
      <section className="cards">
        {cards?.map((card) => (
          <Card
            card={card}
            key={card._id}
            name={card.name}
            link={card.link}
            likes={card.likes}
            onCardClick={onCardClick} />
        ))}
      </section>
    </main>
  );
}

export default Main;