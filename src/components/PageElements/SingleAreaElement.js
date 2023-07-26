import PointHandWithWristband from "../../assets/svgImages/PointHandWithWristband";
import SingleTechniqueElement from "./SingleTechniqueElement";

const SingleAreaElement = (area) => {
  const areaTechniquesToDisplay = area.area.techniques.map((technique) => (
    <SingleTechniqueElement
      areaTechnique={technique}
      key={`${area.area.name}-${area.area.techniques.indexOf(technique)}`}
    />
  ));

  return (
    <section className="techniques-for-body-area-section">
      <header className="body-area-title">
        <h3>{area.area.areaTitle}</h3>
        <PointHandWithWristband/>
        </header>
      {areaTechniquesToDisplay}
    </section>
  );
};

export default SingleAreaElement;
