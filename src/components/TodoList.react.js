var React = require('react');
var TodoItem = require('./TodoItem.react');

var TodoList = React.createClass({
    render: function() {
        return (
            <section>
                <ul>
                    <TodoItem>{todos}</TodoItem>
                </ul>
            </section>
        )
    }
});

module.exports = TodoList;

