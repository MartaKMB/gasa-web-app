import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import ButtonComponent from "../components/ButtonComponent";
import DogPaw from "../assets/svgImages/DogPaw";

const DashboardPage = () => {
  const [userNameForApp, setUserNameForApp] = useState();

  let navigate = useNavigate();

  useEffect(() => {
    const userNameFromStorage = JSON.parse(
      localStorage.getItem("userNameWithPermission")
    );
    userNameFromStorage && setUserNameForApp(userNameFromStorage);
  }, []);

  const handleOnStart = (e) => {
    e.preventDefault();
    navigate("/choice");
  };

  return (
    <section className="dashboard-page-container">
      <header className="welcome-dashboard-section">
        <h3 className="welcome-dashboard-section__hello-txt">{`Cześć ${userNameForApp}!`}</h3>
        <h4 className="welcome-dashboard-section__app-description-txt">
          Witaj w aplikacji, dzięki której stworzysz rytuał relaksu dopasowany
          do Ciebie i Twojego Czworonoga.
        </h4>
        <DogPaw />
      </header>
      <ButtonComponent name="rozpocznij" handleOnClick={handleOnStart} />
      <section className="rules-dashboard-section">
        <span className="rules-dashboard-section__rules-title">
          Główne założenia GaSa to:
        </span>
        <ul>
          <li>rozmowa (nie zawsze) poprzez dotyk</li>
          <li>komfort zarówno dawcy jak i biorcy</li>
          <li>empatia</li>
          <li>uważność</li>
          <li>cierpliwość</li>
          <li>otwartość</li>
          <li>powolność</li>
        </ul>
      </section>
      <footer className="anchor-dashboard-section">
        <a href="https://martamucha.pl/">ANKIETA - pomóż ulepszyć aplikację</a>
      </footer>
    </section>
  );
};

export default DashboardPage;
