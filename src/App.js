import React from 'react';
import './App.css';
import Navbar from './Navbar_folder/Navbar'
import { Routes, Route } from 'react-router-dom'
import HomePage from './Routes/HomePage';
import FindJob from './Routes/FindJob';
import LoginPage from './Routes/LoginPage';
import CreateAccountPage from './Routes/CreateAccountPage';
import Profile from './Authentication/Profile';

function App() {
    //const [searchTerm, setSearchTerm] = useState('')
    /*function onSearchChange(e)
    {
        setSearchTerm(e.target.value)
    }*/
    
    return (
            
            <Routes>
                <Route path='/' element={<Navbar />}>
                <Route index element={<HomePage />} />
                <Route path='FindJob' element={<FindJob />}/>
                <Route path='login' element={<LoginPage />} />
                <Route path='CreateAccountPage' element={<CreateAccountPage />} />
                <Route path='profile' element={<Profile />} />
                </Route>
            </Routes>
        
  );
}

/*<div className='header-div'>
                <Header
                    text="Staff List"
                />

                <input
                    onChange={onSearchChange}
                    type='text'
                    placeholder='search staff'
                    value={searchTerm}
                />
            </div>*/

export default App;
