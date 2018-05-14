function Tri(d){
    this.d = d;
}
Tri.prototype.render = function(){
    if(this.d.n == 1){
        this.d.ctx.save();
        this.d.ctx.beginPath();
        this.d.ctx.moveTo(150,20);
        this.d.ctx.lineTo(190,100);
        this.d.ctx.lineTo(110,100);
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
            this.d.ctx.moveTo(75+i*150,20);
            this.d.ctx.lineTo(115+i*150,100);
            this.d.ctx.lineTo(35+i*150,100);
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
            this.d.ctx.moveTo(50+i*100,20);
            this.d.ctx.lineTo(90+i*100,100);
            this.d.ctx.lineTo(10+i*100,100);
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