function Game(){
    this.show();
    console.log(this.arr)
}

Game.prototype.render = function(){
    var sArr = ["sqr","cir","tri"];//形状
    var colors = ["red","green","blue"];//颜色
    this.s = sArr[~~(Math.random()*sArr.length)];
    this.c = colors[~~(Math.random()*colors.length)];
    this.f = ~~(Math.random()*3);//填充
    this.n = ~~(Math.random()*3) + 1;//数量
    this.ele = new Draw(this.s,this.c,this.f,this.n);
}
Game.prototype.update = function(){
    this.arrEle = [];
    for(var i = 0;i < 12;i++){
        this.render();
        this.arrEle.push(this.ele)
    }
    this.arr = this.arrEle;

}

Game.prototype.show = function(){
    this.update();
}