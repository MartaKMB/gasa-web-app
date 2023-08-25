import { useState } from 'react';

import PointHandWithWristband from '../../assets/svgImages/PointHandWithWristband';

const SingleInfoElement = (infoToDisplay) => {
  const [isAreaChecked, setIsAreaChecked] = useState(false);

  const handleAreaAsCheckboxClick = (e) => setIsAreaChecked(!isAreaChecked);

  return (
    <section className='info-area-section'>
      <header className='info-area-title'>
        <input
          type='checkbox'
          id={infoToDisplay.infoToDisplay.id}
          value={infoToDisplay.infoToDisplay.id}
          name='rd'
          onChange={handleAreaAsCheckboxClick}
          checked={isAreaChecked}
          className='body-area-title__inbox'
        ></input>

        <label
          className='body-area-title__label'
          htmlFor={infoToDisplay.infoToDisplay.id}
        >
          {infoToDisplay.infoToDisplay.title}
          <PointHandWithWristband />
        </label>
      </header>
      <section>
        {isAreaChecked ? infoToDisplay.infoToDisplay.txt : null}
      </section>
    </section>
  );
};

export default SingleInfoElement;
