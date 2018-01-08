'use strict'

// Packages
import Link from 'next/link'

// Theme
import { colors } from './../theme'

const btnRender = settings => {
  return settings ? (
    <Link href="/settings" prefetch>
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke={colors.romanSilver}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    </Link>
  ) : (
    <Link href="/start" prefetch>
      <svg
        width="20"
        height="20"
        viewBox="0 0 100 125"
        stroke={colors.romanSilver}
        strokeWidth="8"
      >
        <path d="M65.8,89.6c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3c0.4-0.4,0.4-1,0-1.4L29,50l38.2-38.2c0.4-0.4,0.4-1,0-1.4   s-1-0.4-1.4,0L26.9,49.3c-0.4,0.4-0.4,1,0,1.4L65.8,89.6z" />
      </svg>
    </Link>
  )
}

const Hero = ({ type, settings }) => {
  return (
    <header>
      <div>
        <h1>{type}</h1>

        {btnRender(!settings)}
      </div>

      <style jsx>{`
        header {
          flex-basis: 115px;
          display: flex;
          align-items: flex-end;
          padding-bottom: 20px;
        }

        div {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        h1 {
          color: ${colors.white};
          font-size: 30px;
        }

        svg {
          transition: 0.2s;
          cursor: pointer;
        }

        svg:hover {
          stroke: ${colors.white};
        }
      `}</style>
    </header>
  )
}

Hero.defaultProps = {
  type: 'Today',
  settings: false
}

export default Hero
