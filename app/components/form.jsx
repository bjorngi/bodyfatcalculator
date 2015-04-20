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
            <div className='formWrapper'>
                <div className="span span-1 fullwidth">
                    <div id='about'>

                        <label for='sex'>Kjønn</label>
                        <select id='sex' onChange={this.changeSex}>
                            <option value="boy">Gutt</option>
                            <option value="girl">Jente</option>
                        </select> 

                        <label for='skin'>Etnisitet</label>
                        <select id='skin' onChange={this.setCaucasian}>
                            <option value="caucasian">Kaukastisk</option>
                            <option value="other">Andre</option>
                        </select> 

                    </div>

                    <label for='gmfcs'>CP-grad</label><br/>
                    <select id='gmcfs' onChange={this.setGMFCS}>
                        <option value="1">GMFCS I & II</option>
                        <option value="3">GMFCS III, IV & V</option>
                    </select>

                    <div className='slider'>
                        <label for='tanner'>Pubertetsutvikling (Tanner: {this.state.data.tanner})</label><br/>
                        <input 
                            type='range' 
                            min='1' 
                            max='5' 
                            onChange={this.changeTanner}
                            id='tanner'/>
                        <div id='tannerVal'>
                        </div>
                    </div>


                    <div id='mesures'>
                        <h3 className='header'>Hudfoldtykkelse (SFT)</h3>
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

                </div>

                <div className="span span-2">
                    <Summary/>
                </div>
            </div>
        )
    }
});
module.exports = Form
