var React = require('react');

var Calculations = {
    variables: {
            gurka: {
                boy: '-5.0',
                girl: '0.0',
                gmfcs: '5.1',
                darkSkin: '-3.1',
                tannerMed: '2.0',
                tannerTop: '-4.6',
                sftHigh: '-3.2',
            },
            gr: {
                prepubescentaWhiteBoy: '-1.7',
                prepubescentBlackBoy: '-3.2',
                pubescentWhiteBoy: '-3.4',
                pubescentBlackBoy: '-5.2',
                postpubescentWhiteBoy: '-5.5',
                postpubescentBlackBoy: '-6.8',
                femaleLE35: '-2.5',
                femaleM35: '9.7',
                maleM35: '1.6',
            }
    },
    calc(data) {
        return this.sex(data);
    },
    sex(data) {
        var gurka = 0;
        if(data.sex === "boy") {
            gurka += parseFloat(this.variables.gurka.boy)
        }
        return this.sft(gurka, data)


    },
    sft(gurka, data) {
        var sft = data.subscapular + data.tricep;
        if(sft > 35) {
            gurka += parseFloat(this.variables.gurka.sftHigh)
        }
        return this.skin(gurka, data);
    },
    skin(gurka, data) {
        if(!data.caucasian) {
            gurka += parseFloat(this.variables.gurka.darkSkin);
        }
        return this.tanner(gurka, data);
    },
    tanner(gurka, data) {
        if(data.tanner === 3) {
            gurka += parseFloat(this.variables.gurka.tannerMed);
            
        } else if(data.tanner > 2) {
            gurka += parseFloat(this.variables.gurka.tannerTop);
        }
        return this.gmfcs(gurka, data);
    },
    gmfcs(gurka, data) {
        if(data.gmfcs > 2) {
            gurka += parseFloat(this.variables.gurka.gmfcs)
        }
        return this.equation(gurka, data);
    },

    equation(gurka, data) {
        var sft = data.subscapular + data.tricep;
        var gr = 0

        if(data.sex === "boy") {
            if(data.tanner < 3) {
                if(data.caucasian) {
                    gr += parseFloat(this.variables.gr.prepubescentaWhiteBoy);
                } if(!data.caucasian) {
                    gr += parseFloat(this.variables.gr.prepubescentBlackBoy);
                }
            }
            if(data.tanner === 3) {
                if(data.caucasian) {
                    gr += parseFloat(this.variables.gr.pubescentWhiteBoy);
                } if(!data.caucasian) {
                    gr += parseFloat(this.variables.gr.pubescentBlackBoy);
                }
            }
            if(data.tanner > 3) {
                if(data.caucasian) {
                    gr += parseFloat(this.variables.gr.postpubescentWhiteBoy);
                } if(!data.caucasian) {
                    gr += parseFloat(this.variables.gr.postpubescentBlackBoy);
                }
            }
            if(sft < 35) {
                return 1.21*sft-(0.008*sft*sft)+gurka+gr
            } else if (sft > 35) {
                gr += parseFloat(this.variables.gr.maleM35);
                return 1.21*sft-(0.008*sft*sft)+gurka+gr
            }
        }
        if(data.sex === "girl") {
            if(sft < 35) {
                gr += parseFloat(this.variables.gr.femaleLE35)
                return 1.33*sft-(0.013*sft*sft)+gurka+gr
            } else if(sft > 35) {
                gr += parseFloat(this.variables.gr.femaleM35)
                return 0.546*sft+gurka+gr
            }
        }
    }
}
module.exports = Calculations;

