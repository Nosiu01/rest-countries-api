import { IoIosSearch } from "react-icons/io";
import "./SearchBar.scss";

const SearchBar = ({ value, onChange }) => {
	return (
		<div className='search-bar'>
			<IoIosSearch />
			<label className='search-bar__label' htmlFor='country-search'>
				Search for a country
			</label>
			<input
				id='country-search'
				type='search'
				placeholder='Search for a country...'
				value={value}
				onChange={(event) => onChange(event.target.value)}
			/>
		</div>
	);
};

export default SearchBar;
