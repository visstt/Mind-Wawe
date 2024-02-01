import { Link } from 'react-router-dom';
import './SignIn.css';
function Main() {
return(
    <div className="Sign">
        <div class="wrapper fadeInDown">
  <div id="formContent">
    
    <h2 class="active"> Войти </h2>
    
    <form>
    <input type="text" id="login" class="fadeIn second" name="login" placeholder="логин"/>
      <input type="password" id="password" class="fadeIn third" name="login" placeholder="пароль"/>
      <input type="submit" class="fadeIn fourth" value="Вход"/>
    </form>

    
    <div id="formFooter">
      <Link to={"#"} class="underlineHover">Забыли пароль?</Link>
    </div>

  </div>
</div>
    </div>
    
)
}

export default Main;