import PointHandWithWristband from "../../assets/svgImages/PointHandWithWristband";
import SingleTechniqueElement from "./SingleTechniqueElement";

const SingleAreaElement = (area) => {
  const areaTechniquesToDisplay = area.area.techniques.map((technique) => (
    <SingleTechniqueElement
      areaTechnique={technique}
      // areaImg={}
      key={`${area.area.name}-${area.area.techniques.indexOf(technique)}`}
    />
  ));

  return (
    <>
      <div>{`obszar: ${area.area.areaName}`} <PointHandWithWristband/></div>
      {areaTechniquesToDisplay}
    </>
  );
};

export default SingleAreaElement;
