import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <h1 className="header">
        <Link to="/snacks">Snack-A-Log</Link>
      </h1>
      <button>
        <Link to="/snacks/new">New Snack</Link>
      </button>
    </nav>
  );
}
