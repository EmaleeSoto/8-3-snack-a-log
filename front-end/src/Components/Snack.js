import { Link } from "react-router-dom";
import heartSolid from "../assets/heart-solid.png";
import heartOutline from "../assets/heart-regular.png";

function Snack({ snack }) {
  return (
    <tr>
      <td className="Snack">
        <Link to={`/snacks/${snack.id}`}>
          <span>
            <h4>
              <img
                className="food"
                src={snack.image}
                alt={snack.is_healthy ? "healthy food" : "unhealthy food"}
              />
              <img
                className="hearts"
                src={snack.is_healthy ? heartSolid : heartOutline}
                alt="heart"
              />
              {snack.name}
            </h4>
          </span>
        </Link>
      </td>
    </tr>
  );
}

export default Snack;
