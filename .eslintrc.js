const { configure, presets } = require('@habbaz-dev/eslint-config')

module.exports = configure({
	root: true,
	presets: [presets.imports(), presets.typescript(), presets.prettier(), presets.node()]
})
