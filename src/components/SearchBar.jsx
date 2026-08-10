import { IoIosSearch } from "react-icons/io";
import "./SearchBar.scss";

const SearchBar = ({ value, onChange }) => {
	return (
		<div className='search-bar'>
			<IoIosSearch />
			<input
				type='text'
				placeholder='Search for a country...'
				value={value}
				onChange={(event) => onChange(event.target.value)}
			/>
		</div>
	);
};

export default SearchBar;
