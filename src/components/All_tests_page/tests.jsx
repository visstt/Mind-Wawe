import './Tests.css'
import { Link } from 'react-router-dom';
import Test_container from './Test_container';
function Tests() {
    return(
        <div className="main">
            
            <Link to="/Create_test_page"><button className='button_tests_page'>Создать тест</button></Link>

                <div className="container_tests">
                    <Test_container/>
                    <Test_container/>
                    <Test_container/>
                    <Test_container/>
                </div> 

        </div>
    )
    }
    
    export default Tests;