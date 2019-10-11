import React from "react";

export default function Logo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="274"
      height="268"
      viewBox="0 0 274 268"
    >
      <g fill="#fff" stroke="#707070" stroke-width="1">
        <rect width="274" height="268" rx="63" stroke="none" />
        <rect x="0.5" y="0.5" width="273" height="267" rx="62.5" fill="none" />
      </g>
      <text
        transform="translate(145 145)"
        fill="rgba(12,20,52,0.92)"
        font-size="30"
        font-family="Roboto-Bold, Roboto"
        font-weight="700"
        letter-spacing="-0.02em"
      >
        <tspan x="-84.833" y="0">
          V a c c i n e r{" "}
        </tspan>
      </text>
    </svg>
  );
}
