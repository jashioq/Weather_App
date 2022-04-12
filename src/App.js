import Homepage from './pages/Homepage';
import About from './pages/About';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="about" element={<About />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
