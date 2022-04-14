import "./index.scss";

const SearchField = ({ city, setCity, onPress }) => {
    return (
        <div>
            <input onChange={event => setCity(event.target.value)} onKeyPress={onPress} type="text" value={city} placeholder="Enter city" />
        </div>
    )
}

export default SearchField
