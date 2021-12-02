import Chat from "./components/chatmenu/Chat";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {useState} from 'react'
import Login from "./components/login and out/Login";
import { useStateValue } from "./StateProvider";


function App() {
  const [{user}, dispatch] = useStateValue();

  return (
    
    <div className="app">
        {
          !user ? <Login/> :(
              <div className="app_body">
            <Router>
              <Sidebar/>
              <Routes>
                <Route path="/rooms/:roomId" element={ <Chat/>}>
                </Route>
                <Route path="/" element={ <Chat/>}>
                </Route>              
              </Routes>            
            </Router>

      </div>
          )
        }
            
    </div>
    
  );
}

export default App;
