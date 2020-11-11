class chain {
    constructor(body1, body2){
    // create the coptions - bodyA, bodyB, stiffness, length    

    var options = {bodyA : body1, 
        bodyB : body2,
        stiffness: .04,
        length: 10,
}

//create the contraint by giving options
this.chain = Matter.Constraint.create(options)
World.add(world,chain)

    }

    display()
    {
        //line is between two points
 //bird position - x1, y1
 //log_2 position - x2,y2
 var firstpos = this.chain.bodyA.position;
 var Secpos = this.chain.bodyB.position;
 line(Secpos.x, Secpos.y, firstpos.x, firstpos.y)

    }
}