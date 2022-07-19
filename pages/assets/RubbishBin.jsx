import * as React from "react";

function SvgComponent({ gomiColor }) {
  return (
    <svg
      viewBox="0 0 180 250"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      // {...props}
    >
      <g clipPath="url(#clip0_171_119)" fill={gomiColor}>
        <path d="M12.816 225.884c.743 13.065 11.813 23.75 24.601 23.75h104.199c12.788 0 23.862-10.685 24.605-23.75l8.471-149.495H4.342l8.474 149.495zM174.817 39.348c-2.599-1.142-25.238-9.57-59.246-12.724.004-.157.012-.31.012-.463 0-6.94-2.695-13.597-7.493-18.505C103.293 2.748 96.785-.01 90-.01c-6.784 0-13.292 2.757-18.09 7.665-4.797 4.908-7.492 11.564-7.492 18.505 0 .153.008.306.011.463C30.421 29.778 7.775 38.206 5.18 39.348.65 41.335 0 43.982 0 47.956v17.226h180V47.956c0-3.974-.649-6.62-5.183-8.608zm-84.819-13.91c-3.775 0-7.452.084-11.046.229a11.43 11.43 0 013.399-7.682 10.928 10.928 0 017.65-3.143c2.85 0 5.59 1.126 7.648 3.143a11.425 11.425 0 013.399 7.682c-3.594-.146-7.271-.23-11.05-.23z" />
      </g>
      <defs>
        <clipPath id="clip0_171_119">
          <path fill="#fff" d="M0 0H180V250H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default SvgComponent;
