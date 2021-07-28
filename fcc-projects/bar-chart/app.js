const url='https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json';

let dimensions = {
	width: 800,
	height: 400,
	margins: 50
}

dimensions.ctrWidth = dimensions.width - dimensions.margins * 2
dimensions.ctrHeight = dimensions.height - dimensions.margins * 2

dataset = [["1947-01-01", 200.0], ["1947-04-01", 246.3], ["1947-06-01", 247.1]]

var parseDate = d3.timeParse("%Y-%m-%d")
const xAccessor = (d) => parseDate(d[0])
const yAccessor = (d) => d[1]

document.addEventListener('DOMContentLoaded', function(){

	const svg = d3.select('.chart')
		.append('svg')
		.attr('width', dimensions.width)
		.attr('height', dimensions.height)

	const ctr = svg.append("g") // <g>
		.attr(
			"transform",
			`translate(${dimensions.margins}, ${dimensions.margins})`
		)

	const xScale = d3.scaleLinear()
		.domain([d3.min(dataset, xAccessor), d3.max(dataset, xAccessor)])
		.range([0, dimensions.ctrWidth])
		.nice()

	// const yScale = d3.scaleLinear()
	// 	.domain([0, d3.max(dataset, yAccessor)])
	// 	.range([h - padding, padding])

	let bandScale = d3.scaleBand()
		.domain(xScale.domain())
		.range(xScale.range())

	console.log('hi')

	ctr.selectAll('rect')
		.data(dataset)
		.enter()
		.append('rect')
		.attr('width', 5)
		.attr('height', 100)
		.attr('x', d => xScale(xAccessor(d)))
		.attr('y', 0)


	// ctr.selectAll('rect')
	// 	.data(dataset)
	// 	.enter()
	// 	.append('rect')
	// 	.style('fill', 'steelblue')
	// 	.attr('x', (d) => xScale(xAccessor(d)))
	// 	.attr('y', (d) => yScale(yAccessor(d)))
	// 	.attr('width', 4)
		// .attr('height', (d) => h - yAccessor(d))

// 	const req = new XMLHttpRequest();
// 	req.open("GET", url, true);
// 	req.send();
// 	req.onload = function(){
// 		resp = JSON.parse(req.responseText);
// 		// console.log(resp["data"])
// 		console.log(resp)
//
// 	}
});
