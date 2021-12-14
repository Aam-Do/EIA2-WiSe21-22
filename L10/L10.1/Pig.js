"use strict";
var FarmHeritage;
(function (FarmHeritage) {
    class Pig extends FarmHeritage.Animal {
        constructor(_name) {
            super();
            this.types = ["Tamworth", "Hereford", "Hampshire", "Duroc", "Angeln Saddleback"];
            this.name = _name;
            this.species = "pig";
            this.type = this.types[Math.round(Math.random() * 4)];
            this.food = "carrots";
            this.sound = "oink";
            this.hunger = 9;
            this.lyrics = `Old MacDonald had a farm, E-I-A-I-O, <br> And on his farm he had a ${this.species}, E-I-A-I-O, <br> With a ${this.sound}-${this.sound} here and a ${this.sound}-${this.sound} there, <br> Here a ${this.sound}, <br> there a ${this.sound}, <br> everywhere ${this.sound}-${this.sound}, <br> Old MacDonald had a farm, E-I-A-I-O.`;
            this.special = "took a nice mudbath.";
            this.isFed = true;
        }
    }
    FarmHeritage.Pig = Pig;
})(FarmHeritage || (FarmHeritage = {}));
//# sourceMappingURL=Pig.js.map