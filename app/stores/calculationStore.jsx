var Reflux = require('reflux');
var actions = require('actions');

CalculationStore = Reflux.createStore({
    data: {
        sex: 'boy',
        tanner: 3,
        subscapular: 0,
        tricep: 0,
        caucasian: true,
        gmfcs: 1,
    },
    listenables: [actions],
    getInitialState() {
        return {data: this.data};
    },

    onUpdateTanner(newTanner) {
        this.data.tanner = newTanner;
        this.trigger({data: this.data});
    },
    onUpdateSubscapular(newSubscapular) {
        this.data.subscapular = newSubscapular;
        this.trigger({data: this.data});
    },
    onUpdateTriceps(newTricep) {
        this.data.tricep = newTricep;
        this.trigger({data: this.data});
    },
    onUpdateSex(newSex){
        this.data.sex = newSex;
        this.trigger({data: this.data});
    },
    onSetCaucasian(newVal) {
        this.data.caucasian = newVal;
        this.trigger({data: this.data});
    },
    onSetGMFCS(newVal) {
        this.data.gmfcs = newVal;
        this.trigger({data: this.data});
    }
});
module.exports = CalculationStore;
