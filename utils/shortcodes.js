const markdownIt = require('markdown-it')

module.exports = {
	svg: function (name, desc, classes, viewBox) {
		const viewBoxAttr = viewBox ? `viewBox="${viewBox}"` : ''
		return `<svg ${viewBoxAttr} class="${classes}" aria-describedby="symbol-${name}-desc" role="group">
                <desc id="symbol-${name}-desc">${desc}</desc>
                <use xlink:href="#symbol-${name}"></use>
            </svg>`
	},

	markdown: function (value) {
		if (!value) {
			return ''
		}

		let markdown = markdownIt({
			html: true,
		})

		return markdown.render(value)
	},

	/**
	 * My own YouTube embed
	 * instead of the plugin that wasn't configurable and didn't have Title
	 * slug = required
	 * title = required
	 * startTime = optional
	 */
	youtube: function (slug, title, startTime) {
		return `<div id="${slug}" class="relative w-full video-16x9"><iframe class="absolute top-0 right-0 bottom-0 left-0 w-full h-full" width="100%" height="100%" title="${title}" src="https://www.youtube.com/embed/${slug}${
			startTime ? `?start=${startTime}` : ''
		}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe></div>`
	},
}
