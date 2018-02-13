'use strict'

// Packages
import { shell } from 'electron'

// Components
import Item from './item'
import ArrowRightIcon from './../../icons/arrow-right'
import AwardIcon from './../../icons/award'
import UploadIcon from './../../icons/upload'
import DownloadIcon from './../../icons/download'
import TrashIcon from './../../icons/trash'

// Theme
import { colors, typography } from './../../theme'

const Account = ({
  importUser,
  exportUser,
  clearHistory,
  selectChange,
  defaultOption
}) => {
  return (
    <ul>
      {/*
        <li onClick={() => shell.openExternal('https://gettaskr.now.sh/pro')}>
          <AwardIcon />
          <div>
            <h3>
              Taskr Pro <span>14 days free trial</span>
            </h3>
            <p>Cloud-sync, powerful plugins and more</p>
          </div>

          <ArrowRightIcon />
        </li>
      */}

      <Item
        name="Create tasks on"
        description="Default tab to create new tasks"
      >
        <div className="select">
          <select onChange={selectChange} value={defaultOption}>
            <option value="Today">Today</option>
            <option value="Backlog">Backlog</option>
          </select>
        </div>
      </Item>

      <Item
        name="Import tasks"
        description="Import tasks from a json file"
        onClick={importUser}
      >
        <UploadIcon />
      </Item>

      <Item
        name="Export tasks"
        description="Export tasks to a json file"
        onClick={exportUser}
      >
        <DownloadIcon />
      </Item>

      <Item
        name="Clear tasks"
        description="Delete all your tasks"
        onClick={clearHistory}
      >
        <TrashIcon />
      </Item>

      <style jsx>{`
        li {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 14px;
          border: 1px solid ${colors.white};
          margin-bottom: 30px;
          cursor: pointer;
          transition: 0.2s;
        }

        li:hover {
          transform: translateY(2px);
        }

        h3 {
          color: ${colors.white};
          font-size: ${typography.f14};
          font-weight: ${typography.bold};
          text-transform: uppercase;
        }

        p {
          color: ${colors.white};
          font-size: ${typography.f10};
          font-weight: ${typography.regular};
          margin-top: 5px;
        }

        span {
          color: ${colors.romanSilver};
          font-size: ${typography.f8};
          font-weight: ${typography.regular};
          text-transform: initial;
        }

        .select {
          line-height: 1;
          cursor: pointer;
        }

        select {
          background-color: transparent;
          color: ${colors.romanSilver};
          font-weight: ${typography.bold};
          transition: 0.2s;
          outline: none;
          cursor: pointer;
          border: none;
        }

        select:hover {
          color: ${colors.white};
        }
      `}</style>
    </ul>
  )
}

export default Account
