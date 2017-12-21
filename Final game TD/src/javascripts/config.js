 export const config ={
  language : 'English',
  partOfSpeech : 'Nouns',
  gameSpeed : 'Easy',
  numberOfWords : '10 in row',

  getLanguage: function () {
    return config.language;
  },
  getDictionaryName: function () {
    return config.getLanguage() + config.getPartOfSpeech();
  },
  getPartOfSpeech: function () {
    return config.partOfSpeech;
  },
  getGameSpeed: function () {
    switch (config.gameSpeed) {
      case 'Easy':
        return 1;
        break;
      case 'Medium':
      return 1.5;
        break;
      case 'Hard':
        return 2;
        break;
    }
  },
  getNumberOfWords: function () {
    switch (config.numberOfWords) {
      case '10 in row':
        return 10;
        break;
      case '20 in row':
      return 20;
        break;
      case 'You can\'t survive':
        return 50;
        break;
    }
  }
}
