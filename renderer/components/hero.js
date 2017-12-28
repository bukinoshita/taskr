'use strict'

const Hero = ({ type }) => {
  return (
    <header>
      <h1>{type}</h1>

      <style jsx>{`
        header {
          flex-basis: 115px;
          display: flex;
          align-items: flex-end;
          padding-bottom: 20px;
        }

        h1 {
          color: white;
          font-size: 30px;
        }
      `}</style>
    </header>
  )
}

Hero.defaultProps = {
  type: 'Today'
}

export default Hero
