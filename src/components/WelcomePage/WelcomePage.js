import { useNavigate } from "react-router-dom";

import DogHead from "../../images/svgImages/DogHead";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import WelcomeTxtComponent from "../WelcomeTxtComponent/WelcomeTxtComponent";

const WelcomePage = () => {
    let navigate = useNavigate();
    const handleOnClickGoToLogin = () => navigate('/dashboard');

    return (
        <div className="welcome-page">
            <section className="welcome-page__container">
                <DogHead />
                <WelcomeTxtComponent />
                <ButtonComponent name='przejdź do aplikacji' handleOnClick={handleOnClickGoToLogin} withPulse />
            </section>
        </div>
    )
}

export default WelcomePage;