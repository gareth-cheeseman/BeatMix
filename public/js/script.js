// Drum Arrays
let kicks = Array(16).fill(false);
let snares = Array(16).fill(false);
let hiHats = Array(16).fill(false);
let rideCymbals = Array(16).fill(false);

const toggleDrum = (arrayName, index) => {
  if (typeof index !== 'number' || index < 0 || index > 15) {
    return;
  }

  const flipArrayAt = (array, index) => {
    array[index] === false ? (array[index] = true) : (array[index] = false);
  };

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
  if (!arrayName) {
    return;
  }

  switch (arrayName) {
    case 'kicks':
      kicks = Array(16).fill(false);
      break;
    case 'snares':
      snares = Array(16).fill(false);
      break;
    case 'hiHats':
      hiHats = Array(16).fill(false);
      break;
    case 'rideCymbals':
      rideCymbals = Array(16).fill(false);
      break;
    default:
      return;
      break;
  }
};
