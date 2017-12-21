export const vr = {
  score : 0,
  count : 0,
  enteredValue : '',
  wordForTranslation : '',
  translatedWords : '',
  selectedKeyArr : [],
  selectedValueArr : [],
  isGame : false,
  isEnemyAppear : false,
  isEnemyWalk : false,
  isEnemyDead : false,
  transfer : false,
  frameNumber : 0,
  enemyX : 0
}

export const vrGetter = {
  getCongratulation : function () {
    if (vr.score === vr.count) {
      return 'You are our savior! Not one hell of the hell did not penetrate our castle!';
    }else if (vr.score/vr.count < 1 && vr.score/vr.count >= 0.8) {
      return `${vr.count - vr.score} out of ${vr.count} creatures of darkness still managed to get into the castle. Your efforts were not in vain, my dear friend, most people are alive thanks to you.`;
    }else if (vr.score/vr.count < 0.8 && vr.score/vr.count >= 0.3) {
      return `${vr.count - vr.score} out of ${vr.count} creatures of darkness still managed to get into the castle. Few have managed to escape, you need to improve your skills. Do it faster, please, otherwise the next time we can not be saved.`;
    }else if (vr.score/vr.count < 0.3) {
      return 'Nobody can reproach you for your failure...';
    }
  }
}
