import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import DropDown from "../components/DropDown";
import "./Home.scss"

export default function Home({ countries }) {
	return (
		<section className='home-page'>
            <div className="upper-bar">
                <SearchBar />
                <DropDown />
            </div>
			<p>Wybierz kraj, aby zobaczyć szczegóły po kodzie alpha3.</p>
			<ul className='country-list'>
				{countries.map((country) => (
					<li key={country.alpha3Code}>
						<Link to={`/country/${country.alpha3Code}`}>
							{country.name} ({country.alpha3Code})
						</Link>
					</li>
				))}
			</ul>
		</section>
	);
}
