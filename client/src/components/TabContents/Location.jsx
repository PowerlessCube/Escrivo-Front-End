var React = require("react");

var LocationTab = React.createClass({

	// adapted code from the following source - http://stackoverflow.com/questions/29532356/google-maps-in-react
	getDefaultProps: function () {
    return {
      initialZoom: 16,
    };
  },

	componentDidMount: function (rootNode) {
    var mapOptions = {
      center: this.mapCenterLatLng(),
			scrollwheel: false,
      zoom: this.props.initialZoom
    },
    map = new google.maps.Map(this.getDOMNode(), mapOptions);
    var marker = new google.maps.Marker({position: this.mapCenterLatLng(), map: map});
    this.setState({map: map});
  },

  mapCenterLatLng: function () {
    var props = this.props;
    return new google.maps.LatLng(props.tabData.lat, props.tabData.lng);
  },
	// end of adapted source code - http://stackoverflow.com/questions/29532356/google-maps-in-react

	render: function() {
		return (
			<div className="content location">
			</div>
		)
	}

})

module.exports = LocationTab;
