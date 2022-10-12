const DogHead = () => {
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
    }

    const styleForEyelids = {
        fill: 'none',
        stroke: colorStrokeValue,
        strokeMiterlimit: numberStrokeMiterLimit,
    }

    const styleForTongue = {
        fill: '#EDB9BB',
        stroke: colorStrokeValue,
        strokeMiterlimit: numberStrokeMiterLimit,
    }

    const styleForPatches = {
        fill: '#2E2726',
        stroke: colorStrokeValue,
        strokeMiterlimit: numberStrokeMiterLimit,
    }

    const styleForNose = {
        fill: colorStrokeValue,
    }

    return (
        <svg version="1.1" id="Warstwa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            viewBox="0 0 342.84 226.57" className="dog-head-container">
            <g>
                <path style={baseStyleForHeadAndEar} d="M189.64,226.07l-13.11,0c-46.8,0-84.75-37.94-84.75-84.75
                V88.11c0-46.8,37.94-84.75,84.75-84.75l13.11,0c46.8,0,84.75,37.94,84.75,84.75v53.21C274.39,188.13,236.45,226.07,189.64,226.07z"
                />
                <path style={baseStyleForHeadAndEar} className="dog-head-container__sleeping-move" d="M102.04,64.16c37.47-15.73,16.36-71.86-22.19-59
                c-0.56,0.19-1.12,0.38-1.69,0.58C21.41,25.51-5.5,64.71,1.62,75.12C12.39,90.86,58.08,82.62,102.04,64.16z"/>
                <path style={styleForSecondEarAndMouth} className="dog-head-container__sleeping-move" d="M288.47,28.56c-27.96-26.19-68.29,12.76-42.72,41.3
                c0.37,0.41,0.75,0.83,1.13,1.25c38.36,41.69,76.86,51.3,88.68,40.23C350.3,97.52,343.76,80.35,288.47,28.56z"/>
                <path style={styleForEyelids} className="dog-head-container__sleeping-move" d="M168.92,75.05c0,14.16-11.48,25.65-25.65,25.65
                s-25.65-11.48-25.65-25.65"/>
                <path style={styleForEyelids} className="dog-head-container__sleeping-move" d="M243.61,74.84c0,14.16-11.48,25.65-25.65,25.65
                c-14.16,0-25.65-11.48-25.65-25.65"/>
                <path style={styleForSecondEarAndMouth} d="M186.21,218.42h-4.94c-17.65,0-31.96-14.31-31.96-31.96v-47.14
                h68.87v47.14C218.17,204.11,203.86,218.42,186.21,218.42z"/>
                <g>
                    <path style={styleForTongue} d="M184.27,192.46h-2.55c-9.12,0-16.51-7.39-16.51-16.51v-21.02
                    h35.57v21.02C200.78,185.07,193.39,192.46,184.27,192.46z"/>
                    <circle style={styleForPatches} className="dog-head-container__sleeping-move" cx="143.91" cy="149.72" r="39.13" />
                    <circle style={styleForPatches} className="dog-head-container__sleeping-move" cx="222.33" cy="149.36" r="39.13" />
                    <path style={styleForNose} d="M178.85,118.25c-6.92,0.94-10.4,8.9-6.48,14.68c5.11,7.55,10.92,16.21,10.83,16.42
                    c-0.09,0.23,6.4-9.33,11.32-16.58c4.02-5.94,0.25-13.98-6.88-14.74C185.19,117.77,182.29,117.79,178.85,118.25z"/>
                </g>
                <path style={styleForPatches} d="M80.01,5.55c-0.56,0.19-1.12,0.38-1.69,0.58
                c-35.79,12.46-57.14,29.96-67.87,45.5c2.9,2.64,21.74,18.24,41.88-1.9c11.16-11.16,22.98-10.95,31.89-8.05
                c10.4,3.38,21.81,0.7,29.54-7.03l6.92-6.92C116.48,11.71,100.78-1.38,80.01,5.55z"/>
                <path style={styleForPatches} d="M216.74,23.68l11.38-11.38c-13.25-7.5-28.55-11.8-44.87-11.8
                l0,0c-13.15,0-26.34,3.51-37.64,8.51l16.08,14.66C176.9,38.88,201.54,38.88,216.74,23.68z"/>
            </g>
        </svg>
    )
}

export default DogHead;