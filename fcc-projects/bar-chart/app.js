const url='https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json';
const w = 500;
const h = 500;
const padding = 60;

const xAccessor = (d) => d.data[0]
const yAccessor = (d) => d.data[1]

document.addEventListener('DOMContentLoaded', function(){


	const req = new XMLHttpRequest();
	req.open("GET", url, true);
	req.send();
	req.onload = function(){
		resp = JSON.parse(req.responseText);
		// console.log(resp["data"])
		console.log(resp)

		const xScale = d3.scaleLinear()
			.domain([0, d3.max(resp, xAccessor)])
			.range([padding, w - padding])

		const yScale = d3.scaleLinear()
			.domain([0, d3.max(resp, yAccessor)])
			.range([h - padding, padding])

		const svg = d3.select('body')
			.append('svg')
			.attr('width', w)
			.attr('height', h)

		svg.selectAll('bar')
			.data(resp)
			.enter()
			.append('rect')
			.style('fill', 'steelblue')
			.attr('x', (d) => xScale(xAccessor(d)))
			.attr('y', (d) => yScale(yAccessor(d)))
			.attr('width', 4)
			.attr('height', (d) => yAccessor(d))

	}







});
