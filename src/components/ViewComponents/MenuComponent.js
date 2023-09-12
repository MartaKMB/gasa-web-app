import { AiOutlineMenu } from 'react-icons/ai';
import { IconContext } from 'react-icons';

import appCircle from '../../assets/pngImages/circle.png';

const MenuComponent = () => {
  return (
    <nav className='gasa-app-menu-container'>
      <div className='gasa-app-menu-container__menu-bar menu-bar'>
        <IconContext.Provider value={{ size: '1.5em', color: '#2b2b2b' }}>
          <AiOutlineMenu />
        </IconContext.Provider>
        {/* <ul>
        <li>START</li>
        <li>PRZYKŁADOWE SESJE</li>
        <li>PODĄŻAJ ZA PSEM</li>
        <li>USTAWIENIA</li>
        <li>KONTAKT</li>
      </ul> */}
        <img
          src={appCircle}
          alt='kółko aplikacji'
          className='menu-bar__circle'
        />
      </div>
    </nav>
  );
};

export default MenuComponent;
