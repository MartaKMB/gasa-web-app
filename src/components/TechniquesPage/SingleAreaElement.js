import SingleTechniqueElement from "./SingleTechniqueElement";

const SingleAreaElement = (area) => {
  const areaTechniquesToDisplay = area.area.techniques.map((technique) => (
    <SingleTechniqueElement
      areaTechnique={technique}
      key={`${area.area.name}-${area.area.techniques.indexOf(technique)}`}
    />
  ));

  return (
    <>
      <div>{`obszar: ${area.area.name}`}</div>
      {areaTechniquesToDisplay}
    </>
  );
};

export default SingleAreaElement;
