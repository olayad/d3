
// const pBrowser = document.querySelector('p')
const body = d3.select('body')
	.append('p')
	// .attr('class', 'foo')
	// .attr('class', 'bar')
	.classed('foo', true)
	.classed('bar', true)
	.text('hello world')
	.style('color', 'green')

// console.log(pBrowser)
console.log(body)
