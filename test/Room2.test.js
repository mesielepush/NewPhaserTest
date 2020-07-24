const {
  room2CatRoom,
  room2DoorOpen,
} = require('./room2Test');

test('It checks that the cat is On with the switch', () => {
  const catSwitch = true;
  expect(room2CatRoom(catSwitch)).toBe(true);
});
test('It checks that the cat is NOT on without the switch', () => {
  const catSwitch = false;
  expect(room2CatRoom(catSwitch)).toBe(false);
});
test('It checks that Room2 does Opens with the cat animation', () => {
  const catSwitch = true;
  expect(room2DoorOpen(room2CatRoom(catSwitch))).toBe(true);
});

test('It checks that Room2 does not Opens without the cat animation', () => {
  const catSwitch = false;
  expect(room2DoorOpen(room2CatRoom(catSwitch))).toBe(false);
});