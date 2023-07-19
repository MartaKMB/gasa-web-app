const PointHandWithWristband = () => {
  const colorFillValue = "#F3E8CF";
  const wristColorFillValue = "#EDB9BB";
  const colorStrokeValue = "#000000";
  const wristColorStrokeValue = "#010202";
  const numberStrokeMiterLimit = "10";

  const baseStyleForHand = {
    fill: colorFillValue,
    stroke: colorStrokeValue,
    strokeMiterlimit: numberStrokeMiterLimit,
  };

  const wristbandColor = {
    fill: wristColorFillValue,
    stroke: wristColorStrokeValue,
    strokeMiterlimit: numberStrokeMiterLimit,
  }

  return (
    <svg
      version="1.1"
      id="Warstwa_1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 89.43 191.48"
      className="point-hand-wrist-container"
    >
<g>
	<g>
		<path style={baseStyleForHand} d="M56.98,125.1l14.87,36.01c1.16,2.8,4.25,4.48,7.14,3.57
			c3.26-1.03,4.88-4.59,3.61-7.69l-14.98-36.28c-0.01-0.03-0.05-0.04-0.08-0.03l-10.52,4.35C56.98,125.04,56.97,125.07,56.98,125.1z
			"/>
		<path style={baseStyleForHand} d="M21.73,142.47l0,10.41c0,3.03,2.21,5.76,5.24,6.03
			c3.41,0.3,6.27-2.38,6.27-5.73v-10.71c0-0.03-0.03-0.06-0.06-0.06H21.79C21.76,142.41,21.73,142.44,21.73,142.47z"/>
		<path style={baseStyleForHand} d="M33.31,142.41c-0.03,0-0.06,0.03-0.06,0.06v15.15
			c0,3.54,2.58,6.4,5.75,6.4c3.18,0,5.75-2.87,5.75-6.4v-15.15c0-0.03-0.03-0.06-0.06-0.06H33.31z"/>
		<path style={baseStyleForHand} d="M44.82,142.41c-0.03,0-0.06,0.03-0.06,0.06v17.41
			c0,3.72,2.58,6.73,5.75,6.73c3.18,0,5.75-3.01,5.75-6.73v-17.41c0-0.03-0.03-0.06-0.06-0.06H44.82z"/>
		<path style={baseStyleForHand} d="M56.32,142.41c-0.03,0-0.06,0.03-0.06,0.06v42.32
			c0,3.42,2.57,6.2,5.75,6.2c3.18,0,5.75-2.78,5.75-6.2v-42.32c0-0.03-0.03-0.06-0.06-0.06H56.32z"/>
		<polyline style={baseStyleForHand} points="21.73,144.26 21.73,8.92 67.76,8.92 67.76,144.26 		
			"/>
	</g>
	<rect x="0.5" y="0.5" style={wristbandColor} width="88.43" height="43.01"/>
</g>
    </svg>
  );
};

export default PointHandWithWristband;
