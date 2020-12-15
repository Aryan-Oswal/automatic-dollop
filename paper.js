class Paper {
    
    constructor(x,y,radius){
        var options = {
            isStatic: false,
            density: 100,
            mass: 150
	}
        this.body = Bodies.circle(x, y, radius, options)
        this.radius = radius
        this.image = loadImage('paper.png')
        World.add(world , this.body)
    }
    display() {
        push()
        strokeWeight(0)
        var pos = this.body.position
        imageMode(CENTER)
        
        translate(pos.x, pos.y)
        image(this.image , 0, 0 , this.radius * 3 , this.radius * 3)
        pop()
    }
}