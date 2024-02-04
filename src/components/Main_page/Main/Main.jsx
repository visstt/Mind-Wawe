import './Main.css';
import main_photo from './main_photo.png'
import { Link } from 'react-router-dom';
function Main() {
return(
    <div className="main">

        <div className="photo">
            <img src={main_photo} alt="" />
        </div>

        <div className="text_container">

            <h1><strong>Мы предлагаем широкий выбор тестов</strong></h1>
            <h2>для оценки ваших профессиональных навыков, личностных черт, знаний и талантов.Воспользуйтесь нашими онлайн тестами, чтобы узнать больше о себе и своих возможностях!</h2>
        
            <Link to="/All_tests_page"><button className='button_main_page'>К тестам</button></Link>
        </div>
        
    </div>
)
}

export default Main;