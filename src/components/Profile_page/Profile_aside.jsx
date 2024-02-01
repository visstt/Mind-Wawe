import React from 'react'
import './Profile.css'
import monkey from './monkey.jpg'
function Profile() {
  return (
    <div className='profile_aside'>
      
      <div class="circle">
          <img src={monkey} alt=""/>
      </div>

      <form className='info_user'>
        <div className="name_user">
          <h1>Имя пользователя:</h1>
          <h1>Monkey_King</h1>
        </div>


        <div className="sex">
          <h1>Пол</h1>
          <div className="radio_button">
            <input type="radio" />
            <label htmlFor="male"><h2>Мужской</h2></label><br/>
            <input type="radio" />
            <label htmlFor="female"><h2>Женский</h2></label>
          </div>
        </div>

        <div className="date_of_birthday">
            <h1>Дата рождения:</h1>
            <input type="date" />
        </div>

      </form>

    </div>
  )
}

export default Profile