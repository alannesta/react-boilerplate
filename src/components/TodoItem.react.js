var React = require('react');

var TodoItem = React.createClass({
    render: function() {
        return (
            <li>{this.props.todo.text}</li>
        )
    }
});

module.exports = TodoItem;

