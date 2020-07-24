const room2CatRoom = (catSwitch) => {
  if (catSwitch === true) {
    return true;
  }
  return false;
};
const room2DoorOpen = (catAnimation) => {
  if (catAnimation === true) {
    return true;
  }
  return false;
};

module.exports = {
  room2CatRoom,
  room2DoorOpen,

};