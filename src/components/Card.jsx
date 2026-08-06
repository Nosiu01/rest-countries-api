import { Link } from 'react-router-dom';
import './Card.scss';

export default function CountryCard({ country }) {
	const { name, population, region, capital, flags, alpha3Code } = country;

	return (
		<Link to={`/country/${alpha3Code}`} className="country-card">
			<img
				className="country-card__flag"
				src={flags.png.toLowerCase()}
				alt={`Flag of ${name}`}
			/>
			<div className="country-card__body">
				<h3 className="country-card__name">{name}</h3>
				<p className="country-card__info">
					<strong>Population:</strong> {population.toLocaleString()}
				</p>
				<p className="country-card__info">
					<strong>Region:</strong> {region}
				</p>
				<p className="country-card__info">
					<strong>Capital:</strong> {capital}
				</p>
			</div>
		</Link>
	);
}