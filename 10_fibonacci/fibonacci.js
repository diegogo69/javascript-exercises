const log = console.log;

const fibonacci = function(Nth) {
    if (Nth < 0) return 'OOPS';
    else if (Nth == 0) return 0;
    else if (Nth == 1 || Nth == 2) return 1;

    // Fibonacci Number Obj. Holds props and methods
    let fn = {
        // F-1, F-2 and N
        _1: 1,
        _2: 1,
        n: 0,
        // Calculate fibonnacci number
        getN() {
            this.n = this._1 + this._2;
            this._1 = this._2;
            this._2 = this.n;
        },
        // Get Nth character of the fibonnacci sequence
        getNth(Nth) {
            for (let i = 3; i <= Nth; i++) {
                this.getN();
            }
            return this.n;
        },
    }
    return fn.getNth(Nth);
};

// Do not edit below this line
module.exports = fibonacci;
