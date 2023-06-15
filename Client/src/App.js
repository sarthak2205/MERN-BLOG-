import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
/* import of all the components */
import Navbar from "./components/Navbar";
import Home from "./pages/home/Home";
import Login from './pages/Login/Login';
import Signup from './pages/registeration/Signup';
import { useContext } from 'react';
import { Context } from './context/Context';
import CreatePages from './pages/details/CreatePages';
import DetailsPage from './pages/details/DetailsPage';


function App() {

  const { user } = useContext(Context)

  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Register' element={<Signup />} />
        <Route path='/posts/:id' element={<DetailsPage />} />
        <Route path='Create' element={<CreatePages />} />
      </Routes>
    </Router>
  );
}

export default App;
