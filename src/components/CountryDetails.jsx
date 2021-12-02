import { useParams } from 'react-router-dom';

export default function CountryDetails(props) {
  const { id } = useParams(); // const params = useParams()

  const CountriesList = props.countries;
  const foundCountry = CountriesList.find(
    (country) => country.alpha3Code === id); // params.id
  return (
    <div>
      {!foundCountry && <h3>Country not found!</h3>}
      {foundCountry && (
        <div>
          <h2>{foundCountry.name.common}</h2>
          <hr />
          <div>Capital: {foundCountry.capital}</div>
          <hr />
          <div>Area: {foundCountry.area}km2</div>
          <br />
        </div>
      )}
    </div>
  );
}
