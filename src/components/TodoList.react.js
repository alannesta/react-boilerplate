var React = require('react');
var TodoItem = require('./TodoItem.react');

var TodoList = React.createClass({

    render: function() {

        var todos = [];

        this.props.forEach(function(todo) {
            todos.push(<TodoItem todo = {todo} />)
        });

        return (
            <section>
                <ul>
                    {todos}
                </ul>
            </section>
        )
    }
});

module.exports = TodoList;

