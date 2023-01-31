import Header from './components/Header/Header.js';
import Filtres from './components/Filtres/Filtres.js';
// import CreationSession from './components/CreationSession/CreationSession.js';
import CreationSession from './components/CreationSession/CreationSession.js';

function App() {
  return (
    <div className="App">
      <Header />
      <Filtres />
      <CreationSession/>
    </div>
  );
}

export default App;