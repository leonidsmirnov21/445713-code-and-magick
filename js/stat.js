'use strict';

var CLOUD_TL_X = 150;
var CLOUD_TL_Y = 10;
var CLOUD_TR_X = 530;
var CLOUD_TR_Y = 10;
var CLOUD_BR_X = 490;
var CLOUD_BR_Y = 280;
var CLOUD_BL_X = 110;
var CLOUD_BL_Y = 280;

var BAR_HEIGHT = 150;
var BAR_WIDTH = 40;
var GAP = 50;
var GAP_VERTICAL = 90;
var GAP_VERTICAL_NAMES = 260;
var GAP_VERTICAL_STAT = 80;

var getMaxElement = function (arr) {
  var maxElement = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {
  ctx.beginPath();
  ctx.moveTo(CLOUD_TL_X + 10, CLOUD_TL_Y + 10);
  ctx.lineTo(CLOUD_TR_X + 10, CLOUD_TR_Y + 10);
  ctx.lineTo(CLOUD_BR_X + 10, CLOUD_BR_Y + 10);
  ctx.lineTo(CLOUD_BL_X + 10, CLOUD_BL_Y + 10);
  ctx.lineTo(CLOUD_TL_X + 10, CLOUD_TL_Y + 10);
  ctx.closePath();
  ctx.strokeStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.stroke();
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(CLOUD_TL_X, CLOUD_TL_Y);
  ctx.lineTo(CLOUD_TR_X, CLOUD_TR_Y);
  ctx.lineTo(CLOUD_BR_X, CLOUD_BR_Y);
  ctx.lineTo(CLOUD_BL_X, CLOUD_BL_Y);
  ctx.lineTo(CLOUD_TL_X, CLOUD_TL_Y);
  ctx.closePath();
  ctx.strokeStyle = 'white';
  ctx.stroke();
  ctx.fillStyle = 'white';
  ctx.fill();

  ctx.font = '16px PT Mono';
  ctx.fillStyle = '#000';
  ctx.fillText('Ура вы победили!', CLOUD_TL_X + 10, CLOUD_TL_Y + 20);
  ctx.fillText('Список результатов:', CLOUD_TL_X + 10, CLOUD_TL_Y + 40);

  for (var i = 0; i < names.length; i++) {
    ctx.fillStyle = '#000';
    ctx.fillText(Math.round(times[i]), CLOUD_BL_X + GAP + BAR_WIDTH * i + GAP * i, GAP_VERTICAL_STAT);

    var maxTime = getMaxElement(times);

    ctx.fillStyle = '#000';
    ctx.fillText(names[i], CLOUD_BL_X + GAP + BAR_WIDTH * i + GAP * i, GAP_VERTICAL_NAMES);
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'rgba(0, 0, 255, ' + Math.random() + ')';
    }
    ctx.fillRect(CLOUD_BL_X + GAP + BAR_WIDTH * i + GAP * i, GAP_VERTICAL + (BAR_HEIGHT - (BAR_HEIGHT * times[i] / maxTime)), BAR_WIDTH, (BAR_HEIGHT * times[i] / maxTime));
  }
};
