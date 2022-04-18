import Homepage from './pages/Homepage';
import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.title = "Jan's weather app";
  }, []);
  return (
    <Homepage />
  );
}

export default App;
