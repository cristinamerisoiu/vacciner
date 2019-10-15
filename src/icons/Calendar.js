import React from "react";

export default function Calendar(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height="41.818"
      viewBox="0 0 41.259 44.315"
    >
      <g transform="translate(-2)">
        <path
          d="M37.147,4V7.056H31.8V4H13.461V7.056H8.112V4H2v8.4H43.259V4Z"
          transform="translate(0 -0.944)"
          fill="#fc3952"
        />
        <path
          d="M8.112,15H2V47.854H43.259V15H8.112Z"
          transform="translate(0 -3.539)"
          fill="#edeada"
        />
        <path
          d="M32.158,22H10V44.158H39.034V22Zm-6.876,1.528h5.348v5.348H25.281Zm5.348,12.225H25.281V30.4h5.348ZM18.4,30.4h5.348v5.348H18.4Zm0-6.876h5.348v5.348H18.4Zm-6.876,0h5.348v5.348H11.528Zm0,6.876h5.348v5.348H11.528Zm5.348,12.225H11.528V37.281h5.348Zm6.876,0H18.4V37.281h5.348Zm6.876,0H25.281V37.281h5.348Zm6.876,0H32.158V37.281h5.348Zm0-6.876H32.158V30.4h5.348Zm-5.348-6.876V23.528h5.348v5.348Z"
          transform="translate(-1.888 -5.191)"
          fill="#cec9ae"
        />
        <rect width="5" height="6" transform="translate(8)" fill="#28384c" />
        <rect width="5" height="6" transform="translate(32)" fill="#28384c" />
        <rect
          width="6"
          height="6"
          transform="translate(23 25)"
          fill="#26b99a"
        />
      </g>
    </svg>
  );
}
