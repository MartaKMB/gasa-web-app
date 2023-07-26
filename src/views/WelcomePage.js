import { useNavigate } from "react-router-dom";

import DogHead from "../assets/svgImages/DogHead";
import ButtonComponent from "../components/ButtonComponent";
import WelcomeTxtComponent from "../components/WelcomeTxtComponent";

const WelcomePage = () => {
  let navigate = useNavigate();
  const handleOnClickGoToLogin = () => navigate("/dashboard");

  return (
    <section className="welcome-page-container">
      <DogHead />
      <WelcomeTxtComponent />
      <ButtonComponent
        name="przejdź do aplikacji"
        handleOnClick={handleOnClickGoToLogin}
        withPulse
      />
    </section>
  );
};

export default WelcomePage;
