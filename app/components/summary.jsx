var React = require('react');
var Reflux = require('reflux');
var calc = require('../calculations');

// Stores
var CalculationStore = require('stores/calculationStore');

var Summary = React.createClass({
    mixins: [Reflux.connect(CalculationStore), calc],
    getSFT() {
        sft = (this.state.data.subscapular + this.state.data.tricep);
        return sft;

    },
    render() {
        return (
            <div className='summary'>
                Tanner: {this.state.data.tanner}<br/>
                Subscapural: {this.state.data.subscapular}<br/>
                Tricep: {this.state.data.tricep}<br/>
                <h1>Sum: {Math.round(calc.calc(this.state.data)* 100) / 100} %</h1>
            </div>
        ) 
    }

});
module.exports = Summary
