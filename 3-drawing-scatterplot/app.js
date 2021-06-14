
async function draw() {
	// Data
	const dataset = await d3.json('data.json')

	// Dimensions
	let dimensions = {
		width: 800,
		height: 800,
		margin: {
			top: 50,
			bottom: 50,
			left: 50,
			right: 50
		}
	}

	const xAccessor = (d) => d.currently.humidity
	const yAccessor = (d) => d.currently.apparentTemperature

	// Draw Image
	const svg = d3.select('#chart')
		.append('svg')
		.attr('width', dimensions.width)
		.attr('height', dimensions.height)

	const ctr = svg.append('g')
		.attr('transform',
			`translate(${dimensions.margin.left}, ${dimensions.margin.top})`
		)

	ctr.append('circle')
		.attr('r', 15)


	//Draw circles
	ctr.selectAll('circle')
		.data(dataset)
		.join('circle')
		.attr('cx', xAccessor)
		.attr('cy', yAccessor)
		.attr('fill', 'red')
}




draw()