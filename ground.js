class Ground{
    constructor(){
        var option={
            isStatic:true
        }
        this.body=Bodies.rectangle(400,600,900,20,option)
        World.add(world,this.body)
      
    }
    display(){
        var p
        p=this.body.position;
        rectMode(CENTER)
        fill('brown')
        rect(p.x,p.y,900,20)
    }
    
    }