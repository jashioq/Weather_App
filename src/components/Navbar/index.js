import "./index.scss";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
        <Link to="/">
            <h1>Weather App</h1>
        </Link>
        <Link to="/about">
            <h1>About</h1>
        </Link>
    </div>
  )
}

export default Navbar
