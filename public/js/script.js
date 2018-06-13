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
  const array = getArrayCalled(arrayName);
  if (array) {
    array.fill(false);
  }
};

const flipItemsInArray = array => {
  array.forEach((part, index) => {
    flipArrayAt(array, index);
  });
};

const invert = arrayName => {
  const array = getArrayCalled(arrayName);
  if (array) {
    flipItemsInArray(array);
  }
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

const getNeighborPads = (x, y, size) => {
  if (!isWithinGrid(x, size) || !isWithinGrid(y, size)) {
    return [];
  }
  const array = [];
  const left = [x - 1, y];
  const right = [x + 1, y];
  const top = [x, y + 1];
  const bottom = [x, y - 1];
  debugger;
  addToNeighorArray(left, array, size);
  addToNeighorArray(right, array, size);
  addToNeighorArray(top, array, size);
  addToNeighorArray(bottom, array, size);

  return array;
};

const isWithinGrid = (x, size) => {
  return 0 < x && x <= size;
};

const addToNeighorArray = (coordinates, array, size) => {
  if (coordinates.every(coordinate => isWithinGrid(coordinate, size))) {
    array.push(coordinates);
  }
  return array;
};
