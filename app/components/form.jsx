var React = require('react');
var Reflux = require('reflux');

// Components
var NumberInput = require('components/number');
var Summary = require('components/summary');
var actions = require('actions');
require('styles/styles.css');

var CalculationStore = require('stores/calculationStore');

var Form = React.createClass({
    mixins: [Reflux.connect(CalculationStore)],
    changeTanner(event) {
        return actions.updateTanner(
            parseInt(event.target.value));
    },
    changeSubscapular(event) {
        var subscapular = event.target.value;
        if(subscapular === "") {
            return actions.updateSubscapular(0);
        } else {
            return actions.updateSubscapular(
                parseFloat(subscapular));
        }
    },
    changeTriceps(event) {
        var tricep = event.target.value;
        if(tricep === "") {
            return actions.updateTriceps(0);
        } else {
            return actions.updateTriceps(
                parseFloat(event.target.value));
        }
    },
    changeSex(event) {
        actions.updateSex(event.target.value);
        
    },
    setCaucasian(event) {
        val = event.target.value;
        if(val === "other") {
            actions.setCaucasian(false);
        } else {
            actions.setCaucasian(true);
        }
    },
    setGMFCS(event) {
        var val = event.target.value;
        actions.setGMFCS(parseInt(val));
    },
    render() {
        return(
            <div>
                <div className="span span-1">
                    <div id='about'>
                        <select id='sex' onChange={this.changeSex}>
                            <option value="boy">Gutt</option>
                            <option value="girl">Jente</option>
                        </select> 
                        <select id='skin' onChange={this.setCaucasian}>
                            <option value="caucasian">Caucasian</option>
                            <option value="other">Annet</option>
                        </select> 
                    </div>
                    <label for='gmfcs'>CP-Grad</label>
                    <select id='gmcfs' onChange={this.setGMFCS}>
                        <option value="1">GMFCS I & II</option>
                        <option value="3">GMFCS III, IV & V</option>
                    </select>
                    <div className='slider'>
                        <label for='tanner'>Tanner</label>
                        <input 
                            type='range' 
                            min='1' 
                            max='5' 
                            onChange={this.changeTanner}
                            id='tanner'/>{this.state.data.tanner}
                    </div>
                    <NumberInput
                        id='subscapular'
                        label='Subscapular (mm)'
                        labelId='subscapularInput'
                        onChange={this.changeSubscapular}
                    />
                    <NumberInput
                        id='triceps'
                        label='Triceps (mm)'
                        labelId='tricepsInput'
                        onChange={this.changeTriceps}
                    />
                </div>
                <div className="span span-2">
                    <Summary/>
                </div>
            </div>
        )
    }
});
module.exports = Form
