// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React ,{useState} from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);


  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null)
    },1500)
  }
  const toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor ='#042743';
      showAlert("dark mode has been enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor ='white';
      showAlert("light mode has been enabled","success");
    }
  }
  return (
    <>
    <Router>
    <Navbar title="testUtils" aboutText="About company" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    <Routes>
      <Route  exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>}>

      {/* <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/> */}
      {/* <About/> */}
          
      </Route>
      <Route exact path="/about" element={<About />}>
        
      </Route>
      
    </Routes>
    
    
    </div>
    </Router>
    </>
  );
}

export default App;
