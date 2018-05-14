


function Game(){
    this.arrEle = [];
    this.update();
    this.arrClick = [];
}

Game.prototype.render = function(){
    var sArr = ["sqr","cir","tri"];
    var colors = ["red","yellowgreen","blue"];
    this.s = sArr[~~(Math.random()*sArr.length)];
    this.c = colors[~~(Math.random()*colors.length)];
    this.f = ~~(Math.random()*3);
    this.n = ~~(Math.random()*3) + 1;
};


Game.prototype.update =  function () {
    while (this.arrEle.length < 12){
            this.render();
        if( !this.compare()) {
            this.arrEle.push(new Draw(this.s,this.c,this.f,this.n));
        }
    }
    this.addEle();
};

Game.prototype.addEle = function(){
  for(var i = 0;i < this.arrEle.length;i++){
    document.getElementById('trio').append(this.arrEle[i].canvas)
  }
}
Game.prototype.compare = function ( ) {

    for ( var i = 0 ; i < this.arrEle.length ; i++ ) {
        if ( this.arrEle[i].s === this.s && this.arrEle[i].c === this.c && this.arrEle[i].f === this.f && this.arrEle[i].n === this.n ){
             return true;
        }
    }
    return false;
};
/*
Game.prototype.bindEvent = function(){
    for(var i = 0;i < this.arrEle.length;i++){
        var count = 0;
        var self = this;
        var arrClick = [];
        (function(a){
            self.arrEle[a].canvas.onclick = function(){
          if(this.getAttribute("select") !== "1"){
              this.style.background = "#ccc";
              arrClick.push(self.arrEle[a]);
              this.setAttribute("select","1");
              count++;
          }else{
              console.log(this)
              this.style.background = "";
              for(var j = 0;arrClick.length;j++){
                if(this === arrClick[j]){
                  arrClick.splice(j,1)
                }
              }
              count--;
          }
          console.log(arrClick)
          if(count >= 3){
            //console.log(arrClick)
            //判断消除事件；
            if(self.judge(arrClick)){
              //消除事件；
              self.remove(arrClick);
            }else{

              //判断不能消除，复原样式；
              setTimeout(function(){
                for(var i = 0;i < arrClick.length;i++){
                  arrClick[i].canvas.style.background = "";
                }
              }, 1000)
            }
              arrClick == [];
          }
       }
        })(i);

    }
}
*/


Game.prototype.bindEvent = function(obj){
  var ele = obj.canvas;
  var self = this;
          if(ele.getAttribute("select") !== "1"){
              ele.style.background = "#666";
              this.arrClick.push(obj);
              ele.setAttribute("select","1");
          }else{

              ele.style.background = "";
              for(var j = 0; j < this.arrClick.length;j++){
                if(obj === this.arrClick[j]){
                  this.arrClick.splice(j,1)
                }
              }
              ele.setAttribute("select","");
          }
          console.log(this.arrClick)
          if(this.arrClick.length >= 3){
            //console.log(arrClick)
            //判断消除事件；
            if(this.judge(this.arrClick)){
              //消除事件；
              this.remove(this.arrClick);
              this.arrClick = [];
            }else{
              console.log(this.arrClick.length)
              //判断不能消除，复原样式；
              setTimeout(function(){
                //console.log(self.arrClick,111111111)
                for(var i = 0;i < self.arrClick.length;i++){
                  //console.log(self.arrClick[i])
                  self.arrClick[i].canvas.setAttribute("select","");
                  self.arrClick[i].canvas.style.background = "";
                  //this.arrClick = [];
                }
                self.arrClick = [];
              }, 1000)
            }

              console.log(this.arrClick);
          }
       }


Game.prototype.judge = function(a){
    //console.log(a[0].s);
    var js = ((a[0].s == a[1].s && a[0].s == a[2].s && a[1].s == a[2].s) || (a[0].s != a[1].s && a[0].s != a[2].s && a[1].s != a[2].s)) ? 1 : 0;
    var jc = ((a[0].c == a[1].c && a[0].c == a[2].c && a[1].c == a[2].c) || (a[0].c != a[1].c && a[0].c != a[2].c && a[1].c != a[2].c)) ? 1 : 0;
    var jn = ((a[0].n == a[1].n && a[0].n == a[2].n && a[1].n == a[2].n) || (a[0].n != a[1].n && a[0].n != a[2].n && a[1].n != a[2].n)) ? 1 : 0;
    var jf = ((a[0].f == a[1].f && a[0].f == a[2].f && a[1].f == a[2].f) || (a[0].f != a[1].f && a[0].f != a[2].f && a[1].f != a[2].f)) ? 1 : 0;
    console.log(js,jc,jn,jf)
    var sum = js + jc + jn +jf;
    if(sum == 4){
        return true;
    }else{
        return false;
    }
}
Game.prototype.remove = function(arr){
    //console.log(b,this.arrEle);
    //var arrNew = [];
    for(var i = 0;i < this.arrEle.length;i++){
      for(var j = 0;j < arr.length;j++){
        console.log(i,j)
        if(this.arrEle[i] === arr[j]){
            this.spliceEle(i);
          }
        }
      }
    document.getElementById('trio').innerHTML = "";
    this.addEle();
}

Game.prototype.spliceEle = function(i){
              this.render();
            if( !this.compare()) {
              console.log('删除第',i)
              this.arrEle.splice(i,1,new Draw(this.s,this.c,this.f,this.n));
          } else {
            this.spliceEle(i);
          }

}