import "./index.scss";
import { Link } from 'react-router-dom';

const LinkButton = ({ path, name }) => {
    return (
        <Link to={path}>
            <button>
                {name}
            </button>
        </Link>
    )
}

export default LinkButton
