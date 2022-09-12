import "./styles.css";
import React, { useEffect, useReducer } from "react";
import axios from "axios";
import { todoReducer } from "./reducers/todoReducer";
import ShowTodos from "./ShowTodos";

export default function App() {
  const [state, dispatch] = useReducer(todoReducer, {
    todos: [],
    subdata: []
  });

  const fetchData = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
    dispatch({
      type: "todo__data",
      payload: res.data
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <ShowTodos state={state} dispatch={dispatch} />;
}
