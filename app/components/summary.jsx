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
    valid() {
        if(this.state.data.subscapular <= 0 || 
           this.state.data.tricep <= 0 || 
           this.getSFT() > 60){
            return false
        } 
        return true;
    },
    getBodyfat() {
        if(!this.valid()) {
            return "-"
        } else {
            var bodyfat = calc.calc(this.state.data);
            return Math.round(bodyfat.bodyfat * 100) / 100
        }
    },
    getInfo() {
        if(this.valid()) {
            if(this.state.data.sex === 'boy') {
                if(this.getBodyfat() <= 10) {
                    return "Lav"
                } else if(this.getBodyfat() > 10 & this.getBodyfat() <= 25) {
                    return "Normal"
                } else if(this.getBodyfat() > 25) {
                    return "Høy"
                }
            } else if(this.state.data.sex ==='girl') {
                if(this.getBodyfat() <= 15) {
                    return "Lav"
                } else if(this.getBodyfat() > 15 & this.getBodyfat() <= 30) {
                    return "Normal"
                    } else if(this.getBodyfat() > 30) {
                    return "Høy"
                }
            }
        }
    },
    render() {
        return (
            <div className='summary'>
                <h2 className='header'>Kroppsfett (BF%)</h2>
                <div className='ans'>{this.getBodyfat()}</div>
                <div className='info'>
                    {this.getInfo()}
                </div>
            </div>
        ) 
    }

});
module.exports = Summary
