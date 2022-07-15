import * as React from "react";

function SvgComponent(props) {
  return (
    <svg
      width={15}
      height={15}
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <path fill="url(#pattern0)" d="M0 0H15V15H0z" />
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <use xlinkHref="#image0_460_183" transform="scale(.02083)" />
        </pattern>
        <image
          id="image0_460_183"
          width={48}
          height={48}
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
}

export default SvgComponent;
