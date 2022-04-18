import Homepage from './pages/Homepage';
import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.title = 'SortSee';
  }, []);
  return (
    <Homepage />
  );
}

export default App;
