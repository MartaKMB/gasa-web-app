import { useState, useEffect } from "react";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import DogPaw from '../../images/svgImages/DogPaw';

const DashboardPage = () => {
    const [userNameForApp, setUserNameForApp] = useState();

    useEffect(() => {
        const userNameFromStorage = JSON.parse(localStorage.getItem('userNameWithPermission'));
        userNameFromStorage && setUserNameForApp(userNameFromStorage);
    }, []);

    const handleOnStart = e => {
        e.preventDefault();
        console.log("start");
    };

    return (
        <div className='dashboard-page'>
            <section className="dashboard-page__container">
                <div className="dashboard-page__welcome-dashboard-section">
                    <h3>{`Cześć ${userNameForApp}!`}</h3>
                    <h4>Witaj w aplikacji, dzięki której stworzysz rytuał relaksu dopasowany do Ciebie i Twojego Czworonoga.</h4>
                    <DogPaw />
                </div>
                <ButtonComponent name='rozpocznij' handleOnClick={handleOnStart}/>
                <div className="dashboard-page__rules-dashboard-section">
                    Główne założenia GaSa to:
                    <ul>
                        <li>rozmowa (nie zawsze) poprzez dotyk</li>
                        <li>komfort zarówno dawcy jak i biorcy</li>
                        <li>empatia</li>
                        <li>uważność</li>
                        <li>cierpliwość</li>
                        <li>otwartość</li>
                        <li>powolność</li>
                    </ul>
                </div>
                <div>
                    <a href="">ANKIETA - pomóż ulepszyć aplikację</a>
                </div>
            </section>
        </div>
    );
}

export default DashboardPage;