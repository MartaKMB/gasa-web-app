import LyingDog from '../assets/svgImages/LyingDog';
import ButtonComponent from '../components/ButtonComponent';

const BodyPartChoicePage = () => {
  const handleOnChoice = (e, dogChoice) => {
    e.preventDefault();
    console.log('mój pies wybrał: ', dogChoice);
  };

  return (
    <section className='choice-page-container'>
      <LyingDog />
      Co pokazuje Twój Pies? Do jakiego obszaru ciała masz dostęp?
      <ButtonComponent
        name='masaż boku ciała'
        handleOnClick={(e) => handleOnChoice(e, 'sideOfTheBody')}
      />
      <ButtonComponent
        name='masaż pyska'
        handleOnClick={(e) => handleOnChoice(e, 'muzzle')}
      />
      <ButtonComponent
        name='masaż klatki piersiowej'
        handleOnClick={(e) => handleOnChoice(e, 'chest')}
      />
      <ButtonComponent
        name='masaż brzucha'
        handleOnClick={(e) => handleOnChoice(e, 'belly')}
      />
      <ButtonComponent
        name='masaż kończyny piersiowej'
        handleOnClick={(e) => handleOnChoice(e, 'thoracicLimb')}
      />
      <ButtonComponent
        name='masaż kończyny miednicznej'
        handleOnClick={(e) => handleOnChoice(e, 'pelvicLimb')}
      />
    </section>
  );
};

export default BodyPartChoicePage;
