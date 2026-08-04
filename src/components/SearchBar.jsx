import { IoIosSearch } from "react-icons/io";
import "./SearchBar.scss";

const SearchBar = () => {
	return (
		<div className='search-bar'>
			<IoIosSearch />
			<input type='text' placeholder='Search for a country...' />
		</div>
	);
};

export default SearchBar;
