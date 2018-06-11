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

  switch (arrayName) {
    case 'kicks':
      flipArrayAt(kicks, index);
      break;
    case 'snares':
      flipArrayAt(snares, index);
      break;
    case 'hiHats':
      flipArrayAt(hiHats, index);
      break;
    case 'rideCymbals':
      flipArrayAt(rideCymbals, index);
      break;
    default:
      return;
      break;
  }
};

const clear = arrayName => {
  selectArray(arrayName, setArrayAllToFalse);
};

const setArrayAllToFalse = array => {
  array.forEach((part, index) => {
    array[index] = false;
  });
};

const flipItemsInArray = array => {
  array.forEach((part, index) => {
    flipArrayAt(array, index);
  });
};

const invert = arrayName => {
  selectArray(arrayName, flipItemsInArray);
};

const selectArray = (arrayName, aFunction) => {
  switch (arrayName) {
    case 'kicks':
      aFunction(kicks);
      break;
    case 'snares':
      aFunction(snares);
      break;
    case 'hiHats':
      aFunction(hiHats);
      break;
    case 'rideCymbals':
      aFunction(rideCymbals);
      break;
    default:
      return;
      break;
  }
};
