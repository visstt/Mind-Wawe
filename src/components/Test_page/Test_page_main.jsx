import './Test_page.css';

function Test_page_main(){
    return(
        <div className='main_test_page'>
            <h1 className='count'>1/10</h1>

            <div className="Create_question">
            <input type="text" className="input_for_question" disabled />
            <input type="text" className="input_for_answer" disabled />
            <input type="text" className="input_for_answer" disabled />
            <input type="text" className="input_for_answer" disabled />
            <input type="text" className="input_for_answer" disabled />
        </div>


        </div>
    )
}

export default Test_page_main;