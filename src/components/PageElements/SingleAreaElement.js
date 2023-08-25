import { useState } from 'react';

import PointHandWithWristband from '../../assets/svgImages/PointHandWithWristband';
import SingleTechniqueElement from './SingleTechniqueElement';

const SingleAreaElement = (area) => {
  const [isAreaChecked, setIsAreaChecked] = useState(false);

  const handleAreaAsCheckboxClick = (e) => setIsAreaChecked(!isAreaChecked);

  const areaTechniquesToDisplay = area.area.techniques.map((technique) => (
    <SingleTechniqueElement
      areaTechnique={technique}
      key={`${area.area.name}-${area.area.techniques.indexOf(technique)}`}
    />
  ));

  return (
    <section className='techniques-for-body-area-section'>
      <header className='body-area-title'>
        <input
          type='checkbox'
          id={area.area.id}
          value={area.area.id}
          name='rd'
          onChange={handleAreaAsCheckboxClick}
          checked={isAreaChecked}
          className='body-area-title__inbox'
        ></input>

        <label className='body-area-title__label' htmlFor={area.area.id}>
          {area.area.areaTitle}
          <PointHandWithWristband />
        </label>
      </header>
      <section>{isAreaChecked ? areaTechniquesToDisplay : null}</section>
    </section>
  );
};

export default SingleAreaElement;
