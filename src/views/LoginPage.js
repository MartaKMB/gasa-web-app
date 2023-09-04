import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { setNameAction, setPermissionAction } from '../store/userSlice';

import WelcomeTxtComponent from '../components/WelcomeTxtComponent';
import ButtonComponent from '../components/ButtonComponent';
import WrongDataMessageComponent from '../components/WrongDataMessageComponent';

const PASSWORD = 'gasa2023demo';

const LoginPage = () => {
  const [userNameInput, setUserNameInput] = useState('');
  const [userEmailInput, setUserEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);

  const dispatch = useDispatch();

  let navigate = useNavigate();

  const wrongUserNameTxt = 'to nie jest poprawny adres e-mail!';
  const wrongPasswordTxt = 'to nie jest poprawne hasło!';

  const handleOnSubmitLogin = (e) => {
    e.preventDefault();

    const setValidation = (email, password) => {
      setIsEmailValid(email);
      setIsPasswordValid(password);
    };

    let emailValidator =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (passwordInput === PASSWORD && emailValidator.test(userEmailInput)) {
      setValidation(true, true);

      dispatch(setNameAction(userNameInput));
      dispatch(setPermissionAction());

      setUserNameInput('');
      setUserEmailInput('');
      setPasswordInput('');

      navigate('/dashboard');
    } else if (
      passwordInput !== PASSWORD &&
      emailValidator.test(userEmailInput)
    ) {
      setValidation(true, false);
    } else if (
      passwordInput === PASSWORD &&
      !emailValidator.test(userEmailInput)
    ) {
      setValidation(false, true);
    } else {
      setValidation(false, false);
    }
  };

  const wrongEmailComponent = !isEmailValid ? (
    <WrongDataMessageComponent messageTxt={wrongUserNameTxt} />
  ) : null;
  const wrongPasswordComponent = !isPasswordValid ? (
    <WrongDataMessageComponent messageTxt={wrongPasswordTxt} />
  ) : null;

  return (
    <section className='login-page-container'>
      <WelcomeTxtComponent onlyTitle />
      {wrongEmailComponent}
      {wrongPasswordComponent}
      <form className='form-section' onSubmit={handleOnSubmitLogin}>
        <div className='form-section__form-element'>
          <label>
            Twoje imię:
            <input
              type='text'
              id='userName'
              name='userName'
              placeholder='...'
              onChange={(e) => setUserNameInput(e.target.value)}
              value={userNameInput}
            />
          </label>
        </div>
        <div className='form-section__form-element'>
          <label>
            Twój adres e-mail:
            <input
              type='email'
              id='userEmail'
              name='userEmail'
              placeholder='...'
              onChange={(e) => setUserEmailInput(e.target.value)}
              value={userEmailInput}
            />
          </label>
        </div>
        <div className='form-section__form-element'>
          <label>
            Hasło:
            <input
              type='password'
              id='usersPassword'
              name='usersPassword'
              placeholder='...'
              onChange={(e) => setPasswordInput(e.target.value)}
              value={passwordInput}
            />
          </label>
        </div>
        <ButtonComponent name='zaloguj' handleOnClick={handleOnSubmitLogin} />
      </form>
    </section>
  );
};

export default LoginPage;
