var React = require('react');
var TodoItem = require('./TodoItem.react');

var TodoList = React.createClass({

    render: function() {

        var todos = [];

        //this.props.todos.forEach(function(todo) {
        //    todos.push(<TodoItem todo = {todo} />)
        //});

        for (var key in this.props.todos) {
            //todos.push(this.props.todos[key]);
            todos.push(<TodoItem todo= {this.props.todos[key]}/>)
        }

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

