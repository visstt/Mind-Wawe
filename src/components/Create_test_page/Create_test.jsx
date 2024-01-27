import './Create_test.css';
import Create_question from './create_question';

function Create_test(){

    return(
        
        <div className="Create_test">
            <input type="text" className='input_for_question' placeholder='Ведите название теста:'/>

            <label for="images" class="drop-container" id="dropcontainer">
            <span class="drop-title">Добавьте фото</span>
            <input type="file" id="images" accept="image/*" required/>
            </label>
            
            <Create_question/>
        </div>
    )
}

export default Create_test;