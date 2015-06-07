var React = require('react');
var TodoTextInput = require('./TodoTextInput.react');
var TodoList = require('./TodoList.react');

var app = React.createClass({
    render: function() {
        return (
            <section>
                <header>
                    <h1>todos</h1>
                    <TodoTextInput placeholder="What's up today? "/>
                </header>
                <TodoList todos = {this.props.todos}></TodoList>
            </section>

        )
    }
});

module.exports = app;

