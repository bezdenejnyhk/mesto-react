import React from "react";

const Card = ({ card, onCardClick }) => {
    function handleClick() {
        onCardClick(card);
    }
    return (
        <div className="item">
            <img className="item__image"
                src={card.link}
                alt={card.name}
                onClick={handleClick} />
            <button className="item__delete" type="button" aria-label="Кнопка Удалить"></button>
            <div className="item__elements">
                <h2 className="item__text">{card.name}</h2>
                <div>
                    <button className="item__like" type="button" aria-label="Кнопка Нравиться"></button>
                    <h2 className="item__like-count">{card.likes.length}</h2>
                </div>
            </div>
        </div>
    )
}

export default Card;