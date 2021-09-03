class Ground{
    constructor(x,y,w,h){
        
        var opt={
            isStatic:true 
        }
        this.body= Bodies.rectangle(x,y,w,h,opt)
        this.w= w
        this.h= h 
        World.add(world,this.body)
    }
    show(){
        push()
        var pos= this.body.position
        fill("yellow")
        rect(pos.x,pos.y,this.w,this.h)
        pop()
    }
}