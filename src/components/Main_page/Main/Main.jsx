import './Main.css';
import main_photo from './main_photo.png'
import { Link } from 'react-router-dom';
function Main() {
return(
    <div className="main">
        <div className="wrapper">
            <img src={main_photo} alt="" className='photo'/>
            <div className="text">
               <h1>Мы предлагаем широкий выбор тестов</h1> 
               <h2>Для оценки ваших профессиональных навыков, личностных черт, знаний и талантов.Воспользуйтесь нашими онлайн тестами, чтобы узнать больше о себе и своих возможностях!</h2>
               <Link to="/All_tests_page"><button className='button_main_page'>К тестам</button></Link> 
            </div>
            
        </div>
    </div>
)
}

export default Main;