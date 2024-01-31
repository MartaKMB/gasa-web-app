import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { AiOutlineMenuFold, AiOutlineMenuUnfold } from 'react-icons/ai';
import { IconContext } from 'react-icons';

import appCircle from '../../assets/pngImages/circle.png';
import { navigateTo } from '../../utils/navigateToOwnerChoice';

const MenuComponent = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  let navigate = useNavigate();

  const ownerChoiceArray = [
    'START_PAGE',
    'SESSIONS_CHOICE',
    'DOG_CHOICE',
    'SETTINGS',
    'CONTACT',
  ];

  const menuAnimation = { left: isMenuVisible && '0' };

  const handleMenuIconClick = () => setIsMenuVisible(!isMenuVisible);

  const handleOnChoice = (e, ownerChoice) => {
    e.preventDefault();
    navigateTo(ownerChoice, navigate);
    setIsMenuVisible(false);
  };

  return (
    <>
      <nav className='gasa-app-menu-container'>
        <div className='gasa-app-menu-container__menu-bar menu-bar'>
          <IconContext.Provider value={{ size: '1.5em', color: '#2b2b2b' }}>
            {isMenuVisible ? (
              <AiOutlineMenuFold onClick={handleMenuIconClick} />
            ) : (
              <AiOutlineMenuUnfold onClick={handleMenuIconClick} />
            )}
          </IconContext.Provider>
          <img
            src={appCircle}
            alt='kółko aplikacji'
            className='menu-bar__circle'
            onClick={(e) => handleOnChoice(e, ownerChoiceArray[0])}
          />
        </div>
      </nav>
      <ul className='gasa-app-menu-list' style={menuAnimation}>
        <li onClick={(e) => handleOnChoice(e, ownerChoiceArray[0])}>START</li>
        <li onClick={(e) => handleOnChoice(e, ownerChoiceArray[1])}>
          PRZYKŁADOWE SESJE
        </li>
        <li onClick={(e) => handleOnChoice(e, ownerChoiceArray[2])}>
          PODĄŻAJ ZA PSEM
        </li>
        {/* <li onClick={(e) => handleOnChoice(e, ownerChoiceArray[3])}>
          USTAWIENIA
        </li> */}
        <li onClick={(e) => handleOnChoice(e, ownerChoiceArray[4])}>KONTAKT</li>
      </ul>
    </>
  );
};

export default MenuComponent;
