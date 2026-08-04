import { Link } from "react-router-dom";

export default function Home({ countries }) {
	return (
		<section className='home-page'>
			<h1>Lista krajów</h1>
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
