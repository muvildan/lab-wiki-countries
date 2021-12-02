import { Link } from 'react-router-dom';

export default function CountriesList(props) {
  const { countries } = props;

  return (
    <div className="col-5">
      <div className="list-group">
        {countries.map((country) => {
          return (
            <Link to={country.alpha3Code}>
              <p>{country.name.common}</p>
            </Link>
          )
        })}
      </div>
    </div>
  );
}
