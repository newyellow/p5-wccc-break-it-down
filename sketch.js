
let demoHuman;

async function setup() {

  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  background(0, 0, 6);

  let settingA = {
    hips: 30,
    spine: -10,
    chest: 0,
    neck: -20,
    head: 0,

    leftUpArm: -60,
    leftForeArm: -30,
    leftHand: -0,

    rightUpArm: 70,
    rightForeArm: -60,
    rightHand: 60,

    leftUpLeg: -30,
    leftForeLeg: 120,
    leftFoot: 0,

    rightUpLeg: 10,
    rightForeLeg: 20,
    rightFoot: 60
  };

  let settingB = {
    hips: -30,
    spine: 20,
    chest: 0,
    neck: 30,
    head: 0,

    leftUpArm: -60,
    leftForeArm: -50,
    leftHand: -30,

    rightUpArm: 60,
    rightForeArm: -50,
    rightHand: 60,

    leftUpLeg: -40,
    leftForeLeg: 60,
    leftFoot: 30,

    rightUpLeg: -20,
    rightForeLeg: 10,
    rightFoot: 40
  }

  let settingC = {
    hips: 60,
    spine: 20,
    chest: 0,
    neck: 30,
    head: -60,

    leftUpArm: -140,
    leftForeArm: -60,
    leftHand: -30,

    rightUpArm: 30,
    rightForeArm: -30,
    rightHand: -30,

    leftUpLeg: 40,
    leftForeLeg: 30,
    leftFoot: 80,

    rightUpLeg: -60,
    rightForeLeg: 140,
    rightFoot: -60
  }

  // demoHuman = new Human(windowWidth / 2, windowHeight / 2, settingC, 0.6);
  // demoHuman.drawAll();

  let posA = {
    x: 0.1 * width,
    y: 400
  };

  let posB = {
    x: 0.4 * width,
    y: 400
  };

  let posC = {
    x: 0.5 * width,
    y: 400
  };

  let posD = {
    x: 0.9 * width,
    y: 400
  };
  drawLerpBody(posA, posB, settingA, settingC, 8)

  drawLerpBody(posC, posD, settingC, settingB, 8)
}

async function draw() {

}

function drawLerpBody (_fromPos, _toPos, _fromData, _toData, _count)
{
  for(let i=0; i<_count; i++)
  {
    let t = i / (_count - 1);
    let nowPos = lerpData(_fromPos, _toPos, t);
    let nowData = lerpData(_fromData, _toData, t);

    console.log(nowPos);
    let nowHuman = new Human(nowPos.x, nowPos.y, nowData, 0.6);
    nowHuman.drawAll();
  }
}

function lerpData(_from, _to, _t) {
  let result = {};
  for (let key in _from) {
    result[key] = lerp(_from[key], _to[key], _t);
  }
  return result;
}


// async sleep
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

