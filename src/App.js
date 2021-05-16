import logo from "./logo.svg";
import "./App.css";
import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import CreateTable from "./CreateTable";

function App() {
  var [data, setData] = useState();
  const [number, setNumber] = useState(0);
  const [fetch, setFetch] = useState(false);

  // const fetchFromAPI =  () => {
  useEffect(async () => {
    if (number > 0) {
      console.log("callingAPI");
      const response = await axios.get(
        "https://raw.githubusercontent.com/invictustech/test/main/README.md"
      );
      setData(response.data);
    }
  }, [fetch]);
  const getFreqs = (data) => {
    console.log(data);
    console.log(data);
  };

  return (
    <center>
      <h1 className="header">Word Frequency Counter</h1>
      <form className="form">
        <input
          type="number"
          placeholder="Submit number of Rows"
          onChange={(e) => {
            setNumber(e.target.value);
          }}
        />
        <input
          className="submit"
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            if (number > 0) {
              setFetch(true);
            }
          }}
        />
      </form>
      {data ? <CreateTable data={data} number={number} /> : ""}
    </center>
  );
}

export default App;
