import { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllCountries,
  getCountry,
  filterCountriesByContinent,
  filterByActivities,
  orderByName,
  getAllActivities,
  clearDetail
} from "../../actions";
import CardPais from "./CardPais";
import footerImg from "../../Img/FooterPagePICountries.png";
import Loading from "../../Components/Loading";
import Pagination from "./Paginado"

export default function Countries(props) {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    country: "",
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [countriesPerPage, setCountriesPerPage] = useState(9);
  const [orden, setOrden] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
      dispatch(getAllCountries());
      dispatch(getAllActivities());
    dispatch(clearDetail());
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, "1500");
  }, [dispatch]);

  
  const handleChange = (event) => {
    setCurrentPage(1);
    setState({ country: event.target.value });
    dispatch(getCountry(state.country));
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(getCountry(state.country));
    setState({ country: "" });
  };
  
  const countries = useSelector((state) => state.countries);
  console.log(countries);
  
  const activities = useSelector((state) => state.allActivities);
  let actName = [];
  activities.map(act => actName.push(act.name))
  let actSet = [...new Set(actName)]
  
  const indexOfLastCountry = currentPage * countriesPerPage
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage 
  const currentCountries = countries.slice(indexOfFirstCountry, indexOfLastCountry)

  const nextPage = (pageNumber) => {
    if(currentPage < Math.ceil(countries.length / countriesPerPage))
    setCurrentPage(pageNumber);
  };
  
  const prevPage = (pageNumber) => {
    if(currentPage > 1)
    setCurrentPage(pageNumber);
  };

  const filterByContinent = (event) => {
    setCurrentPage(1);
    dispatch(filterCountriesByContinent(event.target.value));
  };

  const filteredByActivity = (event) => {
    setCurrentPage(1);
    dispatch(filterByActivities(event.target.value));
  };

  const handleOrder = (event) => {
    event.preventDefault();
    setCurrentPage(1);
    dispatch(orderByName(event.target.value));
    setOrden(`Ordenado ${event.target.value}`);
  };

  return (

    
    <PaginaPrincipal>
      <FiltCont>
        <CountrySearcher onSubmit={handleSubmit}>
          <input
            type="text"
            id="country"
            autoComplete="off"
            value={state.country}
            onChange={handleChange}
            placeholder="Buscar..."
            />
          <button type="submit">🔍</button>
        </CountrySearcher>
        <div>
          <select onChange={handleOrder}>
            <option value="all">Todos</option>
            <option value="asc">Alfabético A-Z</option>
            <option value="des">Alfabético Z-A</option>
            <option value="populationMayor">Población + -</option>
            <option value="populationMenor">Población - +</option>
          </select>

          <select onChange={filteredByActivity}>
            <option value="All">Todas</option>
            {
              actSet.map(act => {
                return (
                  <option value={act}>{act}</option>
                )
              })
            }
          </select>

          <select onChange={filterByContinent}>
            <option value="All">Todos</option>
            <option value="Africa">Africa</option>
            <option value="Antarctica">Antártida</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europa</option>
            <option value="Oceania">Oceania</option>
            <option value="North America">Norteamérica</option>
            <option value="South America">Sudamérica</option>
          </select>
        </div>
        <div className="filt-text">
          <p>A-Z / #Habitantes</p>
          <p>Actividades</p>
          <p>Continente</p>
        </div>
      </FiltCont>
          <Pagination 
          nextPage={nextPage}
          prevPage={prevPage}
          currentPage={currentPage}
          countriesPerPage={countriesPerPage} 
          countries={countries.length}
          />

        {loading ? (<Loading />) : (
      <PaisesContainer>
        {currentCountries?.map((country) => (
          <CardPais
          key={country.countryId}
          id={country.countryId}
          flag={country.flag}
            name={country.name}
            continent={country.continent}
          />
        ))}
      </PaisesContainer>
        )}
      <img src={footerImg} alt="monuments" id="footer" />
    </PaginaPrincipal>
  );
}

const PaisesContainer = styled.section`
  width: 130rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  main {
    box-shadow: 0 5px 10px 0 rgb(0 0 0 / 35%);
    padding: 1rem;
    height: 21rem;
  }
`;

const CountrySearcher = styled.form`
  input {
    width: 60rem;
    min-height: 4rem;
    padding: 0 1.5rem;
    color: #2B3240;
    font-size: 1.5rem;
    font-weight: 700;
    font-family: "Noto Sans Vai";
    border: 1px solid #de7456;
    border-radius: 6px 0 0 6px;
    background-color: transparent;
    &:focus,
    :focus-visible {
      border-color: #43597c;
      outline: none;
    }
  }
  button {
    min-height: 4.2rem;
    padding: 0.5em 1em;
    border: none;
    border-radius: 0 6px 6px 0;
    background-color: #de7456;
    color: #fff;
    font-size: 15px;
    transition: background-color 0.3s ease-in-out;
    &:hover {
      background-color: #43597c;
    }
  }
`;

const FiltCont = styled.section`
  display: grid;
  grid-template-columns: 75rem auto auto;
  justify-content: space-evenly;
  align-items: center;
  margin: 1rem auto;
  padding: 1rem;
  width: 100rem;
  div {
    display: flex;
    flex-direction: column;
    select {
      max-height: 3rem;
      margin: 0.5rem 0;
      border-radius: 1.5rem;
      font-size: 0.3rem;
      border: none;
      padding: 0.5rem;
      background-color: #e8e8e8;
      box-shadow: 4px 6px 18px #ffffff, -6px -6px 6px #c5c5c5;
      font-size: small;
      font-weight: 700;
      &:focus {
        outline-color: white;
      }
    }
  }
  .filt-text{
    font-size: 1.2rem;
    margin: 1rem 0;
  }
`;

const PaginaPrincipal = styled.main`
  #footer {
    position: fixed;
    width: 100%;
    height: 40rem;
    bottom: -1px;
    z-index: -1
  }
`;

