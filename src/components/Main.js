import React from "react";
import Card from "./Card.js";


function Main({onEditAvatar, onEditProfile, onAddPlace, userName, userDescription, userAvatar, cards, onCardClick}) {
  return (
    <main>
      <section className="profile">
        <div className="profile__avatar-wrapper">
          <img className="profile__avatar" 
            src={userAvatar} 
            alt="Аватар" 
            style={{ backgroundImage: `url(${userAvatar})` }}/>
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