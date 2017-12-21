import { vr, vrGetter } from './varibles.js';

export default function Enemy(sprite, position, speed, num) {

    this.sprite = sprite;
    this.position = position;
    this.speed = speed;
    this.num = num;
}

Enemy.prototype.update = function (diff, dead, num) { //появление, бег, смерть,
  if (dead) {
    vr.enemyX += 0;
  }else if (vr.isEnemyAppear) {
    vr.enemyX = 0;
  }else if (!dead) {
    vr.enemyX += this.speed;
  }
  this.position[0] = vr.enemyX;
    this.sprite.update(diff);
}

Enemy.prototype.render = function () {
    this.sprite.context.save();
    this.sprite.context.translate(this.position[0], this.position[1]);
    let frameNumber = this.sprite.render(this.num);
    this.sprite.context.restore();

    return frameNumber;
}
