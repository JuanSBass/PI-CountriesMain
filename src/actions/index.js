import axios from "axios";
export const GET_COUNTRIE = "GET_COUNTRIE";
export const GET_ALL_COUNTRIES = "GET_ALL_COUNTRIES";
export const GET_COUNTRIE_DETAIL = "GET_COUNTRIE_DETAIL";
export const ADD_ACTIVITY = "ADD_ACTIVITY";
export const REMOVE_ACTIVITY = "REMOVE_ACTIVITY";
export const FILTER_BY_CONTINENT = "FILTER_BY_CONTINENT";
export const FILTER_BY_ACTIVITY = "FILTER_BY_ACTIVITY";
export const ORDER_BY_NAME = "ORDER_BY_NAME";
export const GET_ALL_ACTIVITIES = "GET_ALL_ACTIVITIES";
export const CLEAR_DETAIL = "CLEAR_DETAIL";

export function getCountry(name) {
  return function (dispatch) {
    return axios
      .get(`/countries?name=${name}`)
      .then((response) => response.data)
      .then((data) => {
        dispatch({ type: GET_COUNTRIE, payload: data });
      })
      .catch((error) => {
        dispatch({ type: GET_COUNTRIE, payload: error.message });
      });
  };
}

export function getAllCountries() {
  return function (dispatch) {
    return axios
      .get("/countries")
      .then((response) => response.data)
      .then((data) => {
        dispatch({ type: GET_ALL_COUNTRIES, payload: data });
      });
  };
}

export function getCountryDetail(id) {
  return function (dispatch) {
    return axios
      .get(`/countries/${id}`)
      .then((response) => response.data)
      .then((data) => {
        dispatch({ type: GET_COUNTRIE_DETAIL, payload: data });
      });
  };
}

export const addActivity = (input) => {
  return function (dispatch) {
    return axios
      .post("/activities", input)
      .then((response) => response.data)
      .then((data) => {
        dispatch({
          type: ADD_ACTIVITY,
          payload: {
            newActivity: data.newActivity,
            countryIds: data.countryIds,
          },
        });
      });
  };
};

export const removeActivity = (id) => {
  return {
    type: REMOVE_ACTIVITY,
    payload: id,
  };
};

export const getAllActivities = () => {
  return function (dispatch) {
    return axios
      .get("/activities")
      .then((response) => response.data)
      .then((data) => {
        dispatch({ type: GET_ALL_ACTIVITIES, payload: data });
      });
  };
};

//? <---------- Filters -------->

export function filterCountriesByContinent(continent) {
  return {
    type: FILTER_BY_CONTINENT,
    payload: continent,
  };
}

export function filterByActivities(activity) {
  return {
    type: FILTER_BY_ACTIVITY,
    payload: activity,
  };
}

//? <--------- Orders -------->

export function orderByName(name) {
  return {
    type: ORDER_BY_NAME,
    payload: name,
  };
}

export function clearDetail (){
  return{
    type: CLEAR_DETAIL
  }
}