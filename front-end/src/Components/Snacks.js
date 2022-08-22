import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Snack from "./Snack";

import axios from "axios";
const API = process.env.REACT_APP_API_URL;

function Snacks() {
  const [snacks, setSnacks] = useState([]);

  useEffect(() => {
    axios.get(`${API}/snacks`).then((res) => {
      setSnacks(res.data.payload);
    });
  }, []);

  return (
    <div className="Snacks">
      <article>
        <div>
          <h1>Snacks List</h1>
          <hr />
          <table>
            <tbody>
              {snacks.map((snack) => {
                return <Snack key={snack.id} snack={snack} />;
              })}
            </tbody>
          </table>
          <br />
          <button>
            <Link to={"/"}>Back</Link>
          </button>
        </div>
      </article>
    </div>
  );
}

export default Snacks;
