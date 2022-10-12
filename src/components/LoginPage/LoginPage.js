import WelcomeTxtComponent from "../WelcomeTxtComponent/WelcomeTxtComponent";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import WrongDataMessageComponent from "../WrongDataMessageComponent/WrongDataMessageComponent";
import { useState } from "react";

const PASSWORD = 'test123';

const LoginPage = () => {
    const [userEmailInput, setUserEmailInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');

    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isPasswordValid, setIsPasswordValid] = useState(true);

    const wrongUserNameTxt = 'to nie jest poprawny adres e-mail!';
    const wrongPasswordTxt = 'to nie jest poprawne hasło!';

    const handleOnSubmitLogin = e => {
        e.preventDefault();
        console.log('ZALOGOWANY!', e);
        console.log('INPUTY', userEmailInput, passwordInput);

        passwordInput !== PASSWORD ? setIsPasswordValid(false) : console.log('HASŁO: ', passwordInput);
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        re.test(userEmailInput) ? console.log('EMAIL: ', userEmailInput) : setIsEmailValid(false);

        setUserEmailInput('');
        setPasswordInput('');
    };

    const wrongEmailComponent = !isEmailValid ? <WrongDataMessageComponent messageTxt={wrongUserNameTxt} /> : null;
    const wrongPasswordComponent = !isPasswordValid ? <WrongDataMessageComponent messageTxt={wrongPasswordTxt} /> : null;


    return (
        <div className='login-page'>
            <section className='login-page__container'>
                <WelcomeTxtComponent onlyTitle />
                {wrongEmailComponent}
                {wrongPasswordComponent}
                <form className='login-page__form-section form-section' onSubmit={handleOnSubmitLogin}>
                    <div className='form-section__form-element'>
                        <label>Twój adres e-mail:
                            <input type='email' id='userName' name='userName' placeholder='...' onChange={e => setUserEmailInput(e.target.value)} value={userEmailInput} />
                        </label>
                    </div>
                    <div className='form-section__form-element'>
                        <label>Hasło:
                            <input type='text' id='usersPassword' name='usersPassword' placeholder='...' onChange={e => setPasswordInput(e.target.value)} value={passwordInput} />
                        </label>
                    </div>
                    <ButtonComponent name='zaloguj' handleOnClick={handleOnSubmitLogin} />
                </form>
            </section>

        </div>
    )
}

export default LoginPage;