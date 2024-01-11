import { useState } from 'react';

import { AiOutlineMenu } from 'react-icons/ai';
import { IconContext } from 'react-icons';

import appCircle from '../../assets/pngImages/circle.png';

const MenuComponent = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  
  const menuAnimation = {left: isMenuVisible && '0'};

  const handleMenuIconClick = () => setIsMenuVisible(!isMenuVisible);

  return (
    <>
      <nav className='gasa-app-menu-container'>
        <div className='gasa-app-menu-container__menu-bar menu-bar'>
          <IconContext.Provider value={{ size: '1.5em', color: '#2b2b2b' }}>
            <AiOutlineMenu onClick={handleMenuIconClick} />
          </IconContext.Provider>
          <img
            src={appCircle}
            alt='kółko aplikacji'
            className='menu-bar__circle'
          />
        </div>
      </nav>
      <ul className='gasa-app-menu-list' style={menuAnimation}>
        <li>START</li>
        <li>PRZYKŁADOWE SESJE</li>
        <li>PODĄŻAJ ZA PSEM</li>
        <li>USTAWIENIA</li>
        <li>KONTAKT</li>
      </ul>
    </>
  );
};

export default MenuComponent;
