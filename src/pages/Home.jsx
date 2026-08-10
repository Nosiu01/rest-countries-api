import { useState } from "react";
import SearchBar from "../components/SearchBar";
import DropDown from "../components/DropDown";
import Card from "../components/Card";
import "./Home.scss";

export default function Home({ countries }) {
	const [searchTerm, setSearchTerm] = useState("");
	const [selectedRegion, setSelectedRegion] = useState(null);

	const normalizedSearch = searchTerm.trim().toLowerCase();
	const filteredCountries = countries.filter((country) => {
		const regionMatches = selectedRegion
			? country.region === selectedRegion
			: true;
		const nameMatches = country.name.toLowerCase().includes(normalizedSearch);
		return regionMatches && nameMatches;
	});

	return (
		<section className='home-page'>
			<div className='upper-bar'>
				<SearchBar value={searchTerm} onChange={setSearchTerm} />
				<DropDown selected={selectedRegion} onChange={setSelectedRegion} />
			</div>
			{filteredCountries.length === 0 && (
				<p className='country-list__empty'>No countries match your search</p>
			)}
			<ul className='country-list'>
				{filteredCountries.map((country) => (
					<li key={country.alpha3Code}>
						<Card country={country} />
					</li>
				))}
			</ul>
		</section>
	);
}
