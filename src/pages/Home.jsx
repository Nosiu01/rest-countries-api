import SearchBar from "../components/SearchBar";
import DropDown from "../components/DropDown";
import Card from "../components/Card";
import "./Home.scss"


export default function Home({ countries }) {
	return (
		<section className='home-page'>
            <div className="upper-bar">
                <SearchBar />
                <DropDown />
            </div>
			<ul className='country-list'>
				{countries.map((country) => (
					<li key={country.alpha3Code}>
						<Card country={country} />
					</li>
				))}
			</ul>
		</section>
	);
}
