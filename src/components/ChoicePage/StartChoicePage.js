import { useNavigate } from "react-router-dom";

import PointHand from "../../images/svgImages/PointHand";
import ButtonComponent from "../ButtonComponent/ButtonComponent";

const StartChoicePage = () => {
  const ownerChoiceArray = [
    "DOG_CHOICE",
    "NO_TOUCH",
    "FIRST_TOUCH",
    "ALL_TECHNIQUES",
  ];
  let navigate = useNavigate();

  const handleOnChoice = (e, ownerChoice) => {
    e.preventDefault();
    switch (ownerChoice) {
      case "DOG_CHOICE":
        navigate("/fallow-dog");
        break;
      case "NO_TOUCH":
      case "FIRST_TOUCH":
      case "ALL_TECHNIQUES":
        console.log("klik w: ", ownerChoice);
        break;
      default:
        console.log("nic nie zostało wybrane");
    }
  };

  return (
    <div className="choice-page">
      <section className="choice-page__container">
        <header className="start-choice-page-header">
          <PointHand />
          <h2 className="start-choice-page-header__choice-title">
            Zapytaj Twojego Psa na co ma ochotę podczas tej sesji relaksu.
          </h2>
        </header>
        <section className="start-choice-page-section">
          <div className="start-choice-page-section__section-description">
            Wybierz techniki dla obszaru, który wskazuje Ci Twój Pies:
          </div>
          <ButtonComponent
            name="podążaj za Psem"
            handleOnClick={(e) => handleOnChoice(e, ownerChoiceArray[0])}
          />
        </section>
        <section className="start-choice-page-section">
          <div className="start-choice-page-section__section-description">
            Początek przygody z GaSa?
          </div>
          <ButtonComponent
            name="bez dotyku"
            handleOnClick={(e) => handleOnChoice(e, ownerChoiceArray[1])}
          />
          <ButtonComponent
            name="wprowadzenie do dotyku"
            handleOnClick={(e) => handleOnChoice(e, ownerChoiceArray[2])}
          />
        </section>
        <section className="start-choice-page-section">
          <div className="start-choice-page-section__section-description">
            Chcesz przećwiczyć całość na maskotce?
          </div>
          <ButtonComponent
            name="wszystkie techniki manualne GaSa"
            handleOnClick={(e) => handleOnChoice(e, ownerChoiceArray[3])}
          />
        </section>
      </section>
    </div>
  );
};

export default StartChoicePage;
