import "./index.scss";

const SearchField = ({ city, setCity }) => {
    return (
        <div>
            <input onChange={event => setCity(event.target.value)} type="text" value={city} placeholder="Enter city" />
        </div>
    )
}

export default SearchField
