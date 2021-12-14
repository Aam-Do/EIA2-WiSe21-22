namespace FarmHeritage {
    export class Duck extends Animal {

        types: string[] = ["Northern Pintail", "King Eider", "Barrow's Goldeneye", "Ruddy Duck", "Velvet Scoter"];

        constructor(_name: string) {
            super();
            this.name = _name;
            this.species = "duck";
            this.type = this.types[Math.round(Math.random() * 4)];
            this.food = "seeds";
            this.sound = "quack";
            this.hunger = 3;
            this.lyrics = `Old MacDonald had a farm, E-I-A-I-O, <br> And on his farm he had a ${this.species}, E-I-A-I-O, <br> With a ${this.sound}-${this.sound} here and a ${this.sound}-${this.sound} there, <br> Here a ${this.sound}, <br> there a ${this.sound}, <br> everywhere ${this.sound}-${this.sound}, <br> Old MacDonald had a farm, E-I-A-I-O.`;
            this.special = "bit the neighbor.";
            this.isFed = true;
        }
        
    }
}