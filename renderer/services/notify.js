// Packages
const { remote } = require('electron')

module.exports = ({ title, body, url, onClick }) => {
  const icon = 'static/icon.ico'
  const specs = {
    title,
    body,
    icon,
    silent: true
  }

  const notification = new remote.Notification(specs)

  if (url || onClick) {
    notification.on('click', () => {
      if (onClick) {
        return onClick()
      }

      remote.shell.openExternal(url)
    })
  }

  notification.show()
  console.log(`[Notification] ${title}: ${body}`)
}
