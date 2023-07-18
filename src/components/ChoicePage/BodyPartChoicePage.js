import LyingDog from "../../images/svgImages/LyingDog";
import ButtonComponent from "../ButtonComponent/ButtonComponent";

const BodyPartChoicePage = () => {
  const handleOnChoice = (e, dogChoice) => {
    e.preventDefault();
    console.log("mój pies wybrał: ", dogChoice);
  };

  return (
    <div className="choice-page">
      <section className="choice-page__container">
        <div>
          <LyingDog/>
          Co pokazuje Twój Pies? Do jakiego obszaru ciała masz dostęp?
          <ButtonComponent
            name="masaż boku ciała"
            handleOnClick={(e) => handleOnChoice(e, "sideOfTheBody")}
          />
          <ButtonComponent
            name="masaż pyska"
            handleOnClick={(e) => handleOnChoice(e, "muzzle")}
          />
          <ButtonComponent
            name="masaż klatki piersiowej"
            handleOnClick={(e) => handleOnChoice(e, "chest")}
          />
          <ButtonComponent
            name="masaż brzucha"
            handleOnClick={(e) => handleOnChoice(e, "belly")}
          />
          <ButtonComponent
            name="masaż kończyny piersiowej"
            handleOnClick={(e) => handleOnChoice(e, "thoracicLimb")}
          />
          <ButtonComponent
            name="masaż kończyny miednicznej"
            handleOnClick={(e) => handleOnChoice(e, "pelvicLimb")}
          />
        </div>
      </section>
    </div>
  );
};

export default BodyPartChoicePage;
