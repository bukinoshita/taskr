'use strict'

// Packages
import Link from 'next/link'

// Components
import SettingsIcon from './../icons/settings'
import LayersIcon from './../icons/layers'

// Theme
import { colors, typography } from './../theme'

const Hero = ({ type, isSettings }) => {
  return (
    <header>
      <h1>{type}</h1>

      {isSettings ? (
        <Link href="/home?tab=Today" prefetch>
          <div>
            <LayersIcon styles={{ cursor: 'pointer' }} />
          </div>
        </Link>
      ) : (
        <Link href="/settings?tab=Identity" prefetch>
          <div>
            <SettingsIcon styles={{ cursor: 'pointer' }} />
          </div>
        </Link>
      )}

      <style jsx>{`
        header {
          padding-top: 50px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          -webkit-app-region: drag;
        }

        h1 {
          color: ${colors.white};
          font-size: ${typography.f32};
        }
      `}</style>
    </header>
  )
}

Hero.defaultProps = {
  type: 'Today'
}

export default Hero
