import { useContext } from "react";
import Card from "../Card/Card.jsx";
import CurrentUserContext from "../../contexts/CurrentUserContext.js";
import Loader from "../Loader/Loader.jsx"
import Login from "../Login/Login.jsx";
import Register from "../Register/Register.jsx";

export default function Main({ name, cards, onEditProfile, onEditAvatar, onAddPlace, onCardClick, onCardLike, onCardDelete, isLoading, handleRegister, handleLogin, isSending }) {
  const currentUser = useContext(CurrentUserContext);
 
  return (
    <main className='content'>
      {name === 'content' ? 
        <>
          <section className="profile">
            <button
              className="profile__avatar-button"
              type="button"
              aria-label="Изменить аватар"
              onClick={onEditAvatar}
            >
              <img
                className="profile__avatar"
                src={currentUser.avatar}
                alt="Аватар пользователя"
              />
            </button>
            <div className="profile__info">
              <div className="profile__name-block">
                <h1 className="profile__name">{currentUser.name}</h1>
                <button
                  className="profile__edit-button"
                  type="button"
                  aria-label="Редактировать профиль"
                  onClick={onEditProfile}
                />
              </div>
              <p className="profile__about">{currentUser.about}</p>
            </div>
            <button
              className="profile__gallery-add-button"
              type="button"
              aria-label="Добавить фото"
              onClick={onAddPlace}
            />
          </section>
          <section className="gallery">
          {isLoading ? <Loader /> : cards.map(cards => {
            return (
              <Card 
                card={cards} 
                key={cards._id} 
                onCardClick={onCardClick}
                onCardLike={onCardLike}
                onCardDelete={onCardDelete}
              />
            );
          })}
          </section>
        </>
        :
        name === 'signup' ? 
        <Register
        handleRegister={handleRegister}
        isSending={isSending}
        />
        :
        <Login
        handleLogin={handleLogin}
        isSending={isSending}
        />
      }
    </main>
  );
}