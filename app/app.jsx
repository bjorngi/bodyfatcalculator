var React = require('react');

// Components

var Form = require('components/form');


var App = React.createClass({
    render() {
        return (
            <div>
                <Form/>
            </div>

        )
    }
});
React.render(<App/>, document.body);
