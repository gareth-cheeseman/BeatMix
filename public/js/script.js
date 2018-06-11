// Drum Arrays
let kicks = [].fill(false, 0, 16);
let snares = [].fill(false, 0, 16);
let hiHats = [].fill(false, 0, 16);
let rideCymbals = [].fill(false, 0, 16);

const toggleDrum = (arrayName, index) => {
  if (typeof index !== number || index > 15) {
    return;
  }

  switch (arrayName) {
    case 'kicks':
      kicks[index] === false ? (kicks[index] = true) : (kicks[index] = false);
      break;
    case 'snares':
      snares[index] === false
        ? (snares[index] = true)
        : (snares[index] = false);
      break;
    case 'hiHats':
      hiHats[index] === false
        ? (hiHats[index] = true)
        : (hiHats[index] = false);
      break;
    case 'rideCymbals':
      rideCymbals[index] === false
        ? (rideCymbals[index] = true)
        : (rideCymbals[index] = false);
      break;
    default:
      return;
      break;
  }
};
