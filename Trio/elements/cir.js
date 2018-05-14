function Cir(d){
    this.d = d;
}
Cir.prototype.render = function(){
    if(this.d.n == 1){
        this.d.ctx.save();
        this.d.ctx.beginPath();
        this.d.ctx.arc(150,60,40,0,6.28,false);
        this.d.ctx.closePath();
        this.d.ctx.lineWidth = 3;
        this.d.ctx.strokeStyle = this.d.c;
        this.d.ctx.stroke();
        this.d.ctx.restore();
        this.d.fill();
        this.d.ctx.lineWidth = 3;
        this.d.ctx.strokeStyle = this.d.c;
        this.d.ctx.stroke();
    }else if(this.d.n == 2){
        for(var i = 0;i < 2;i++){
            this.d.ctx.save();
            this.d.ctx.beginPath();
            this.d.ctx.arc(75+150*i,60,40,0,6.28,false);
            this.d.ctx.closePath();
            this.d.ctx.lineWidth = 3;
            this.d.ctx.strokeStyle = this.d.c;
            this.d.ctx.stroke();
            this.d.ctx.restore();
            this.d.fill();
            this.d.ctx.lineWidth = 3;
            this.d.ctx.strokeStyle = this.d.c;
            this.d.ctx.stroke();
        }
    }else if(this.d.n == 3){
        for(var i = 0;i < 3;i++){
            this.d.ctx.save();
            this.d.ctx.beginPath();
            this.d.ctx.arc(50+100*i,60,40,0,6.28,false);
            this.d.ctx.closePath();
            this.d.ctx.lineWidth = 3;
            this.d.ctx.strokeStyle = this.d.c;
            this.d.ctx.stroke();
            this.d.ctx.restore();
            this.d.fill();
            this.d.ctx.lineWidth = 3;
            this.d.ctx.strokeStyle = this.d.c;
            this.d.ctx.stroke();
        }
    }
}