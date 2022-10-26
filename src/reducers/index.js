import {
  GET_COUNTRIE,
  GET_COUNTRIE_DETAIL,
  ADD_ACTIVITY,
  REMOVE_ACTIVITY,
  GET_ALL_COUNTRIES,
  FILTER_BY_CONTINENT,
  FILTER_BY_ACTIVITY,
  ORDER_BY_NAME,
  GET_ALL_ACTIVITIES,
} from "../actions";

const initialState = {
  activities: [1], //? Acá agrega las actividades
  allActivities: [], //? GET back
  countries: [], //? carga los paises buscados
  copyCountries: [], //? Apoyo para el filter
  countryDetail: {}, //? Carga toda la data en un obj
};

function rootReducer(state = initialState, action) {
  if (action.type === GET_ALL_COUNTRIES) {
    return {
      ...state,
      countries: action.payload,
      copyCountries: action.payload,
    };
  }
  if (action.type === GET_COUNTRIE) {
    return {
      ...state,
      countries: action.payload,
    };
  }
  if (action.type === REMOVE_ACTIVITY) {
    return {
      ...state,
      activities: state.activities.filter((m) => m.id !== action.payload),
    };
  }
  if (action.type === GET_COUNTRIE_DETAIL) {
    return {
      ...state,
      countryDetail: action.payload,
    };
  }
  if (action.type === ADD_ACTIVITY) {
    return {
      ...state,
      activities: state.activities.concat(action.payload),
    };
  }

  //? <--------- Filters -------->

  if (action.type === FILTER_BY_CONTINENT) {
    const allCountries = state.copyCountries;
    const filteredByContinent =
      action.payload === "All"
        ? allCountries
        : allCountries.filter((c) => c.continent === action.payload);
    return {
      ...state,
      countries: filteredByContinent,
    };
  }

  if (action.type === FILTER_BY_ACTIVITY) {
    const allCountries = state.copyCountries;
    const filteredActivities =
      action.payload === "All"
        ? allCountries
        : allCountries.filter((country) => {
            let hasActivity = false;
            country.activities.forEach((activity) => {
              if (activity.name === action.payload) {
                hasActivity = true;
              }
            });
            if (hasActivity) return country;
          });
    return {
      ...state,
      countries: filteredActivities,
    };
  }

  if (action.type === GET_ALL_ACTIVITIES) {
    return {
      ...state,
      allActivities: action.payload,
    };
  }

  //? <--------- Orders -------->

  if (action.type === ORDER_BY_NAME) {
    if (action.payload === "all") return state;
    if (action.payload === "asc") {
      state.countries.sort(function (a, b) {
        if (a.name > b.name) return 1;
        if (b.name > a.name) return -1;
        return 0;
      });
    } else if (action.payload === "des") {
      state.countries.sort(function (a, b) {
        if (a.name > b.name) return -1;
        if (b.name > a.name) return 1;
        return 0;
      });
    } else if (action.payload === "populationMayor"){
      state.countries.sort(function (a, b) {
        if (a.population > b.population) return -1;
        if (b.population > a.population) return 1;
        return 0;
      });
    } else {
      state.countries.sort(function (a, b) {
        if (a.population > b.population) return 1;
        if (b.population > a.population) return -1;
        return 0;
      });
    }
  }

  return state;
}

export default rootReducer;

// const separador = (num) => {
//   let resultado = "";
//     let str = String(num);
//     let aux = 0;
//     for (let i = str.length - 1; i >= 0; i--) {
//       if (aux % 3 === 0 && aux !== 0) {
//         resultado = "," + resultado;
//       }
//       resultado = str[i] + resultado;
//       aux++;
//     }
//   return resultado;
// }
