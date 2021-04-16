const items = require('./items.routes')
const locations = require('./locations.routes')

module.exports = app => {
    app.use('/api/items', items)
    app.use('/api/locations', locations)
}