import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Question from './components/Question/Question';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <Header></Header>
      <Home></Home>
      <Question></Question>
    </div>
  );
}

export default App;
