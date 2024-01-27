import ava from './ava.png'
import { Link } from 'react-router-dom';
function Test_container() {
    return(
        <div className='container_for_test'>
        <div className="test">
        <Link to='/Test_page'>
        <img src={ava} alt=""  className='ava'/>
        <h2 className='name' >Полное название тестa</h2>
        </Link>
        </div>
        </div>



       
    )
    }
    
    export default Test_container;