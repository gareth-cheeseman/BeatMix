// Drum Arrays
let kicks = Array(16).fill(false);
let snares = Array(16).fill(false);
let hiHats = Array(16).fill(false);
let rideCymbals = Array(16).fill(false);

const toggleDrum = (arrayName, index) => {
  if (typeof index !== 'number' || index < 0 || index > 15) {
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
