function Apple(weight) {
    this.weight = weight;
    this.setWeight = function (w) {
        this.weight = w;
    };
    this.getWeight = function (w) {
        return this.weight;
    }
}

let apple = new Apple(10);
