import { Link, useNavigate, useParams } from "react-router-dom";

export default function CountryPage({ countries }) {
	const { alpha3Code } = useParams();
	const navigate = useNavigate();
	const country = countries.find(
		(item) => item.alpha3Code.toUpperCase() === alpha3Code?.toUpperCase()
	);

	if (!country) {
		return (
			<section className='country-details not-found'>
				<h1>Nie znaleziono kraju</h1>
				<p>Sprawdź czy kod alpha3 jest poprawny.</p>
				<Link to='/'>Wróć do strony głównej</Link>
			</section>
		);
	}

	return (
		<section className='country-details'>
			<button
				type='button'
				className='back-button'
				onClick={() => navigate(-1)}
			>
				← Powrót
			</button>
			<h1>{country.name}</h1>
			<div className='country-meta'>
				<dl>
					<dt>Alpha3 Code</dt>
					<dd>{country.alpha3Code}</dd>
					<dt>Region</dt>
					<dd>{country.region}</dd>
					<dt>Subregion</dt>
					<dd>{country.subregion || "Brak danych"}</dd>
					<dt>Stolica</dt>
					<dd>{country.capital || "Brak danych"}</dd>
					<dt>Populacja</dt>
					<dd>{country.population.toLocaleString("pl-PL")}</dd>
					<dt>Waluty</dt>
					<dd>
						{country.currencies?.map((currency) => currency.name).join(", ") ||
							"Brak danych"}
					</dd>
					<dt>Języki</dt>
					<dd>
						{country.languages?.map((language) => language.name).join(", ") ||
							"Brak danych"}
					</dd>
				</dl>
			</div>
			<div className='country-borders'>
				<h2>Granice</h2>
				{country.borders?.length ? (
					<ul>
						{country.borders.map((borderCode) => (
							<li key={borderCode}>
								<Link to={`/country/${borderCode}`}>{borderCode}</Link>
							</li>
						))}
					</ul>
				) : (
					<p>Brak granic lub dane niedostępne.</p>
				)}
			</div>
			<p className='detail-home-link'>
				<Link to='/'>Powrót do listy krajów</Link>
			</p>
		</section>
	);
}
