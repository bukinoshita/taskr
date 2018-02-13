'use strict'

// Packages
import reactHashAvatar from 'react-hash-avatar'
import renderHTML from 'react-render-html'

import ButtonLink from './../../ui/button-link'

// Theme
import { colors, typography } from './../../theme'

const Identity = ({ user }) => {
  return (
    <div className="user">
      <div>
        {user &&
        user.username &&
        user.email &&
        !user.subscription.trial.ended ? (
          <div>
            <div className="avatar">
              {renderHTML(
                reactHashAvatar(user.username, { size: 75, radius: '50px' })
              )}
              <h4>{user.username.substring(0, 2)}</h4>

              <div className="badge">Pro</div>
            </div>

            <h3>
              Your username is <span className="strong">{user.username}</span>
            </h3>

            <span className="email">{user.email}</span>
          </div>
        ) : (
          <div>
            <h3 className="free">
              You are on <span className="strong">Free version</span>.
            </h3>

            {/*
              <ButtonLink href="/signup">Pro — 14 days free trial</ButtonLink>
              <ButtonLink href="/login" color="dark">
                Login into your account
              </ButtonLink>
            */}
          </div>
        )}
      </div>

      <style jsx>{`
        .user {
          text-align: center;
          display: flex;
          flex-direction: column;
          justify-content: center;
          height: calc(580px - 246px);
          max-height: calc(580px - 246px);
        }

        .avatar {
          position: relative;
          margin-left: auto;
          margin-right: auto;
          width: 75px;
        }

        h4 {
          position: absolute;
          color: ${colors.white};
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          font-size: ${typography.f24};
          font-weight: ${typography.bold};
          line-height: 75px;
          text-align: center;
        }

        h3 {
          color: ${colors.white};
          font-size: ${typography.f16};
          text-align: center;
          font-weight: ${typography.regular};
          margin-top: 20px;
          margin-bottom: 10px;
        }

        .strong {
          font-weight: ${typography.bold};
        }

        .email {
          color: ${colors.romanSilver};
          font-size: ${typography.f14};
          text-align: center;
          font-weight: ${typography.regular};
        }

        .badge {
          margin-top: 20px;
          height: 20px;
          line-height: 20px;
          text-align: center;
          width: 40px;
          margin-left: auto;
          margin-right: auto;
          color: ${colors.white};
          background-color: ${colors.brightTurquoise};
          text-transform: uppercase;
          font-size: ${typography.f10};
          font-weight: ${typography.bold};
          border-radius: 2px;
        }

        .free {
          margin-bottom: 30px;
          display: block;
          width: 100%;
        }
      `}</style>
    </div>
  )
}

export default Identity
