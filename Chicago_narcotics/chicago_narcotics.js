// Load the data
d3.csv("https://example.com/chicago_narcotics_data.csv").then(function(data) {

	// Set up the initial map
	var mapLayout = {
		title: "Chicago Narcotics Data by Location",
		height: 600,
		geo: {
			scope: "usa",
			projection: {
				type: "albers usa"
			},
			showland: true,
			landcolor: "rgb(217, 217, 217)",
			subunitwidth: 1,
			countrywidth: 1,
			subunitcolor: "rgb(255,255,255)",
			countrycolor: "rgb(255,255,255)"
		}
	};
	var mapData = [{
		type: "scattergeo",
		locations: data.map(d => d.Location),
		text: data.map(d => `Drug: ${d.Drug}<br>Year: ${d.Year}<br>Count: ${d.Count}`),
		mode: "markers",
		marker: {
			size: 10,
			color: "rgb(255, 0, 0)",
			opacity: 0.5
		}
	}];
	var mapConfig = {responsive: true};
	Plotly.newPlot("map", mapData, mapLayout, mapConfig);

	// Set up the initial bar chart
	var chartLayout = {
		title: "Chicago Narcotics Data by Year",
		height: 400,
		xaxis: {
			title: "Year"
		},
		yaxis: {
			title: "Number of Incidents"
		}
	};
	var chartData = [{
		x: ["2001", "2002", "2003", "2004", "2005","2006", "2007", "2008", "2009", "2010","2011", "2012", "2013", "2014", "2015","2016", "2017"],
		y: [
			data.filter(d => d.Drug === "All Drugs").reduce((a, b) => a + parseInt(b.Count), 0),
			data.filter(d => d.Drug === "All Drugs" && d.Year === "
