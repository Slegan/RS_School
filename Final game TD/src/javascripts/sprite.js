import { vr, vrGetter } from './varibles.js';


export default function Sprite(context, width, height, image, speed, frames) {
    this.context = context;
    this.width = width;
    this.height = height;
    this.image = image;
    this.speed = speed;
    this.frames = frames;
    this.duration = 0;
};

Sprite.prototype.update = function (diff, transfer, num) {
  if (vr.transfer) {
    this.duration = 0;
  }else {
    this.duration += this.speed * diff;
  }
};

Sprite.prototype.render = function (num) {
  if (vr.transfer) {
    this.duration = 0;
  }
  let roundedDuration = Math.round(this.getDuration(num));
  let frame = this.frames[roundedDuration % num];
  let x = frame * this.width;
  let y = 0;

  this.context.drawImage(
      this.image,
      x,
      y,
      this.width,
      this.height,
      0,
      0,
      this.width*0.5,
      this.height*0.5
  );

  return frame;
};

Sprite.prototype.getDuration = function (num) {
  if (this.duration > num) {
    this.duration = 0;
    return this.duration;
  }else {
    return this.duration;
  }
}
