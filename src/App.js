import './App.css';
import Main_page from './components/Main_page/Main_page';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Create_test_page from './components/Create_test_page/Create_test_page';
import All_tests_page from './components/All_tests_page/All_tests_page';
import Test_page from './components/Test_page/Test_page';
function App() {
  return (
    <Router>
    <div className='container'>
      <Routes>
        <Route path='/' element={<Main_page/>}></Route>
        <Route path='/All_tests_page' element={<All_tests_page/>}></Route>
        <Route path='/Create_test_page' element={<Create_test_page/>}></Route>
        <Route path='/Test_page' element={<Test_page/>}></Route>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
