penColour('#ffff00');
for (var count2 = 0; count2 < 5; count2++) {
  for (var count = 0; count < 5; count++) {
    moveForward(50);
    turnRight(144);
  }
  penUp();
  moveForward(150);
  penDown();
  turnRight(90);
}



