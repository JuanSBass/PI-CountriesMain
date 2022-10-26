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
} from "../../actions";
import CardPais from "./CardPais";
import footerImg from "../../Img/FooterPagePICountries.png";
import Loading from "../../Components/Loading";

export default function Countries(props) {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    country: "",
  });
  const [currentPage, setCurrentPage] = useState(0);
  const [orden, setOrden] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    dispatch(getAllCountries());
    dispatch(getAllActivities());
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, "1500");
  }, [dispatch]);

  const handleChange = (event) => {
    setCurrentPage(0);
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

  const paginado = () => {
    if (state.country.length === 0)
      return countries.slice(currentPage, currentPage + 9);
    // if(currentPage === 0) return countries.slice(0,9);
    return countries.slice(currentPage, currentPage + 9);
  };

  const nextPage = () => {
    if (countries.length > currentPage + 9) setCurrentPage(currentPage + 9);
  };

  const prevPage = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 9);
  };

  const filterByContinent = (event) => {
    setCurrentPage(0);
    dispatch(filterCountriesByContinent(event.target.value));
  };

  const filteredByActivity = (event) => {
    setCurrentPage(0);
    dispatch(filterByActivities(event.target.value));
  };

  const handleOrder = (event) => {
    event.preventDefault();
    setCurrentPage(0);
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
          <PaginadoSection>
            <button className="next" onClick={prevPage}>
              <div className="arrow-wrapper">
                <div className="arrow-back"></div>
              </div>
            </button>
            <button className="next" onClick={nextPage}>
              <div className="arrow-wrapper">
                <div className="arrow"></div>
              </div>
            </button>
          </PaginadoSection>

        {loading ? (<Loading />) : (
      <PaisesContainer>
        {paginado()?.map((country) => (
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

const PaginadoSection = styled.div`
  display: flex;
  justify-content: space-around;
  width: 30rem;
  margin: 1rem auto;
  padding: 1rem;  
  border-radius: 10rem;

  .next {
    box-sizing: border-box;
    border: 0;
    border-radius: 2rem;
    color: #fff;
    padding: 1em 1.8em;
    background: #de7456;
    display: flex;
    transition: 0.4s background;
    align-items: center;
    gap: 0.6em;
    font-weight: bold;

    .arrow-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .arrow,
    .arrow-back {
      margin-top: 1px;
      width: 1rem;
      background: #de7456;
      height: 2px;
      position: relative;
      transition: 0.2s;
    }

    .arrow::before {
      content: "";
      position: absolute;
      border: solid #fff;
      border-width: 0 2px 2px 0;
      display: inline-block;
      top: -3px;
      right: 5px;
      transition: 0.4s;
      padding: 3px;
      transform: rotate(-45deg);
    }

    .arrow-back::before {
      content: "";
      position: absolute;
      border: solid #fff;
      border-width: 0 2px 2px 0;
      display: inline-block;
      top: -3px;
      left: 5px;
      transition: 0.4s;
      padding: 3px;
      transform: rotate(135deg);
    }

    &:hover {
      background-color: #2b3240;
    }

    &:hover .arrow,
    :hover .arrow-back {
      background-color: #fff;
    }

    &:hover .arrow:before {
      right: 0;
    }

    &:hover .arrow-back:before {
      left: 0;
    }
  }
`;
