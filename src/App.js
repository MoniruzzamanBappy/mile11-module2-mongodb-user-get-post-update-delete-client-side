import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddUsers from './components/Addusers/AddUsers';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import UpdateUser from './components/UpdateUser/UpdateUser';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/user' element={<AddUsers></AddUsers>}></Route>
        <Route path='/update/:id' element={<UpdateUser></UpdateUser>}></Route>
      </Routes>
    </div>
  );
}

export default App;
