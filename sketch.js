function setup() {
  createCanvas(800, 800);
  background(240);
  stroke(0, 80);
  noFill();

  let rings = 8;
  let sectors = 16;
  let maxR = width / 2 - 40;

  translate(width / 2, height / 2);

  for (let i = 1; i <= rings; i++) {
    let r = (i / rings) * maxR;
    ellipse(0, 0, r * 2);
  }

  for (let j = 0; j < sectors; j++) {
    let a = (TWO_PI / sectors) * j;
    line(0, 0, cos(a) * maxR, sin(a) * maxR);
  }
}
