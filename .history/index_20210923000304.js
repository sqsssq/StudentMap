$.getJSON('https://data.jianshukeji.com/jsonp?filename=json/world-population-density.json&callback=?', function (data) {
		// Initiate the chart
		Highcharts.mapChart('container', {
				title : {
						text : 'Zoom in on country by double click'
				},
				mapNavigation: {
						enabled: true,
						enableDoubleClickZoomTo: true
				},
				colorAxis: {
						min: 1,
						max: 1000,
						type: 'logarithmic'
				},
				series : [{
						data : data,
						mapData: Highcharts.maps['custom/world'],
						joinBy: ['iso-a2', 'code'],
						name: 'Population density',
						states: {
								hover: {
										color: '#BADA55'
								}
						},
						tooltip: {
								valueSuffix: '/km²'
						}
				}]
		});
});