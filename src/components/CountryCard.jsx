const CountryCard = ({ country }) => {
  console.log(country);
  return (
    <div>
      <img src={country?.[0].flags.png} alt="bandera del pais" />
      <div>Lengua: {country?.[0].languages.spa} </div>
      <div>Capital: {country?.[0].capital[0]}</div>
      <div>Population: {country?.[0].population}</div>
    </div>
  );
};
export default CountryCard;
