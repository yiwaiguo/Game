function Draw(s,c,f,n){
    this.s = s;//形状shape：sqr正方形,cir圆形,tri三角形;
    this.c = c;//颜色color：red,green,blue;
    this.f = f;//填充filling:0,1,2;
    this.n = n;//数量1，2,3；
    this.sqr = new Sqr(this);//调用正方形方法
    this.cir = new Cir(this);//调用圆形方法
    this.tri = new Tri(this);//调用三角形方法
    this.init();
    this.shape();
}

Draw.prototype.init = function(){
    this.canvas = document.createElement('canvas');
    var self = this;
    this.canvas.onclick = function(){
        game.bindEvent(self);
    }
    //document.getElementById('trio').append(this.canvas);
     this.ctx = this.canvas.getContext("2d");
     // for(var i = 0;i < 15;i++){
     //    for(var j = 0;j < 6;j++){
     //        this.ctx.beginPath();
     //        this.ctx.strokeRect(i*10,j*10,10,10);
     //        this.ctx.closePath();
     //        this.ctx.stroke();
     //    }
     // }
}
Draw.prototype.shape= function(){
    var self = this;
    switch(this.s){
        case "sqr":
        self.sqr.render();//渲染正方形
        break;
        case "cir":
        self.cir.render();//渲染圆形
        break;
        case "tri":
        self.tri.render();//渲染三角形
        break;
    }
}
Draw.prototype.fill = function(){
    if(this.f == 1){
        if(this.n == 1){
            this.ctx.beginPath();
            this.ctx.moveTo(150,20);
            this.ctx.lineTo(150,100);
            this.ctx.closePath();
            this.ctx.stroke();
        }else if(this.n == 2){
            for(var i = 0;i < 2;i++){
                this.ctx.beginPath();
                this.ctx.moveTo(75 + i*150,20);
                this.ctx.lineTo(75 + i*150,100);
                this.ctx.closePath();
                this.ctx.stroke();
            }

        }else if(this.n == 3){
            for(var i = 0;i < 3;i++){
                this.ctx.beginPath();
                this.ctx.moveTo(50+i*100,20);
                this.ctx.lineTo(50+i*100,100);
                this.ctx.closePath();
                this.ctx.stroke();
            }
        }
    }else if(this.f == 2){
        this.ctx.fillStyle = this.c;
        this.ctx.fill();
    }
}