import { useState } from 'react';

import PointHandWithWristband from '../../assets/svgImages/PointHandWithWristband';
import AudioPlayerComponent from '../AudioPlayerComponent';
import PdfComponent from '../PdfComponent';

const SingleInfoElement = (infoToDisplay) => {
  const [isAreaChecked, setIsAreaChecked] = useState(false);
  const info = infoToDisplay.infoToDisplay;

  const handleAreaAsCheckboxClick = (e) => setIsAreaChecked(!isAreaChecked);

  return (
    <section className='info-area-section'>
      <header className='info-area-title'>
        <input
          type='checkbox'
          id={info.id}
          value={info.id}
          name='rd'
          onChange={handleAreaAsCheckboxClick}
          checked={isAreaChecked}
          className='info-area-title__inbox'
        ></input>
        <label className='info-area-title__label' htmlFor={info.id}>
          {info.title}
          <PointHandWithWristband />
        </label>
      </header>
      <section>
        {isAreaChecked ? (
          info.type === 'AUDIO' ? (
            <AudioPlayerComponent audioName={info.technique} />
          ) : (
            <PdfComponent pdfName={info.technique} />
          )
        ) : null}
      </section>
    </section>
  );
};

export default SingleInfoElement;
