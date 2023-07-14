const DogPaw = () => {
  const colorFillValue = "#AA9D69";
  const colorStrokeValue = "#010202";
  const numberStrokeMiterLimit = "10";

  const baseCircleStyleForPaw = {
    fill: colorFillValue,
    stroke: colorStrokeValue,
    strokeMiterlimit: numberStrokeMiterLimit,
  };

  return (
    <svg
      className="dog-paw-container"
      version="1.1"
      id="Warstwa_1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 141.91 121.78"
    >
      <g>
        <circle style={baseCircleStyleForPaw} cx="64.65" cy="79.42" r="41.86" />
        <circle style={baseCircleStyleForPaw} cx="14.6" cy="33.3" r="14.1" />
        <circle style={baseCircleStyleForPaw} cx="54.43" cy="14.6" r="14.1" />
        <circle style={baseCircleStyleForPaw} cx="99.1" cy="19.2" r="14.1" />
        <circle style={baseCircleStyleForPaw} cx="127.3" cy="53.37" r="14.1" />
      </g>
    </svg>
  );
};

export default DogPaw;
