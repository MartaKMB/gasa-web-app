const PointHand = () => {
  const colorFillValue = "#F3E8CF";
  const colorStrokeValue = "#000000";
  const numberStrokeMiterLimit = "10";

  const baseStyleForHand = {
    fill: colorFillValue,
    stroke: colorStrokeValue,
    strokeMiterlimit: numberStrokeMiterLimit,
  };

  return (
    <svg
      version="1.1"
      id="Warstwa_1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 131.38 137.01"
    >
      <g>
        <path
          style={baseStyleForHand}
          d="M63.72,100.63l36.76-15.18c2.98-1.23,4.64-4.6,3.49-7.61
		c-1.18-3.09-4.67-4.58-7.71-3.32L59.25,89.8L63.72,100.63z"
        />
        <path
          style={baseStyleForHand}
          d="M81.41,136.51h10.7c3.22,0,6.04-2.48,6.13-5.7
		c0.09-3.31-2.57-6.01-5.86-6.01H81.41V136.51z"
        />
        <path
          style={baseStyleForHand}
          d="M81.41,124.77h15.5c3.6,0,6.52-2.62,6.52-5.86
		c0-3.24-2.92-5.86-6.52-5.86h-15.5V124.77z"
        />
        <path
          style={baseStyleForHand}
          d="M81.41,113.06H99.2c3.79,0,6.86-2.62,6.86-5.86
		c0-3.24-3.07-5.86-6.86-5.86H81.41V113.06z"
        />
        <path
          style={baseStyleForHand}
          d="M81.41,101.34h43.16c3.49,0,6.31-2.62,6.31-5.86
		c0-3.24-2.83-5.86-6.31-5.86H81.41V101.34z"
        />
        <path
          style={baseStyleForHand}
          d="M83.29,136.51L83.29,136.51c-45.73,0-82.79-37.07-82.79-82.79
		V0.5l40.57,0v67.35c0,12.03,9.75,21.77,21.77,21.77h20.45"
        />
      </g>
    </svg>
  );
};

export default PointHand;
