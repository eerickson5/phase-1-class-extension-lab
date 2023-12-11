// Your code here

class Polygon{
    constructor(sides){
        this.sides = sides;
    }

    get countSides(){
        return this.sides.length
    }

    get perimeter(){
        return this.sides.reduce( (acc, side) => acc += side)
    }
}

class Triangle extends Polygon{
    get isValid(){
        if(this.sides.length === 3){
            const sortedSides = this.sides.sort((a,b) => a-b)
            return sortedSides[0] + sortedSides[1] > sortedSides[2]
        } else {
            return false;
        }
    }
}

class Square extends Polygon{
    get area() {
        return this.sides[0] ** 2
    }

    get isValid(){
        return this.sides.filter(side => side === Math.sqrt(this.area)).length === 4
    }
}