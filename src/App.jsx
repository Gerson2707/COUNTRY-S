import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";
import FormCountry from "./components/FormCountry";
import CountryCard from "./components/CountryCard";
import ErrorSearch from "./components/ErrorSearch";

function App() {
  const [country, setCountry] = useState();
  const [inputValue, setInputValue] = useState('mexico')
const [hasError, setHasError] = useState(false)

  useEffect(() => {
    const url = `https://restcountries.com/v3.1/name/${inputValue}`
    axios.get(url)
      .then((res) => {
        setCountry(res.data)
        setHasError(false)
      })
      .catch((err) => {
        console.log(err)
        setHasError(true)
      });
  }, [inputValue]);

console.log(inputValue)
  return (
    <div>
      <FormCountry setInputValue={setInputValue} />
      {
        hasError
        ? <ErrorSearch />
        : (
          <CountryCard country={country} />
        )
      }
      
    </div>
  );
}

export default App;
