class Chain {
      constructor(bodyA,bodyB){
        var options = {
            bodyA:bird.body,
            bodyB:log6.body,
            stiffness:0.04
        }
     this.chain = Constraint.create(options);
        World.add(world,this.chain);   
      }

      display(){
          var posA = this.chain.bodyA.position;
          var posB = this.chain.bodyB.position;
          strokeWeight(5);
          line (posA.x,posA.y,posB.x,posB.y);
      }
}