var React = require('react');
var TodoAction = require('../actions/TodoActions')

var TodoTextInput = React.createClass({

    createTodo: function(event) {
      TodoAction.create(event.target.value);
    },

    render: function() {
        return (
            <input onChange={this.createTodo} />
        )
    }
});

module.exports = TodoTextInput;

