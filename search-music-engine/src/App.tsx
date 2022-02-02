import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeSearch from './components/HomeSearch';
import MusicDetail from './components/MusicDetail'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {Container} from 'react-bootstrap'

function App() {
  return (
    <Container>
      <BrowserRouter>
          <div className="App">
                <Routes>
                  <Route path='/' element={<HomeSearch />} />
                  <Route path='/singleSomng/:id' element={<MusicDetail />} />
                </Routes>
          </div>
      </BrowserRouter>
     </Container>

  );
}

export default App;
