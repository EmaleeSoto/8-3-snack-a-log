import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import heartSolid from "../assets/heart-solid.png";
import heartOutline from "../assets/heart-regular.png";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;
function SnackDetails() {
  const [snack, setSnacks] = useState([]);
  let { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`${API}/snacks/${id}`)
      .then((res) => {
        setSnacks(res.data.payload);
        navigate(`/snacks/${id}`);
      })
      .catch(() => {
        navigate("/not found");
      });
  }, [id, navigate]);
  const handleDelete = () => {
    axios
      .delete(`${API}/snacks/${id}`)
      .then(() => {
        navigate("/snacks");
      })
      .catch(() => {
        console.warn("error");
      });
  };
  return (
    <div className="snack-details">
      <hr></hr>
      <aside>
        <h2>
          {snack.is_healthy
            ? "This snack is healthy"
            : "This snack is not healthy"}
        </h2>
        <img
          className="hearts"
          src={snack.is_healthy ? heartSolid : heartOutline}
          alt={snack.is_healthy ? "healthy food" : "unhealthy food"}
        />
      </aside>
      <article>
        <h2>{snack.name}</h2>
        <div>
          <img className="food" src={snack.image} alt={snack.name} />
          <h2>Protein: {snack.protein}g</h2>
          <h2>Fiber: {snack.fiber}g</h2>
          <h2>Added Sugar: {snack.added_sugar}g</h2>
        </div>

        <div className="showNavigation">
          <div>
            <Link to={`/snacks`}>
              <button>Back</button>
            </Link>
          </div>
          <div>
            <Link to={`/snacks/${snack.id}/edit`}>
              <button>Edit</button>
            </Link>
          </div>
          <div>
            <button onClick={handleDelete}>Delete</button>
          </div>
        </div>
      </article>
    </div>
  );
}
export default SnackDetails;
