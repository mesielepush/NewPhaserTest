const machineRoom = (chickens) => {
  if (chickens === true) {
    return true;
  }
  return false;
};
const chickenRoom = (chickenSwitch) => {
  if (chickenSwitch === true) {
    return true;
  }
  return false;
};

const Room1DoorOpen = (chickenSwitch) => {
  const firstStep = chickenRoom(chickenSwitch);
  const secondStep = machineRoom(firstStep);
  return secondStep;
};

module.exports = {
  machineRoom,
  chickenRoom,
  Room1DoorOpen,

};