import { useState, useEffect } from "react";

const DashboardPage = () => {
    const [userNameForApp, setUserNameForApp] = useState();

    useEffect(() => {
        const userNameFromStorage = JSON.parse(localStorage.getItem('userNameWithPermission'));
        userNameFromStorage && setUserNameForApp(userNameFromStorage);
    }, []);

    return (
        <div className='admin-logged-page'>
            <h3>{`Cześć ${userNameForApp}!`}</h3>
        </div>
    );
}

export default DashboardPage;