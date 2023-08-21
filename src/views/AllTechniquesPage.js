import { useSelector } from 'react-redux';

import SingleAreaElement from '../components/PageElements/SingleAreaElement';
import LyingDog from '../assets/svgImages/LyingDog';

const AllTechniquesPage = () => {
  const gasaData = useSelector((state) => state.techniques);

  const gasaAreaElementsToDisplay =
    gasaData &&
    gasaData.techniquesForGasaAreas.map((area) => (
      <SingleAreaElement area={area} key={area.id} />
    ));

  return (
    <section className='all-techniques-container'>
      <LyingDog />
      <header className='all-techniques-title'>WSZYSTKIE TECHNIKI</header>
      {gasaAreaElementsToDisplay}
    </section>
  );
};

export default AllTechniquesPage;
