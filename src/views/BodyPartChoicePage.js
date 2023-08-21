import { useState } from 'react';

import LyingDog from '../assets/svgImages/LyingDog';
import ButtonComponent from '../components/ButtonComponent';

const BodyPartChoicePage = () => {
  const [isBodyPartChoosen, setIsBodyPartChoosen] = useState(false);
  const [choosenBodyPart, setChoosenBodyPart] = useState('');

  const handleOnChoice = (e, dogChoice) => {
    e.preventDefault();
    setIsBodyPartChoosen(true);
    setChoosenBodyPart(dogChoice);
    console.log('mój pies wybrał: ', dogChoice);
  };

  return (
    <section className='body-choice-techniques-container'>
      <LyingDog />
      {!isBodyPartChoosen && (
        <header className='body-choice-techniques-title'>
          Co pokazuje Twój Pies? Do jakiego obszaru ciała masz dostęp?
        </header>
      )}
      <section
        className={`body-choice-techniques-buttons-section${
          isBodyPartChoosen && '--after-choice'
        }`}
      >
        <ButtonComponent
          name='bok ciała'
          invisible={isBodyPartChoosen && choosenBodyPart === 'sideOfTheBody'}
          handleOnClick={(e) => handleOnChoice(e, 'sideOfTheBody')}
        />
        <ButtonComponent
          name='pysk'
          invisible={isBodyPartChoosen && choosenBodyPart === 'muzzle'}
          handleOnClick={(e) => handleOnChoice(e, 'muzzle')}
        />
        <ButtonComponent
          name='klatka piersiowa'
          invisible={isBodyPartChoosen && choosenBodyPart === 'chest'}
          handleOnClick={(e) => handleOnChoice(e, 'chest')}
        />
        <ButtonComponent
          name='brzuch'
          invisible={isBodyPartChoosen && choosenBodyPart === 'belly'}
          handleOnClick={(e) => handleOnChoice(e, 'belly')}
        />
        <ButtonComponent
          name='kończyna piersiowa'
          invisible={isBodyPartChoosen && choosenBodyPart === 'thoracicLimb'}
          handleOnClick={(e) => handleOnChoice(e, 'thoracicLimb')}
        />
        <ButtonComponent
          name='kończyna miedniczna'
          invisible={isBodyPartChoosen && choosenBodyPart === 'pelvicLimb'}
          handleOnClick={(e) => handleOnChoice(e, 'pelvicLimb')}
        />
      </section>
    </section>
  );
};

export default BodyPartChoicePage;
