import React from "react";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;

export default function EditSnackForm() {
  const [snack, setSnack] = useState({
    name: "",
    fiber: 0,
    protein: 0,
    added_sugar: 0,
    is_healthy: false,
    image: "",
  });
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${API}/snacks/${id}`)
      .then((response) => {
        setSnack(response.data);
      })
      .catch((err) => {
        // navigate("/not-found");
      });
  }, [id, navigate]);

  const editSnack = (snack) => {
    axios
      .put(`${API}/snacks/${id}`, snack)
      .then(() => {
        navigate(`/snacks`);
      })
      .catch((err) => {
        console.warn(err);
      });
  };

  const handleTextChange = (event) => {
    setSnack({ ...snack, [event.target.id]: event.target.value });
  };
  const handleCheckbox = (event) => {
    setSnack({ ...snack, is_healthy: !snack.is_healthy });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    editSnack(snack, id);
  };

  return (
    <div>
      <form id="edit-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <br></br>
        <input
          id="name"
          type="text"
          value={`${snack.name}`}
          onChange={handleTextChange}
          required
        />
        <br></br>
        <label htmlFor="fiber">Fiber: </label>
        <br></br>
        <input
          id="fiber"
          type="number"
          value={`${snack.fiber}`}
          onChange={handleTextChange}
        />
        <br></br>
        <label htmlFor="protein">Protein: </label>
        <br></br>
        <input
          id="protein"
          type="number"
          value={`${snack.protein}`}
          onChange={handleTextChange}
        />
        <br></br>
        <label htmlFor="added_sugar">Added Sugar: </label>
        <br></br>
        <input
          id="added_sugar"
          type="number"
          value={`${snack.added_sugar}`}
          onChange={handleTextChange}
        />
        <br></br>
        <label htmlFor="is-healthy">Is Health: </label>
        <input
          id="is-healthy"
          type="checkbox"
          checked={snack.is_healthy}
          onChange={handleCheckbox}
        />
        <br></br>
        <label htmlFor="image">Snack Image: </label>
        <br></br>
        <input
          id="image"
          type="text"
          value={`${snack.image}`}
          onChange={handleTextChange}
        />
        <br></br>
        <input className="submit-new" type="submit" />
      </form>
      <Link to={`/snacks/${id}`}>
        <button className="back">{`Back to ${snack.name}`}</button>
      </Link>
    </div>
  );
}
