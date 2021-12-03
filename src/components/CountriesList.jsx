import { Link } from 'react-router-dom';

export default function CountriesList(props) {
  const { countries } = props;

  return (
    <div className="col-5">
      <div className="list-group">
        {countries.map((country) => {
          return (
            <div className="col-5" key={country.alpha3Code}>
              <div className="list-group">
                <Link
                  className="list-group-item list-group-item-action"
                  to={country.alpha3Code}
                >
                <img 
                src={`https://flagpedia.net/data/flags/w580/${country.alpha2Code.toLowerCase()}.png`}
                alt="Flag"
                width="100px"
                height="auto"
                />
                  <p>{country.name.official}</p>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
