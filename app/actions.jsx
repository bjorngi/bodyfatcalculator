var Reflux = require('reflux');

var Actions = Reflux.createActions(
    [
        "updateTanner",
        "updateSubscapular",
        "updateTriceps",
        "updateSex",
        "setCaucasian",
        "setGMFCS",
    ]


);
module.exports = Actions;
