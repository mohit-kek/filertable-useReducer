import React, { useState } from "react";
import axios from "axios";

export default function ShowTodos({ state, dispatch }) {
  const { todos, subdata } = state;
  const [search, setSearch] = useState("");

  const showSubData = async (id) => {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    dispatch({
      type: "todo__subdata",
      payload: res.data
    });
  };

  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: "0.7" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h4>Todos</h4>
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        {todos
          .filter((val) =>
            search === ""
              ? val
              : val.title.toLowerCase().includes(search.toLowerCase())
          )
          .map((val) => (
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "10px"
              }}
              key={val.id}
            >
              <h5>{val.id}</h5>
              <h5>{val.title}</h5>
              <h5>{`${
                val.completed === true ? "completed" : "incompleted"
              }`}</h5>
              <button onClick={() => showSubData(val.id)}>View User</button>
            </div>
          ))}
      </div>
      {subdata === null ? (
        ""
      ) : (
        <div style={{ flex: "0.3", marginTop: "30vh" }}>
          <h4>{subdata.id}</h4>
          <h4>{subdata.name}</h4>
          <h4>{subdata.username}</h4>
          <h4>{subdata.email}</h4>
        </div>
      )}
    </div>
  );
}
