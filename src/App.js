import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import MainLayout from './layouts/mainLayout/MainLayout';
import Login from './pages/login/LoginPage';
import Home from './pages/home/HomePage';
import About from './pages/about/About';
import Error from './pages/error/Error';
import History from './pages/history/History';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<Login />} />
          <Route path='login' element={<Login />} />
          <Route path='demo' element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='user/history' element={<History />} />
          </Route>
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;