
Array.prototype.randomElement = function () {
    return this[(Math.random() * this.length) | 0]
}

Array.prototype.randomDiffElement = function(last) {
    if (this.length == 0) {
       return;
    } else if (this.length == 1) {
       return this[0];
    } else {
       var num = 0;
       do {
          num = (Math.random() * this.length) | 0;
       } while (this[num] == last);
       return this[num];
    }
 }