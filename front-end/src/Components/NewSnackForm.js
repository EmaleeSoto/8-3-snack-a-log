import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const API = process.env.REACT_APP_API_URL;

export default function NewSongForm() {
  const [snack, setSnack] = useState({
    name: "",
    fiber: 0,
    protein: 0,
    added_sugar: 0,
    is_healthy: false,
    image: "",
  });
  const navigate = useNavigate();

  const addSnack = (newSnack) => {
    axios
      .post(`${API}/snacks`, newSnack)
      .then(() => {
        navigate(`/snacks`);
      })
      .catch((error) => console.warn(error));
  };

  const handleTextChange = (event) => {
    setSnack({ ...snack, [event.target.id]: event.target.value });
  };

  const handleCheckbox = () => {
    setSnack({ ...snack, is_healthy: !snack.is_healthy });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addSnack(snack);
  };

  return (
    <div>
      <form id="new-song" onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <br></br>
        <input id="name" type="text" onChange={handleTextChange} />
        <br></br>
        <label htmlFor="fiber">Fiber: </label>
        <br></br>
        <input id="fiber" type="number" onChange={handleTextChange} />
        <br></br>
        <label htmlFor="protein">Protein: </label>
        <br></br>
        <input id="protein" type="number" onChange={handleTextChange} />
        <br></br>
        <label htmlFor="added_sugar">Added Sugar: </label>
        <br></br>
        <input id="added_sugar" type="number" onChange={handleTextChange} />
        <br></br>
        <label htmlFor="is-healthy">Is Healthy: </label>
        <input id="is-healthy" type="checkbox" onChange={handleCheckbox} />
        <br></br>
        <label htmlFor="image">Snack Image: </label>
        <br></br>
        <input id="image" type="text" onChange={handleTextChange} />
        <br></br>
        <input className="submit-new" type="submit" value="Submit" />
      </form>
      {/* <button className="back">Back</button> */}
    </div>
  );
}
