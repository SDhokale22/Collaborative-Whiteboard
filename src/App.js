import { Route, Routes } from 'react-router-dom';
import RoomPage from './pages/RoomPage/RoomPage';
import Login from './components/Forms/Login';
import Signup from './components/Forms/Signup';

const uuid = () => {
  var S4 = () => {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return (
      S4() +
      S4() +
      "-" +
      S4() +
      "-" +
      S4() +
      "-" +
      S4() +
      "-" +
      S4() +
      S4() +
      S4()
    );
  };

const App = () => {

  return (

    <div className="container">
      <Routes>
        <Route path='/' element={<Login uuid={uuid}/>} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/room' element={<RoomPage />} />
      </Routes>
    </div>
  );
}

export default App;
