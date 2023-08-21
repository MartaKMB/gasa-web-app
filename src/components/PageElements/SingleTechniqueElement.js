const SingleTechniqueElement = (areaTechnique) => {
  return (
    <div>
      {`technika ${areaTechnique.areaTechnique.techniqueTitle}`}
      <img
        src={areaTechnique.areaTechnique.techniqueImg}
        alt={areaTechnique.techniqueName}
      />
    </div>
  );
};

export default SingleTechniqueElement;
