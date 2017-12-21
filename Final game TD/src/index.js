import './styles/main.scss';

import { config } from './javascripts/config.js';
import { vr, vrGetter } from './javascripts/varibles.js';
import { h } from './javascripts/helpers.js';
import Enemy from './javascripts/enemy.js';
import Sprite from './javascripts/sprite.js';
import Word from './javascripts/word.js';

import './images/nest.png';
import './images/zombie/walk/zombWalkSprite.png';
import './images/back2.png';
import './images/zombie/die/zombDie.png';
import './images/zombie/appear/zombAppearSprite.png';

// import './music/music_of_angels.mp3';

const selecSettings = h.findId('settings_menu');
selecSettings.addEventListener('click', e => {
  if (e.target.parentElement.nodeName === 'UL') {
    switch (e.target.parentElement.id) {
      case 'language':
        config.language = e.target.textContent;
        h.findId('button_language').innerHTML = `${e.target.textContent}`;
        break;
      case 'part_of_speech':
        config.partOfSpeech = e.target.textContent;
        h.findId('button_part_of_speech').innerHTML = `${e.target.textContent}`;
        break;
      case 'game_speed':
        config.gameSpeed = e.target.textContent;
        h.findId('button_game_speed').innerHTML = `${e.target.textContent}`;
        break;
      case 'number_of_words':
        config.numberOfWords = e.target.textContent;
        h.findId('button_number_of_words').innerHTML = `${e.target.textContent}`;
        break;
    }
  }
});

const start = h.findId('start_game');
start.addEventListener('click', e => {
  const elem = h.find('.description');
  elem.classList.add('hideDesc');
  setTimeout(x => elem.classList.toggle('hidden'), 900);
  setTimeout(x => elem.classList.toggle('hideDesc'), 1000);

  h.findId('button_language').classList.toggle('disabled');
  h.findId('button_part_of_speech').classList.toggle('disabled');
  h.findId('button_game_speed').classList.toggle('disabled');
  h.findId('button_number_of_words').classList.toggle('disabled');

  vr.count = 0;
  vr.score = 0;
  vr.numberOfWords = config.getNumberOfWords();
  vr.selectedKeyArr = h.getWords(config.getDictionaryName(), vr.numberOfWords);
  vr.selectedValueArr = h.getValues(h.getDictionary(config.getDictionaryName()), vr.selectedKeyArr);
  vr.wordForTranslation = vr.selectedKeyArr[0];
  vr.translatedWords = vr.selectedValueArr[0];
  h.findId('input_word').focus();
  loadContent();
  setTimeout(x => main(), 500);
});

const form = h.findId('formm');
form.addEventListener('submit', e => {
  e.preventDefault();
  vr.enteredValue = h.findId('input_word').value;
  h.findId('input_word').value = '';
  if (h.isTranslate(vr.enteredValue, vr.selectedValueArr[vr.count])) {
    vr.score++;
  }
  return false;
});


//------------canvas------------
let requestAnimFrame = (function() {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function(callback) {
            window.setTimeout(callback, 1000 / 60);
        };
})();

let lastTime = Date.now();
let gameTime = 0;
let backgroundImg, word, castle, zombie, zombieAppear, zombieWalk, zombieDie;
// let music = new Audio('./music/music_of_angels.mp3');

let canvas = h.findId('canvas');
let ctx = canvas.getContext("2d");

canvas.width = 970;
canvas.height = 480;

function renderAll() {
    ctx.clearRect(0, 0, 970, 480);
    ctx.drawImage(backgroundImg,0,0);
    vr.frameNumber = zombie.render();
    word.render();
    ctx.drawImage(castle,0,0,305,250,700,100,389,307);
}

function updateAll(diff) {
    zombie.update(diff, vr.isEnemyDead);
    word.update(vr.selectedKeyArr[vr.count], vr.isEnemyAppear, vr.isEnemyWalk);
}

//main loop
function main() {
    let now = Date.now();
    let diff = (now - lastTime) / 1000;

    if (vr.frameNumber === 7 && vr.isEnemyDead) {
      zombie = zombieAppear;
      vr.isEnemyAppear = true;
      vr.isEnemyDead = false;
      vr.transfer = true;
    } else if (vr.isEnemyDead) {
      zombie = zombieDie;
      setTimeout(x => vr.transfer = false, 100);
    }

    if (vr.frameNumber === 10 && vr.isEnemyAppear) {
      zombie = zombieWalk;
      vr.isEnemyAppear = false;
      vr.isEnemyWalk = true;
      vr.transfer = true;
    } else if (vr.isEnemyAppear) {
      zombie = zombieAppear;
      setTimeout(x => vr.transfer = false, 100);
    }

    if(zombie.position[0] > 750){
      vr.count++;
      vr.isEnemyAppear = true;
      vr.isEnemyWalk = false;
      vr.transfer = true;
    }else if (h.isTranslate(vr.enteredValue, vr.selectedValueArr[vr.count])) {
      vr.count++;
      vr.isEnemyDead = true;
      vr.isEnemyWalk = false;
      vr.transfer = true;
      vr.enemyX -= 92;
    }


    if (vr.count === config.getNumberOfWords()) {
      h.findId('descText').innerHTML = `${vrGetter.getCongratulation()}`;
      const elem = h.find('.description');
      elem.classList.toggle('appearDesc');
      elem.classList.toggle('hidden');
      setTimeout(x => elem.classList.toggle('appearDesc'), 1000);

      h.findId('button_language').classList.toggle('disabled');
      h.findId('button_part_of_speech').classList.toggle('disabled');
      h.findId('button_game_speed').classList.toggle('disabled');
      h.findId('button_number_of_words').classList.toggle('disabled');
    }

    updateAll(diff);
    renderAll();
    lastTime = now;
    gameTime += diff;
    requestAnimFrame(main);
}

function loadContent() {
    backgroundImg = new Image();
    backgroundImg.src = 'images/back2.png';
    castle = new Image();
    castle.src = 'images/nest.png';

    const zombAppearImg = new Image();
    zombAppearImg.src = 'images/zombAppearSprite.png';
    zombieAppear = new Enemy(new Sprite(ctx, 300, 315,zombAppearImg,7, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 11), [0,230],0, 11);
    //
    const zombWalkImg = new Image();
    zombWalkImg.src = 'images/zombWalkSprite.png';
    zombieWalk = new Enemy(new Sprite(ctx, 300, 315, zombWalkImg, 10, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 10), [0, 230], config.getGameSpeed(), 10);

    const zombDieImg = new Image();
    zombDieImg.src = 'images/zombDie.png';
    zombieDie = new Enemy(new Sprite(ctx, 500, 315,zombDieImg,7, [0, 1, 2, 3, 4, 5, 6, 7], 8), [0,230],0, 8);

    zombie = zombieAppear;
    vr.isEnemyAppear = true;
    // music.play();

    word = new Word(ctx, vr.wordForTranslation, config.getGameSpeed());
}
