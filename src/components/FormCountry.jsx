import { useRef } from "react";

const FormCountry = ({ setInputValue }) => {

const inputSearch = useRef()

  const handleSubmit = e => {
    e.preventDefault()
    setInputValue(inputSearch.current.value.trim().toLowerCase())
  };



  return (
    <form onSubmit={handleSubmit} >
      <input ref={inputSearch} type="text" />
      <button>Search</button>
    </form>
  );
};

export default FormCountry;
