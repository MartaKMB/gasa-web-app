const SingleTechniqueElement = (areaTechnique) => {
  return (
    <div className='single-technique-element'>
      <header className='single-technique-element__technique-title'>
        {areaTechnique.areaTechnique.techniqueTitle}
      </header>
      <img
        className='single-technique-element__technique-image'
        src={areaTechnique.areaTechnique.techniqueImg}
        alt={areaTechnique.techniqueName}
      />
    </div>
  );
};

export default SingleTechniqueElement;
