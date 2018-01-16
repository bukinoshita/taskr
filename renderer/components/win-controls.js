'use strict'

// Packages
const { remote } = require('electron')

const WinControls = () => {
  return (
    <div className="win-bar">
      <div className="win-controls">
        <div
          className="win-button -minimize"
          onClick={() => {
            remote.BrowserWindow.getFocusedWindow().minimize()
          }}
        />
        <div
          className="win-button -close"
          onClick={() => {
            remote.BrowserWindow.getFocusedWindow().close()
          }}
        />
      </div>

      <style jsx>{`
        .win-bar {
          position: fixed;
          top: 0;
          width: 100vw;
          -webkit-app-region: drag;
        }

        .win-controls {
          float: right;
        }

        .win-button {
          width: 3pc;
          height: 30px;
          display: inline-block;
          background: no-repeat center center;
          background-size: 9pt 9pt;
          margin: 0;
          z-index: 10;
          -webkit-app-region: no-drag;
          transition: 0.2s background-color;
        }

        .win-button:not(.-close):hover {
          background-color: rgba(255, 255, 255, 0.1);
        }

        .win-button:not(.-close):active {
          background-color: rgba(255, 255, 255, 0.2);
        }

        .-minimize {
          background-image: url(data:image/svg+xml;base64,Cjxzdmcgd2lkdGg9IjEycHgiIGhlaWdodD0iMXB4IiB2aWV3Qm94PSIwIDAgMTIgMSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNDAgKDMzNzYyKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5taW5pbWl6ZTwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJ3aW5kb3dfYnRuIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMzAuMDAwMDAwLCAtMjcuMDAwMDAwKSIgZmlsbD0iIzAwMDAwMCI+CiAgICAgICAgICAgIDxnIGlkPSJHcm91cCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTIuMDAwMDAwLCAxMi4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJ0b3AtcmlnaHQtY29udHJvbHMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE4LjAwMDAwMCwgMTAuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9Im1pbmltaXplIiB4PSIwIiB5PSI1IiB3aWR0aD0iMTIiIGhlaWdodD0iMSIgZmlsbD0iI2ZmZmZmZiI+PC9yZWN0PgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=);
          background-size: 9pt 1px;
        }

        .-maximize {
          background-size: 10px 10px;
          background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCIgdmlld0JveD0iMCAwIDEwIDEwIj4KICA8cGF0aCBmaWxsPSIjZmZmZmZmIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xOCwxMCBMMjgsMTAgTDI4LDIwIEwxOCwyMCBMMTgsMTAgWiBNMTksMTEgTDI3LDExIEwyNywxOSBMMTksMTkgTDE5LDExIFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xOCAtMTApIiAvPgo8L3N2Zz4K);
        }

        .maximized .-maximize {
          background-size: 9pt 9pt;
          background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMiIgaGVpZ2h0PSIxMiIgdmlld0JveD0iMCAwIDEyIDEyIj4KICA8cGF0aCBmaWxsPSIjZmZmZmZmIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMSwyIEwxMSwyIEwxMSwxIEwzLDEgTDMsMiBMMTAsMiBMMTAsOSBMMTEsOSBMMTEsMiBMMTEsMiBaIE0yLDIgTDAsMiBMMCwxMiBMMTAsMTIgTDEwLDEwIEwxMiwxMCBMMTIsMCBMMiwwIEwyLDIgTDIsMiBaIE0xLDMgTDksMyBMOSwxMSBMMSwxMSBMMSwzIEwxLDMgWiIgLz4KPC9zdmc+Cg==);
        }

        .-close {
          background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMiIgaGVpZ2h0PSIxMCIgdmlld0JveD0iMCAwIDEyIDEwIj4KICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZT0iI0ZGRkZGRiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMSkiPgogICAgPHBhdGggZD0iTTAsMCBMOS44OTgxNjU3NSw5LjkwMDgyMzk1IiBmaWxsPSIjZmZmZmZmIiAvPgogICAgPHBhdGggZD0iTTAuMTAxODM0MjUyLDAgTDEwLDkuOTAwODIzOTUiIHRyYW5zZm9ybT0ibWF0cml4KC0xIDAgMCAxIDEwLjEwMiAwKSIgZmlsbD0iI2ZmZmZmZiIgLz4KICA8L2c+Cjwvc3ZnPgo=);
        }

        .-close:hover {
          background-color: #eb0716;
          background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMiIgaGVpZ2h0PSIxMCIgdmlld0JveD0iMCAwIDEyIDEwIj4KICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZT0iI0ZGRkZGRiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMSkiPgogICAgPHBhdGggZD0iTTAsMCBMOS44OTgxNjU3NSw5LjkwMDgyMzk1IiBmaWxsPSIjZmZmZmZmIiAvPgogICAgPHBhdGggZD0iTTAuMTAxODM0MjUyLDAgTDEwLDkuOTAwODIzOTUiIHRyYW5zZm9ybT0ibWF0cml4KC0xIDAgMCAxIDEwLjEwMiAwKSIgZmlsbD0iI2ZmZmZmZiIgLz4KICA8L2c+Cjwvc3ZnPgo=);
        }

        .-close:active {
          background-color: #a1405c;
          background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMiIgaGVpZ2h0PSIxMCIgdmlld0JveD0iMCAwIDEyIDEwIj4KICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZT0iI0ZGRkZGRiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMSkiPgogICAgPHBhdGggZD0iTTAsMCBMOS44OTgxNjU3NSw5LjkwMDgyMzk1IiBmaWxsPSIjZmZmZmZmIiAvPgogICAgPHBhdGggZD0iTTAuMTAxODM0MjUyLDAgTDEwLDkuOTAwODIzOTUiIHRyYW5zZm9ybT0ibWF0cml4KC0xIDAgMCAxIDEwLjEwMiAwKSIgZmlsbD0iI2ZmZmZmZiIgLz4KICA8L2c+Cjwvc3ZnPgo=);
        }
      `}</style>
    </div>
  )
}

export default WinControls
