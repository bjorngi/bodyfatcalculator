var React = require('react');

// Components

var Form = require('components/form');
require('styles/styles.css')

var App = React.createClass({
    render() {
        return (
            <div>
                <h1 className='header'>Cerebral parese kroppsfett kalkulator</h1>
                <Form/>
            </div>

        )
    }
});
React.render(<App/>,  document.getElementById('wrapper'));
