class Wall{
    constructor(x, y, width, height) {
        var options = {
            isStatic:true
        }
        this.body = Bodies.rectangle(x, y, 10, 100, options);
        this.width = 10;
        this.height = 100;
        
        World.add(world, this.body);
      }
      display(){
        
       var pos = this.body.position
       rect(pos.x,pos.y,this.width,this.height)
     
      }
}