import { Link } from "react-router-dom";

function Snack({ snack }) {
  return (
    <tr>
      <td className="Snack">
        <Link to={`/snacks/${snack.id}`}>
          <span>
            <h4>
              <img
                src={snack.image}
                alt={snack.is_healthy ? "healthy food" : "unhealthy food"}
              />
              {snack.name}
            </h4>
          </span>
        </Link>
      </td>
      <h4>{snack.is_healthy ? "❤️" : "♡"}</h4>
    </tr>
  );
}

export default Snack;
