import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeSearch from './components/HomeSearch';
import MusicDetail from './components/MusicDetail'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
        <div className="App">
          <header className="App-header">
              <Routes>
                <Route path='/' element={<HomeSearch />} />
                <Route path='detail' element={<MusicDetail />} />
              </Routes>
          </header>
        </div>
     </BrowserRouter>
  );
}

export default App;
