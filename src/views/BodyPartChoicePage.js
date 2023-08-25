import { useState } from 'react';
import { useSelector } from 'react-redux';

import LyingDog from '../assets/svgImages/LyingDog';
import ButtonComponent from '../components/ButtonComponent';
import SingleTechniqueElement from '../components/PageElements/SingleTechniqueElement';
import { selectTechniquesByBodyPartName } from '../store/techniquesSlice';

const BodyPartChoicePage = () => {
  const [isBodyPartChoosen, setIsBodyPartChoosen] = useState(false);
  const [choosenBodyPart, setChoosenBodyPart] = useState('');

  const choosenArea = useSelector((state) =>
    selectTechniquesByBodyPartName(state, choosenBodyPart)
  );

  const handleOnChoice = (e, dogChoice) => {
    e.preventDefault();
    setChoosenBodyPart(dogChoice);
    setIsBodyPartChoosen(true);
    console.log('mój pies wybrał: ', dogChoice);
    console.log('area w komponencie:', choosenArea);
  };

  const areaTechniquesToDisplay =
    choosenArea &&
    choosenArea.techniques.map((technique) => (
      <SingleTechniqueElement
        areaTechnique={technique}
        key={`${choosenArea.areaName}-${choosenArea.techniques.indexOf(
          technique
        )}`}
      />
    ));

  return (
    <section className='body-choice-techniques-container'>
      <LyingDog />
      <header className='body-choice-techniques-title'>
        {!isBodyPartChoosen && !choosenArea
          ? 'Co pokazuje Twój Pies? Do jakiego obszaru ciała masz dostęp'
          : `${choosenArea.areaTitle}`}
      </header>
      <section className='choosen-body-part-techniques-section'>
        {areaTechniquesToDisplay}
      </section>
      {isBodyPartChoosen && (
        <header className='body-choice-techniques-title body-choice-techniques-title--after-choice'>
          Co teraz? Co sugeruje Twój Pies?
        </header>
      )}
      <section
        className={`body-choice-techniques-buttons-section body-choice-techniques-buttons-section${
          isBodyPartChoosen && '--after-choice'
        }`}
      >
        <ButtonComponent
          name='bok ciała'
          invisible={
            isBodyPartChoosen && choosenBodyPart === 'SIDE_OF_THE_BODY_AND_TAIL'
          }
          handleOnClick={(e) => handleOnChoice(e, 'SIDE_OF_THE_BODY_AND_TAIL')}
        />
        <ButtonComponent
          name='pysk'
          invisible={isBodyPartChoosen && choosenBodyPart === 'MUZZLE'}
          handleOnClick={(e) => handleOnChoice(e, 'MUZZLE')}
        />
        <ButtonComponent
          name='klatka piersiowa'
          invisible={isBodyPartChoosen && choosenBodyPart === 'CHEST'}
          handleOnClick={(e) => handleOnChoice(e, 'CHEST')}
        />
        <ButtonComponent
          name='brzuch'
          invisible={isBodyPartChoosen && choosenBodyPart === 'BELLY'}
          handleOnClick={(e) => handleOnChoice(e, 'BELLY')}
        />
        <ButtonComponent
          name='kończyna piersiowa'
          invisible={isBodyPartChoosen && choosenBodyPart === 'THORACIC_LIMB'}
          handleOnClick={(e) => handleOnChoice(e, 'THORACIC_LIMB')}
        />
        <ButtonComponent
          name='kończyna miedniczna'
          invisible={isBodyPartChoosen && choosenBodyPart === 'PELVIC_LIMB'}
          handleOnClick={(e) => handleOnChoice(e, 'PELVIC_LIMB')}
        />
        {isBodyPartChoosen && (
          <div className='body-choice-techniques-questionmark'>?</div>
        )}
      </section>
    </section>
  );
};

export default BodyPartChoicePage;
