import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header/Header.js';
import Filtres from './components/Filtres/Filtres.js';
import Listes from './components/Listes/Listes.js';
import Top from './components/Top/Top.js';
import CreationSession from './components/CreationSession/CreationSession.js';

function App() {
  return (
    <div className="App">
      <Top/>
      <Listes/>
    </div>
  );
}

export default App;