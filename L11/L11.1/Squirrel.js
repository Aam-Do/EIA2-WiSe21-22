"use strict";
var AutumnNuts;
(function (AutumnNuts) {
    class Squirrel extends AutumnNuts.Moveable {
        constructor() {
            super(new AutumnNuts.Vector(AutumnNuts.calculateRandom(AutumnNuts.crc2.canvas.width * 0.15, AutumnNuts.crc2.canvas.width * 0.75), AutumnNuts.calculateRandom(AutumnNuts.crc2.canvas.height - 20, AutumnNuts.crc2.canvas.height - 100)));
            this.velocity.random(20, 80);
            this.size = AutumnNuts.calculateRandom(0.9, 1.2);
            this.isEating = false;
        }
        move(_timeslice) {
            super.move(_timeslice);
            if (this.position.x > AutumnNuts.crc2.canvas.width * 0.75) {
                this.velocity.random(50, 120, Math.PI / 2, (3 * Math.PI) / 2);
            }
            else if (this.position.y > AutumnNuts.crc2.canvas.height - 20) {
                this.velocity.random(50, 120, Math.PI, 2 * Math.PI);
            }
            else if (this.position.x < AutumnNuts.crc2.canvas.width * 0.15) {
                this.velocity.random(50, 120, 0, Math.PI / 2);
            }
            else if (this.position.y < AutumnNuts.crc2.canvas.height - 100) {
                this.velocity.random(50, 120, 0, Math.PI);
            }
            if (this.velocity.length == 0) {
                this.facing = this.facing;
            }
            else if (this.velocity.x > 0) {
                this.facing = "right";
            }
            else {
                this.facing = "left";
            }
            if (this.target) {
                if (this.velocity.length * _timeslice > new AutumnNuts.Vector(this.target.position.x - this.position.x, this.target.position.y - this.position.y).length) {
                    this.velocity.set(0, 0);
                    this.eat();
                }
            }
        }
        draw() {
            AutumnNuts.crc2.save();
            AutumnNuts.crc2.translate(this.position.x, this.position.y);
            let scale = (0.1 * this.size) + (this.position.y - 600) / 1000;
            AutumnNuts.crc2.scale(scale, scale);
            if (this.facing == "right")
                AutumnNuts.crc2.scale(-1, 1);
            AutumnNuts.drawSquirrel();
            AutumnNuts.crc2.restore();
        }
        search() {
            if (this.isEating == false) {
                let nut = undefined;
                let distance = Infinity;
                for (let thing of AutumnNuts.actives) {
                    if (thing instanceof AutumnNuts.Nut == true) {
                        let thisNut = thing;
                        let thisDistance = new AutumnNuts.Vector(this.position.x - thisNut.position.x, this.position.y - thisNut.position.y).length;
                        if (thisDistance < distance) {
                            distance = thisDistance;
                            nut = thisNut;
                        }
                    }
                }
                if (nut) {
                    if (nut != this.target) {
                        let distance = new AutumnNuts.Vector(nut.position.x - this.position.x, nut.position.y - this.position.y);
                        this.velocity.set(distance.x, distance.y);
                        this.velocity.scale((100 / distance.length) * AutumnNuts.calculateRandom(1, 3));
                        this.target = nut;
                    }
                }
                else {
                    this.velocity.random(20, 80);
                }
            }
        }
        eat() {
            this.isEating = true;
            let nutEvent = new CustomEvent("eat", { bubbles: true, detail: { nut: this.target } });
            AutumnNuts.crc2.canvas.dispatchEvent(nutEvent);
            this.target = undefined;
            setTimeout(this.swallow.bind(this), 3000);
        }
        swallow() {
            console.log("swallowed!");
            this.isEating = false;
            this.search();
        }
    }
    AutumnNuts.Squirrel = Squirrel;
})(AutumnNuts || (AutumnNuts = {}));
//# sourceMappingURL=Squirrel.js.map