import { useState } from "react";
import React from "react";
import favon from "../assets/img/favon.png";
import favoff from "../assets/img/favoff.png";

const Card = ({ dataCard }) => {
    const { comics, description, name, title, thumbnail, _id } = dataCard;
    const [visible, setVisible] = useState(false);
    const [fav, setFav] = useState(false);

    // console.log(dataCard);

    const handleDescription = () => {
        setVisible(true);
    };
    const handleDescriptionNone = () => {
        setVisible(false);
    };
    const handleClickAddFavorite = (e) => {
        setFav(!fav);
        console.log(fav);
        if (!fav) {
            sessionStorage.setItem(_id, _id);
        }
    };
    return (
        <div className="card">
            <img
                src={`${thumbnail.path}.${thumbnail.extension}`}
                alt={name || title}
                onMouseOver={handleDescription}
                onMouseOut={handleDescriptionNone}
            />
            <img
                src={fav ? favon : favoff}
                onClick={handleClickAddFavorite}
                className="like"
            />
            <span>{name || title}</span>
            {description && visible && (
                <span className="description">{description}</span>
            )}
        </div>
    );
};
export default Card;
