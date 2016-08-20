var React = require("react");

var LocationTab = React.createClass({

	// source of code - http://stackoverflow.com/questions/29532356/google-maps-in-react
	getDefaultProps: function () {
    return {
      initialZoom: 14,
      mapCenterLat: 53.5333,
      mapCenterLng: -113.4073126
    };
  },

	componentDidMount: function (rootNode) {
    var mapOptions = {
      center: this.mapCenterLatLng(),
      zoom: this.props.initialZoom
    },
    map = new google.maps.Map(this.getDOMNode(), mapOptions);
    var marker = new google.maps.Marker({position: this.mapCenterLatLng(), title: 'Hi', map: map});
    this.setState({map: map});
  },

  mapCenterLatLng: function () {
    var props = this.props;

    return new google.maps.LatLng(props.mapCenterLat, props.mapCenterLng);
  },
	// end of source of code - http://stackoverflow.com/questions/29532356/google-maps-in-react

	render: function() {
		return (
			<div className="content location">
				<h2>{this.props.tabData.title}</h2>
				<div id="map" ref="myMap"></div>
			</div>
		)
	}

})

module.exports = LocationTab;
