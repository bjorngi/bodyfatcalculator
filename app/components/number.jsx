var React = require('react');

var NumberInput = React.createClass({
    propTypes: {
        id: React.PropTypes.string,
        onChange: React.PropTypes.func.isRequired,
        placeholder: React.PropTypes.string,
        label: React.PropTypes.string.isRequired,
        labelId: React.PropTypes.string.isRequired
    },
    render() {
        return (
            <div className='input'>
                <div id={this.props.id}>
                    <label for={this.props.labelId}>
                        {this.props.label}
                    </label><br/>
                    <input 
                        id={this.props.labelId}
                        type='number'
                        placeholder={this.props.placeholder}
                        onChange={this.props.onChange}
                    />
                </div>
            </div>
        )
    }

});

module.exports = NumberInput
