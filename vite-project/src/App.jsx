import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import React from "react";
import Navbar from "./Component/Navbar.jsx"
import PreFooter from "./Component/PreFooter.jsx"
import Footer from "./Component/Footer.jsx"
import ContactUS from "./Component/ContactUS.jsx"
import SchuldeMeeting from "./Component/SchuldeMeeting.jsx"
import Home from "./Pages/Home.jsx"



const App=()=>{

return (
<>
<Router>
<Navbar/>
<div>
<Routes>
<Route path="/" element={<Home/>}  />
<Route path="/Contact" element={<ContactUS/>} />
<Route path="/SchuldeMeeting"  element={<SchuldeMeeting/>} />
</Routes>
</div>
<PreFooter/>
<Footer/>
</Router>

</>
  );
}

export default App;
