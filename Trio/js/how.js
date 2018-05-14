function How(){
    this.teach();
}

How.prototype.teach = function(){
    this.arr = [
        new Draw("sqr","red",2,1),
        new Draw("sqr","yellowgreen",2,1),
        new Draw("sqr","blue",2,1),

        new Draw("sqr","blue",0,1),
        new Draw("sqr","blue",1,1),
        new Draw("sqr","blue",2,1),

        new Draw("sqr","red",2,1),
        new Draw("sqr","red",2,2),
        new Draw("sqr","red",2,3),

        new Draw("sqr","yellowgreen",0,1),
        new Draw("sqr","yellowgreen",1,2),
        new Draw("sqr","yellowgreen",2,3),

        new Draw("cir","red",2,1),
        new Draw("cir","yellowgreen",2,2),
        new Draw("cir","blue",2,3),

        new Draw("sqr","red",2,1),
        new Draw("cir","yellowgreen",2,1),
        new Draw("tri","blue",2,1),

        new Draw("sqr","red",0,1),
        new Draw("cir","yellowgreen",1,1),
        new Draw("tri","blue",2,1),

        new Draw("sqr","red",2,1),
        new Draw("cir","yellowgreen",2,2),
        new Draw("tri","blue",2,3),

        new Draw("sqr","red",0,1),
        new Draw("cir","yellowgreen",1,2),
        new Draw("tri","blue",2,3),

    ]
    this.addEle();
}
How.prototype.addEle = function(){
  for(var i = 0;i < this.arr.length;i++){
    document.getElementById('trio').append(this.arr[i].canvas);
  }
}