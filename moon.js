penColour('#ffff00');
for (var count2 = 0; count2 < 3; count2++) {
  for (var count = 0; count < 5; count++) {
    moveForward(50);
    turnRight(144);
  }
  penUp();
  moveForward(150);
  penDown();
  turnRight(120);
}
penUp();
for (var count3 = 0; count3 < 3; count3++) {
  turnRight(90);
}
moveForward(100);
penDown();
penColour('#ffffff');
for (var count4 = 0; count4 < 360; count4++) {
  moveForward(50);
  turnRight(90);
  turnRight(90);
  moveForward(50);
  turnRight(90);
  turnRight(90);
  turnRight(1);
}
turnRight(120);
moveForward(20);
penColour('#ffffff');
for (var count5 = 0; count5 < 360; count5++) {
  moveForward(50);
  turnRight(90);
  turnRight(90);
  moveForward(50);
  turnRight(90);
  turnRight(90);
  turnRight(1);
}

