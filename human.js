let Human = function (name, gender, weight) {
    this.gender = gender;
    this.name = name;
    this.weight = weight;


    this.speak = function (mess) {
        return mess;
    }
    this.setWeight = function (w) {
        this.weight = w;
    }
    this.getWeight = function () {
        return this.weight;
    }
    this.eat = function (apple) {
        this.setWeight(this.getWeight()+1);
        apple.setWeight(apple.getWeight()-1);
        return "the appleis delicious";
    }
}
let adam = new Human("khoi","nam",70);