import { Link, useNavigate, useParams } from "react-router-dom";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import "./CountryPage.scss";

export default function CountryPage({ countries }) {
	const { alpha3Code } = useParams();
	const navigate = useNavigate();
	const country = countries.find(
		(item) => item.alpha3Code.toUpperCase() === alpha3Code?.toUpperCase()
	);

	if (!country) {
		return (
			<section className='country-details not-found'>
				<h1>Country not found</h1>
				<p>Check to see if the alpha3 code is correct</p>
				<Link to='/'>Return to the home page</Link>
			</section>
		);
	}

	const borderCountries = country.borders?.map((borderCode) => {
		const borderCountry = countries.find(
			(item) => item.alpha3Code.toUpperCase() === borderCode.toUpperCase()
		);
		return {
			code: borderCode,
			name: borderCountry?.name || borderCode,
		};
	});

	return (
		<section className='country-details'>
			<button
				type='button'
				className='back-button'
				onClick={() => navigate(-1)}
			>
				<HiOutlineArrowNarrowLeft /> Back
			</button>

			<div className='country-content'>
				<img
					className='country-flag'
					src={country.flags.png.toLowerCase()}
					alt={`Flag of ${country.name}`}
				/>

				<div className='country-info'>
					<h2 className="country-card__name">{country.name}</h2>

					<div className='country-meta'>
						<dl className='country-meta__col'>
							<div className='country-meta__row'>
								<dt>Native Name:</dt>
								<dd>{country.nativeName || country.name}</dd>
							</div>
							<div className='country-meta__row'>
								<dt>Population:</dt>
								<dd>{country.population.toLocaleString()}</dd>
							</div>
							<div className='country-meta__row'>
								<dt>Region:</dt>
								<dd>{country.region}</dd>
							</div>
							<div className='country-meta__row'>
								<dt>Sub Region:</dt>
								<dd>{country.subregion || "N/A"}</dd>
							</div>
							<div className='country-meta__row'>
								<dt>Capital:</dt>
								<dd>{country.capital || "N/A"}</dd>
							</div>
						</dl>

						<dl className='country-meta__col'>
							<div className='country-meta__row'>
								<dt>Top Level Domain:</dt>
								<dd>{country.topLevelDomain?.join(", ") || "N/A"}</dd>
							</div>
							<div className='country-meta__row'>
								<dt>Currencies:</dt>
								<dd>
									{country.currencies
										?.map((currency) => currency.name)
										.join(", ") || "N/A"}
								</dd>
							</div>
							<div className='country-meta__row'>
								<dt>Languages:</dt>
								<dd>
									{country.languages
										?.map((language) => language.name)
										.join(", ") || "N/A"}
								</dd>
							</div>
						</dl>
					</div>

					{borderCountries?.length > 0 && (
						<div className='country-borders'>
							<span className='country-borders__label'>Border Countries:</span>
							<div className='country-borders__list'>
								{borderCountries.map((border) => (
									<Link
										key={border.code}
										to={`/country/${border.code}`}
										className='country-borders__item'
									>
										{border.name}
									</Link>
								))}
							</div>
						</div>
					)}
				</div>
			</div>
		</section>
	);
}
