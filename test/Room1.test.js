const {
  machineRoom,
  chickenRoom,
  Room1DoorOpen,
} = require('./room1Test');

test('It checks that chickens are true with pushing the switch', () => {
  const chickenSwitch = true;
  expect(chickenRoom(chickenSwitch)).toBe(true);
});
test('It checks that chickens are NOT true with out pushing the switch', () => {
  const chickenSwitch = false;
  expect(chickenRoom(chickenSwitch)).toBe(false);
});

test("It checks that Machine in room One it's on with chikens", () => {
  const chickens = true;
  expect(machineRoom(chickens)).toBe(true);
});

test("It checks that Machine in room One it's NOT on without the chikens", () => {
  const chickens = false;
  expect(machineRoom(chickens)).toBe(false);
});

test('It checks that the room One door opens with the chinkens on the machine', () => {
  const chickenSwitch = true;
  expect(Room1DoorOpen(chickenSwitch)).toBe(true);
});
test('It checks that the room One door does NOT opens without the chinkens on the machine', () => {
  const chickenSwitch = false;
  expect(Room1DoorOpen(chickenSwitch)).toBe(false);
});
