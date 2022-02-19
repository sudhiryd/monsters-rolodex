import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Users from "./components/user";
import {Card} from "./components/card"

function App() {
  const [name, setName] = useState("sudhir");
  const [address, setAddress] = useState("Delhi");
  const [user, setUser] = useState(null);
  const [serchUser, setSerchUser] = useState("");
  useEffect(() => {
    if (serchUser.length > 0) {
      const fetchData = async () => {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users?username=${serchUser}`
        );
        const resJsn = await response.json();
        setUser(resJsn[0]);
      };
      fetchData();
    }
  }, [serchUser]);
  return (
    <div className="App">
      <Card name="sudhir">
        <h1>Sudhir</h1>
      </Card>
      <Users userId={5} />
      <p>{name}</p>
      <p>{address}</p>
      <button onClick={() => setName("My Name")}>Set Name</button>
      <button onClick={() => setAddress("NOIDA")}>Set Address</button>
      <input
        type="text"
        value={serchUser}
        onChange={(event) => setSerchUser(event.target.value)}
      />
      {user ? (
        <div>
          <p>{user.name}</p>
          <p>{user.username}</p>
          <p>{user.email}</p>
        </div>
      ) : (
        <p>No Data</p>
      )}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
