export default function Word (context, word, speed){
    this.context = context;
    this.context.font='50px Risque';
    this.context.fillStyle = 'red';
    this.word = word;
    this.speed = speed;
    this.X = 10;
    this.Y = 220;
}

Word.prototype.update = function(newWord, appear, walk){
  if (appear) {
    this.X = 10;
    this.word = newWord;
  }else if (walk) {
    this.X += this.speed;

  }
}

Word.prototype.render = function(){
    this.context.fillText(this.word,this.X, this.Y);
}
