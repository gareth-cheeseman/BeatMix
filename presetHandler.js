// Use this presets array inside your presetHandler
const presets = require('./presets');

// Complete this function:
const presetHandler = (verb, index, newPresetArray) => {
  let array = [];

  if (!isValid(verb)) {
    array.push(400);
  }

  if (typeof index !== 'number' || index < 0 || index > 3) {
    array.push(404);
  }

  if (verb === 'GET') {
    array.push(200, presets[index]);
  } else if (verb === 'PUT') {
    presets[index] = newPresetArray;
    array.push(200, presets[index]);
  } else {
    array.push(400);
  }

  return array;
};

const isValid = verb => {
  return verb === 'GET' || verb === 'PUT';
};

// Leave this line so that your presetHandler function can be used elsewhere:
module.exports = presetHandler;
