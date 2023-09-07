import { useParams } from 'react-router-dom';

import LyingDog from '../assets/svgImages/LyingDog';
import NoTouchDescription from '../components/PageElements/NoTouchDescription';
import FirstTouchDescription from '../components/PageElements/FirstTouchDescription';

// TODO: Improve, fix issues and add audio functionality and pdf viewer
// import SingleInfoElement from '../components/PageElements/SingleInfoElement';

// import { fetchAudio } from '../store/audioSlice';
// import { fetchFile } from '../store/fileSlice';
// import store from '../store/store';

// store.dispatch(fetchAudio());
// store.dispatch(fetchFile());

const IntroductionsTechniquePage = () => {
  let { choice } = useParams();
  const choiceUpperCase = choice.toUpperCase();

  const choiceTitle =
    choiceUpperCase === 'NO_TOUCH' ? 'BEZ DOTYKU' : 'WPROWADZENIE DO DOTYKU';

  const choiceDescriptionBasedOnParam =
    choiceUpperCase === 'NO_TOUCH' ? (
      <NoTouchDescription />
    ) : (
      <FirstTouchDescription />
    );

  return (
    <section className='introductions-techniques-container'>
      <LyingDog />
      <header className='introductions-title'>{choiceTitle}</header>
      {choiceDescriptionBasedOnParam}
      {/* <SingleInfoElement
        infoToDisplay={{
          title: 'karta praktyki',
          id: 1,
          type: 'PDF',
          technique: choiceUpperCase,
        }}
      /> */}
      {/* <SingleInfoElement
        infoToDisplay={{
          title: 'nagranie audio',
          id: 2,
          type: 'AUDIO',
          technique: choiceUpperCase,
        }}
      /> */}
    </section>
  );
};

export default IntroductionsTechniquePage;
