import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Account from './pages/Account'
import {AuthProvider} from 'react-auth-kit'


function App() {
  const isUserSignedIn = !!localStorage.getItem('token')

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        {isUserSignedIn && <Route path='/account' element={<Account />} />}
      </Routes>
    
    </div>
  );
}

export default App;
