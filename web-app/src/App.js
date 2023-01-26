import Header from './components/Header/Header.js';
import Filtres from './components/Filtres/Filtres.js';
// import CreationSession from './components/CreationSession/CreationSession.js';
import CreationGroupe from './components/CreationGroupe/CreationGroupe.js';

function App() {
  return (
    <div className="App">
      <Header />
      <Filtres />
      <CreationGroupe/>
    </div>
  );
}

export default App;
