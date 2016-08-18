var React = require('react');
var ReactDOM = require('react-dom');

var SideBar = require('./components/SideBar.jsx');

window.onload = function(){
  ReactDOM.render(
    <SideBar/>,
		document.getElementById('app')
  );
}
