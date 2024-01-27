
function Create_question(){
    
    return(
        
        <div className="Create_question">
            <input type="text" className="input_for_question" placeholder="Введите вопрос:"/>
            
            <input type="text" className="input_for_answer" placeholder="Ответ 1:"/>
            <input type="text" className="input_for_answer" placeholder="Ответ 2:"/>
            <input type="text" className="input_for_answer" placeholder="Ответ 3:"/>
            <input type="text" className="input_for_answer" placeholder="Ответ 4:"/>

            <div className="btn_test">
                <button className="button_crtests_page"><p>Добавить вопрос</p></button>
                <button className="button_crtests_page"><p>Сохранить и создать</p></button>
            </div>


        </div>
    )
    
}

export default Create_question;