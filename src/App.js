import React from "react";
import "./index.css";
import { List, Item } from "./List";

function saveToLocalStorage(value) {
  let stringValue = JSON.stringify(value);
  localStorage.setItem("data", stringValue);
}

function loadFromLocalStorage() {
  let stringValue = localStorage.getItem("data");
  return JSON.parse(stringValue);
}

function App() {
  let initialValue = loadFromLocalStorage();

  if (!initialValue)
    initialValue = [
      { name: "Earth", position: 3 },
      { name: "Mars", position: 4 },
      { name: "Venus", position: 2 },
    ];

  // let [state, setState] = React.useState(initialValue);
  let [planets, setPlanets] = React.useState(initialValue);
  let [input, setInput] = React.useState("");

  function removePlanet(planetToRemove) {
    let filteredPlanets = planets.filter(function (planet) {
      return planet.name !== planetToRemove.name;
    });

    setPlanets(filteredPlanets);
    saveToLocalStorage(filteredPlanets);
  }

  function addPlanet() {
    let newPlanet = { name: input, position: 0 };
    let newPlanets = [...planets, newPlanet];
    setInput("");
    setPlanets(newPlanets);
    saveToLocalStorage(newPlanets);
  }

  function updateInput(event) {
    let inputElement = event.target;
    let inputValue = inputElement.value;
    setInput(inputValue);

    // setInput(event.target.value)
  }

  return (
    <div>
      <h1>localstorage hook</h1>
      <input value={input} onChange={updateInput}></input>
      <button onClick={addPlanet}>Add planet</button>
      <List>
        {planets.map((planet) => (
          <Item
            onClick={function () {
              removePlanet(planet);
            }}
          >
            {planet.name} - Position: {planet.position}
          </Item>
        ))}
      </List>
    </div>
  );
}

export default App;
