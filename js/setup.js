'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SECOND_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');
userDialog.querySelector('.setup-similar').classList.remove('hidden');

var generateRandIndex = function (min, max) {
  var rand = min - 0.5 + Math.random() * (max - min + 1);
  rand = Math.round(rand);
  return rand;
};

var generateName = function () {
  return WIZARD_NAMES[generateRandIndex(0, WIZARD_NAMES.length - 1)] + ' ' + WIZARD_SECOND_NAMES[generateRandIndex(0, WIZARD_SECOND_NAMES.length - 1)];
};

var createWizards = function (quantity) {
  var people = [];
  var obj = {};

  for (var i = 0; i < quantity; i++) {
    obj = {};
    obj.name = generateName();
    obj.coatColor = COAT_COLORS[generateRandIndex(0, COAT_COLORS.length - 1)];
    obj.eyesColor = EYES_COLORS[generateRandIndex(0, EYES_COLORS.length - 1)];
    people.push(obj);
  }
  return people;
};

var wizards = createWizards(4);

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var renderWizard = function () {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);
