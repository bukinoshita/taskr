'use strict'

const Layers = ({ styles }) => {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" style={styles}>
      <g
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
        transform="translate(-275.000000, -59.000000)"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <g
          transform="translate(25.000000, 50.000000)"
          stroke="#FFFFFF"
          strokeWidth="1.8"
        >
          <g transform="translate(251.000000, 10.000000)">
            <polygon points="9 0 0 4.5 9 9 18 4.5" />
            <polyline points="0 13.5 9 18 18 13.5" />
            <polyline points="0 9 9 13.5 18 9" />
          </g>
        </g>
      </g>
    </svg>
  )
}

export default Layers
