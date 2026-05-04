'use strict';
const isAfternoon = require('./isAfternoon');
const isMorning = require('./isMorning');
const isNight = require('./isNight');

function greeting (time){
	if (isMorning(time)) return 'Good Morning!';
  if (isAfternoon(time)) return 'Good Afternoon!';
  if (isNight(time)) return 'Good Night!';
};

module.exports = greeting;
