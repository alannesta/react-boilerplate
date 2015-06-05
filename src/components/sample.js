/** @jsx React.DOM */
var React = require('react');
var requireStylesheet = require('stylesheets').requireStylesheet;

requireStylesheet(process.env.STATIC_ROOT + 'MyComponent.css');

var SampleComponent = React.createClass({
  render: function() {
    return <span className="MyComponent">Hello, This is a sample component!</span>;
  }
});

module.exports = SampleComponent;