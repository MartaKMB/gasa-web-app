const LyingDog = () => {
  const colorStrokeValue = '#010202';
  const numberStrokeMiterLimit = '10';

  const baseStyleForHeadAndEar = {
    fill: '#AA9D69',
    stroke: colorStrokeValue,
    strokeMiterlimit: numberStrokeMiterLimit,
  };

  const styleForSecondEarAndMouth = {
    fill: '#EFE9DF',
    stroke: colorStrokeValue,
    strokeMiterlimit: numberStrokeMiterLimit,
  };

  const styleForEyelids = {
    fill: 'none',
    stroke: colorStrokeValue,
    strokeMiterlimit: numberStrokeMiterLimit,
  };

  const styleForTongue = {
    fill: '#EDB9BB',
    stroke: colorStrokeValue,
    strokeMiterlimit: numberStrokeMiterLimit,
  };

  const styleForPatches = {
    fill: '#2E2726',
    stroke: colorStrokeValue,
    strokeMiterlimit: numberStrokeMiterLimit,
  };

  const styleForNose = {
    fill: colorStrokeValue,
  };

  return (
    <svg
      version='1.1'
      id='Warstwa_1'
      xmlns='http://www.w3.org/2000/svg'
      x='0px'
      y='0px'
      viewBox='0 0 806.4 326.15'
      className='lying-dog-container'
    >
      <g>
        <path
          style={styleForSecondEarAndMouth}
          d='M805.84,325.63c0,0-36.4-1.49-36.4-36.4
           c0-34.91-30.58-32.79-30.58-32.79l-37.48,0c0,0-0.74,0.03-2.01-0.04c-22.53-1.23-21.54-37.34,1.02-37.34l71.23,0
           c18.95,0,34.3,16.48,34.28,36.8L805.84,325.63z'
        />
        <path
          style={styleForPatches}
          d='M128.19,257.02l544.88-0.74l0.08,0.18h27.72v0
           c0.32-71.04-57.18-128.8-128.22-128.81l-374.76-0.04C159.45,127.66,128.28,212.6,128.19,257.02L128.19,257.02z'
        />
        <g>
          <path
            style={baseStyleForHeadAndEar}
            d='M252.15,210.5l-9.27,9.27c-33.1,33.1-86.75,33.1-119.85,0
               L85.4,182.14c-33.1-33.1-33.1-86.75,0-119.85l9.27-9.27c33.1-33.1,86.75-33.1,119.85,0l37.63,37.63
               C285.24,123.74,285.24,177.4,252.15,210.5z'
          />
          <path
            style={baseStyleForHeadAndEar}
            d='M75.72,157.95c15.38-37.62-39.24-62.38-57.41-26.02
               c-0.26,0.53-0.53,1.06-0.79,1.6c-26.15,54.11-17.47,100.85-5.07,103.17C31.2,240.22,57.68,202.09,75.72,157.95z'
          />
          <path
            style={styleForSecondEarAndMouth}
            d='M182.37,0.96c-38.29,1.25-39.27,57.32-1.01,59.41
               c0.56,0.03,1.12,0.06,1.68,0.08c56.6,2.36,90.63-18.07,91.15-34.26C274.85,6,258.08-1.52,182.37,0.96z'
          />
          <path
            style={styleForEyelids}
            d='M130.71,118.36c10.02,10.02,10.02,26.25,0,36.27
               c-10.02,10.02-26.25,10.02-36.27,0'
          />
          <path
            style={styleForEyelids}
            d='M183.37,65.4c10.02,10.02,10.02,26.25,0,36.27
               c-10.02,10.02-26.25,10.02-36.27,0'
          />
          <path
            style={styleForSecondEarAndMouth}
            d='M244.31,207.51l-3.5,3.5c-12.48,12.48-32.72,12.48-45.2,0
               l-33.33-33.33l48.7-48.7l33.33,33.33C256.79,174.79,256.79,195.03,244.31,207.51z'
          />
          <g>
            <path
              style={styleForTongue}
              d='M224.59,190.53l-1.81,1.81c-6.45,6.45-16.9,6.45-23.35,0
                   l-14.86-14.86l25.15-25.15l14.86,14.86C231.03,173.63,231.03,184.08,224.59,190.53z'
            />
            <circle style={styleForPatches} cx='165.82' cy='188.85' r='39.13' />
            <circle style={styleForPatches} cx='221.01' cy='133.14' r='39.13' />
            <path
              style={styleForNose}
              d='M168.27,141.89c-4.23,5.56-1.06,13.64,5.8,14.97c8.95,1.73,19.18,3.75,19.27,3.95
                   c0.1,0.23-2.07-11.12-3.72-19.73c-1.35-7.04-9.71-10.06-15.29-5.56C172.41,137.06,170.38,139.13,168.27,141.89z'
            />
          </g>
          <path
            style={styleForPatches}
            d='M18.69,132.08c-0.26,0.53-0.53,1.06-0.79,1.6
               C1.41,167.81-1.31,195.28,2.09,213.85c3.92-0.18,28.27-2.47,28.27-30.96c0-15.78,8.51-23.99,16.86-28.25
               c9.74-4.97,15.92-14.93,15.92-25.86v-9.79C48.83,110.66,28.48,112.5,18.69,132.08z'
          />
          <path
            style={styleForPatches}
            d='M128.19,48.22V32.12c-14.67,4.07-28.53,11.85-40.07,23.39h0
               c-9.3,9.3-16.15,21.11-20.6,32.63l21.74-1C110.77,87.14,128.19,69.72,128.19,48.22z'
          />
        </g>
        <g>
          <path
            style={styleForSecondEarAndMouth}
            d='M360.72,157.62c0,0-36.4,1.39-36.4,33.94
               s-30.58,30.58-30.58,30.58l-181.48,0c0,0-34.85-1.32-34.85,34.85l249.09,0c18.95,0,34.3-15.37,34.28-34.31L360.72,157.62z'
          />
          <path
            style={styleForEyelids}
            d='M112.21,229.82c0,0-26.79-1.01-26.79,26.79'
          />
          <path
            style={styleForEyelids}
            d='M113.28,238.34c0,0-18.27-0.69-18.27,18.27'
          />
        </g>
        <g>
          <path
            style={baseStyleForHeadAndEar}
            d='M712.6,256.31H438.14v0c0-20.57,16.67-37.24,37.24-37.24
               H712.6c10.28,0,18.62,8.34,18.62,18.62v0C731.22,247.97,722.88,256.31,712.6,256.31z'
          />
          <path
            style={styleForEyelids}
            d='M478.01,229.24c0,0-27.09-1.02-27.09,27.09'
          />
          <path
            style={styleForEyelids}
            d='M479.09,237.86c0,0-18.48-0.7-18.48,18.48'
          />
        </g>
      </g>
    </svg>
  );
};

export default LyingDog;
