// Drum Arrays
let kicks = Array(16).fill(false);
let snares = Array(16).fill(false);
let hiHats = Array(16).fill(false);
let rideCymbals = Array(16).fill(false);

const flipArrayAt = (array, index) => {
  array[index] === false ? (array[index] = true) : (array[index] = false);
};

const toggleDrum = (arrayName, index) => {
  if (typeof index !== 'number' || index < 0 || index > 15) {
    return;
  }

  flipArrayAt(getArrayCalled(arrayName), index);
};

const clear = arrayName => {
  if (isValid(arrayName)) {
    getArrayCalled(arrayName).fill(false);
  }
};

const flipItemsInArray = array => {
  array.forEach((part, index) => {
    flipArrayAt(array, index);
  });
};

const invert = arrayName => {
  flipItemsInArray(getArrayCalled(arrayName));
};

const getArrayCalled = arrayName => {
  switch (arrayName) {
    case 'kicks':
      return kicks;
      break;
    case 'snares':
      return snares;
      break;
    case 'hiHats':
      return hiHats;
      break;
    case 'rideCymbals':
      return rideCymbals;
      break;
    default:
      return;
      break;
  }
};

const isValid = input => {
  if (input) {
    return true;
  }
};
