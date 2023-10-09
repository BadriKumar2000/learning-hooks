import React, { useReducer, useEffect } from "react";
import axios from "axios";

const initialState = {
  loading: true,
  post: {},
  error: "",
};

const reducer = (state, action) => {
  // here we can see that there are two state transitiosn one is success and another one is failure
  //reducer function takes state and action as parametes and return a newState value
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        loading: false,
        post: action.payload,
        error: "",
      };
    case "FETCH_FAILURE":
      return {
        loading: false,
        post: {},
        error: action.payload,
      };
    default:
      return state;
  }
};

function FetchingDataTwo() {
  const [state, dispatch] = useReducer(reducer, initialState);
  // dispatch method dispatches the action to the reducer function
  // using switch statement based on action.type that  is dispatched we are returning the newState value
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        dispatch({ type: "FETCH_SUCCESS", payload: response.data.title });
      })
      .catch((error) => {
        dispatch({ type: "FETCH_FAILURE", payload: error.msg });
      });
  }, []);
  const { loading, post, error } = state;
  return (
    <div>
      {loading ? "Page is Loading" : post}
      {error && error}
    </div>
  );
}

export default FetchingDataTwo;
