import LyingDog from "../../images/svgImages/LyingDog";
import ButtonComponent from "../ButtonComponent/ButtonComponent";

const ChoicePage = () => {
  const handleOnChoice = (e, dogChoice) => {
    e.preventDefault();
    console.log("mój pies wybrał: ", dogChoice);
  };

  return (
    <div className="choice-page">
      <section className="choice-page__container">
        <div>

          Zapytaj Twojego Psa na co ma ochotę podczas tej sesji relaksu.
        </div>
        <div>
          Początek przygody z GaSa
          <ButtonComponent
            name="bez dotyku"
            handleOnClick={(e) => handleOnChoice(e, "noTouch")}
          />
          <ButtonComponent
            name="wprowadzenie do dotyku"
            handleOnClick={(e) => handleOnChoice(e, "firstTouch")}
          />
        </div>
        {/* <div>
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
        </div> */}
        <div>
          Chcesz przećwiczyć całość na maskotce?
          <ButtonComponent
            name="wszystkie techniki manualne GaSa"
            handleOnClick={(e) => handleOnChoice(e, "allGasa")}
          />
        </div>
      </section>
    </div>
  );
};

export default ChoicePage;
