import { Link } from "react-router-dom";
import pageNotFound from "../assets/page-not-found.png";

export const ErrorPage = () => {
  return (
    <main>
      <section className="pnf">
        <div className="oops">
          <img src={pageNotFound} alt="404 Error" />
          <p data-testid="pnfText">Page Not Found!!!</p>

          <Link to="/">
            <button data-testid="homeBtn">Return To Home</button>
          </Link>
        </div>
      </section>
    </main>
  );
};
