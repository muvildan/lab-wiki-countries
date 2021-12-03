import { useParams } from 'react-router-dom';
import { Link, Redirect } from 'react-router-dom';
import { useState, useEffect } from 'react';

const CountryDetails = ({ countries }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [country, setCountry] = useState({});
  const { id: countryId } = useParams();
  


  console.log("geyeyy")
  useEffect(() => {
    const foundCountry = countries.find(
      (country) => country.alpha3Code === countryId
    );

    if (!foundCountry) <Redirect to={'/error/error'}/>
  
    setCountry(foundCountry);
    setIsLoading(false);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countryId]);

  const bordersCountries = countries.filter((oneCountry) => 
   country.borders && country.borders.includes(oneCountry.alpha3Code)
  );


  return (
    <div>
      {isLoading && <p>Data is loading...</p>}
      {!isLoading && (
        <div className="col-7">
          <img
            src={`https://flagpedia.net/data/flags/w580/${country.alpha2Code.toLowerCase()}.png`}
            alt=""
            width="300px"
            height="auto"
          />
          <h1>{country.name.common}</h1>
          <table className="table">
            <tbody>
              <tr>
                <td style={{ width: '30%' }}>Capital</td>
                <td>{country.capital}</td>
              </tr>
              <tr>
                <td>Area</td>
                <td>
                  {country.area} km <sup>2</sup>
                </td>
              </tr>
              <tr>
                <td>Borders</td>
                <td>
                  {country.borders.length === 0 ? (
                    <p>This country has no neighbouring countries.</p>
                  ) : (
                    <ul>
                      {bordersCountries.map((country, index) => {
                        return (
                          <li className="list-decoration-none"
                          key={index}>
                            <Link to={country.alpha3Code}>{country.name.common}</Link>;
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default CountryDetails;
