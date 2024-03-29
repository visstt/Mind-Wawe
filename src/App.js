import './App.css';
import Main_page from './components/Main_page/Main_page';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Create_test_page from './components/Create_test_page/Create_test_page';
import All_tests_page from './components/All_tests_page/All_tests_page';
import Test_page from './components/Test_page/Test_page';
import SignIn from './components/Autorization/SignIn/SignIn';
import SignUp from './components/Autorization/SignUp/SignUp'
import Profile_page from './components/Profile_page/Profile_page';

function App() {
  return (
    <Router>
    <div className='container'>
      <Routes>
        <Route path='/' element={<Main_page/>}></Route>
        <Route path='/All_tests_page' element={<All_tests_page/>}></Route>
        <Route path='/Create_test_page' element={<Create_test_page/>}></Route>
        <Route path='/Test_page' element={<Test_page/>}></Route>
        <Route path='/SignIn' element={<SignIn/>}></Route>
        <Route path='/SignUp' element={<SignUp/>}></Route>
        <Route path='/Profile' element={<Profile_page/>}></Route>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
