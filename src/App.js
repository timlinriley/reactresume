import logo from './logo.svg';
import './App.css';
import {Route, Routes} from 'react-router-dom';
import Main from './components/Main';
import Education from './components/Education';
import Nav from './components/Nav';
import Summary from './components/Summary';
import Experience from './components/Experience';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/Education" element={<Education/>}/>
        <Route path="/Summary" element={<Summary/>}/>
        <Route path="/Experience" element={<Experience/>}/>
        <Route path="/Skills" element={<Skills/>}/>
      </Routes>
    </div>
  );
}
document.body.style = 'background-color:rgb(44, 43, 43);';
export default App;
