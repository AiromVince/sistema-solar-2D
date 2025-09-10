let speedMultiplier = 1;
let targetMultiplier = 1;
let startDate = new Date('2023-08-01').getTime();
let lastUpdateTime = Date.now();
let originalStartDate = startDate; 


function mapSliderValue(value) {
  const values = {
    '-27': {
      speed: -9467280000000000,
      description: '300MY/S'
    },
    '-26': {
      speed: -1577880000000000,
      description: '50MY/S'
    },
    '-25': {
      speed: -315576000000000,
      description: '10MY/S'
    },
    '-24':{
      speed: -31536000000,
      description: '-1000Y/S'
    },
    '-23': {
      speed: -15768000000,
      description: '-500Y/S'
    },
    '-22': {
      speed: -3153600000,
      description: '-100Y/S'
    },
    '-21': {
      speed: -315360000,
      description: '-10Y/S'
    },
    '-20': {
      speed: -94608000,
      description: '-3Y/S'
    },
    '-19': {
      speed: -31536000,
      description: '-1Y/S'
    },
    '-18': {
      speed: -7776000,
      description: '-3W/S'
    },
    '-17': {
      speed: -2592000,
      description: '-1W/S'
    },
    '-16': {
      speed: -864000,
      description: '-10D/S'
    },
    '-15': {
      speed: -259200,
      description: '-3D/S'
    },
    '-14': {
      speed: -86400,
      description: '-1D/S'
    },
    '-13': {
      speed: -36000,
      description: '-10H/S'
    },
    '-12': {
      speed: -18000,
      description: '-5H/S'
    },
    '-11': {
      speed: -10800,
      description: '-3H/S'
    },
    '-10': {
      speed: -3600,
      description: '-1H/S'
    },
    '-9': {
      speed: -1800,
      description: '-30MIN/S'
    },
    '-8': {
      speed: -900,
      description: '-15MIN/S'
    },
    '-7': {
      speed: -600,
      description: '-10MIN/S'
    },
    '-6': {
      speed: -300,
      description: '-5MIN/S'
    },
    '-5': {
      speed: -180,
      description: '-3MIN/S'
    },
    '-4': {
      speed: -60,
      description: '-1MIN/S'
    },
    '-3': {
      speed: -30,
      description: '-30SEC/S'
    },
    '-2': {
      speed: -10,
      description: '-10SEC/S'
    },
    '-1': {
      speed: -1,
      description: '-real'
    },
    '0': {
      speed: 0,
      description: 'pause'
    },
    '1': {
      speed: 1,
      description: 'real'
    },
    '2': {
      speed: 10,
      description: '10SEC/S'
    },
    '3': {
      speed: 30,
      description: '30SEC/S'
    },
    '4': {
      speed: 60,
      description: '1MIN/S'
    },
    '5': {
      speed: 180,
      description: '3MIN/S'
    },
    '6': {
      speed: 300,
      description: '5MIN/S'
    },
    '7': {
      speed: 600,
      description: '10MIN/S'
    },
    '8': {
      speed: 900,
      description: '15MIN/S'
    },
    '9': {
      speed: 1800,
      description: '30MIN/S'
    },
    '10': {
      speed: 3600,
      description: '1H/S'
    },
    '11': {
      speed: 10800,
      description: '3H/S'
    },
    '12': {
      speed: 18000,
      description: '5H/S'
    },
    '13': {
      speed: 36000,
      description: '10H/S'
    },
    '14': {
      speed: 86400,
      description: '1D/S'
    },
    '15': {
      speed: 259200,
      description: '3D/S'
    },
    '16': {
      speed: 864000,
      description: '10D/S'
    },
    '17': {
      speed: 2592000,
      description: '1W/S'
    },
    '18': {
      speed: 7776000,
      description: '3W/S'
    },
    '19': {
      speed: 31536000,
      description: '1Y/S'
    },
    '20': {
      speed: 94608000,
      description: '3Y/S'
    },
    '21': {
      speed: 315360000,
      description: '10Y/S'
    },
    '22': {
      speed: 3153600000,
      description: '100Y/S'
    },
    '23': {
      speed: 15768000000,
      description: '500Y/S'
    },
    '24': {
      speed: 31536000000,
      description: '1000Y/S'
    },
    '25': {
      speed: 315576000000000,
      description: '10MY/S'
    },
    '26': {
      speed: 1577880000000000,
      description: '50MY/S'
    },
    '27': {
      speed: 9467280000000000,
      description: '300MY/S'
    },
  };
  

  return values[value];
}


let root = document.documentElement;
function handleSliderChange(value) {
  const sliderValueElement = document.getElementById('sliderValue');
  const selectedValue = mapSliderValue(value);

  if (selectedValue) {
      const { speed, description } = selectedValue;

      sliderValueElement.textContent = description;

      targetMultiplier = speed;

      if (targetMultiplier !== speedMultiplier && targetMultiplier !== 0) {
          startDate = Date.now() - ((Date.now() - startDate) * (speedMultiplier / targetMultiplier));
          lastUpdateTime = Date.now();
          speedMultiplier = targetMultiplier;
      }
  }


}

function handleButtonClick(increment) {
  const slider = document.getElementById('timeSlider');
  let newValue = parseInt(slider.value) + increment;
  if (newValue >= parseInt(slider.min) && newValue <= parseInt(slider.max)) {
    slider.value = newValue;
    handleSliderChange(newValue);
  }
}



function getElapsedTime() {
  if (!isPaused) {
    const currentTime = Date.now();
    const deltaTime = (currentTime - startDate) / 1000 * speedMultiplier;
    return Math.floor(deltaTime);
  } else {
    return Math.floor((pausedTime - startDate) / 1000 * speedMultiplier);
  }
}


function update() {
  const elapsed = getElapsedTime();
  console.log(elapsed);
  requestAnimationFrame(update);
}

 update();



function resetTime() {
  speedMultiplier = 1;
  targetMultiplier = 1;
  startDate = originalStartDate;
  lastUpdateTime = Date.now();

  acceleratedTime = Date.now();
  
  const slider = document.getElementById('timeSlider');
  slider.value = 1;

  const sliderValueElement = document.getElementById('sliderValue');
  sliderValueElement.textContent = 1;

  const playAndpauseIcon = document.getElementById('playAndpause');
  if (isPaused) {
    isPaused = false;
    pausedMultiplier = null;
    pausedTime = null;
    playAndpauseIcon.classList.remove('bi-play-circle');
    playAndpauseIcon.classList.add('bi-pause-circle');
  }
}

// Para teste: 1 unidade = 1 milhão de anos
const millionYearsMS = 1e6 * 365.25 * 24 * 60 * 60 * 1000; // 1 milhão de anos em ms

function calculateSunScale(elapsedTime) {
    const initialScale = 1;
    const finalScale = 172;

    // Fases em milhões de anos
    const waitTime = 5 * millionYearsMS;  // 5 bilhões de anos
    const redPhase = 0.1 * millionYearsMS; // 100 milhões
    const growPhase = 0.1 * millionYearsMS; // 100 milhões
    const shrinkPhase = 0.03 * millionYearsMS; // 30 milhões

    const growStart = waitTime + redPhase;
    const shrinkStart = growStart + growPhase;
    const endTime = shrinkStart + shrinkPhase;

    let scale = initialScale;

    if (elapsedTime >= growStart && elapsedTime < shrinkStart) {
        const progress = (elapsedTime - growStart) / growPhase;
        scale = initialScale + (finalScale - initialScale) * progress;
    } else if (elapsedTime >= shrinkStart && elapsedTime < endTime) {
        const progress = (elapsedTime - shrinkStart) / shrinkPhase;
        scale = finalScale - (finalScale - initialScale) * progress;
    } else if (elapsedTime >= endTime) {
        scale = initialScale * 0.1;
    }

    if (adjustZoomActive && zoomLevel >= startZoomInPercentage) {
        scale = finalScale;
    }

    return scale;
}

function updateSunColor(elapsedTime) {
    const sunElement = document.querySelector('.sol2');
    const initialColor = [255, 255, 255];
    const finalColor = [255, 0, 0];
    const initialImage = '/images/sun_present.png';
    const finalImage = '/images/sun_presente.jpg';

    const waitTime = 5 * millionYearsMS;
    const redPhase = 0.1 * millionYearsMS;
    const growPhase = 0.1 * millionYearsMS;
    const shrinkPhase = 0.03 * millionYearsMS;

    const redStart = waitTime;
    const growStart = redStart + redPhase;
    const shrinkStart = growStart + growPhase;
    const endTime = shrinkStart + shrinkPhase;

    let color = initialColor;
    let image = initialImage;

    if (elapsedTime >= redStart && elapsedTime < growStart) {
        const progress = (elapsedTime - redStart) / redPhase;
        color = [
            255,
            Math.round(255 * (1 - progress)),
            Math.round(255 * (1 - progress))
        ];
        image = finalImage;
    } else if (elapsedTime >= growStart && elapsedTime < shrinkStart) {
        color = finalColor;
        image = finalImage;
    } else if (elapsedTime >= shrinkStart && elapsedTime < endTime) {
        const progress = (elapsedTime - shrinkStart) / shrinkPhase;
        color = [
            255,
            Math.round(progress * 255),
            Math.round(progress * 255)
        ];
        image = initialImage;
    } else if (elapsedTime >= endTime) {
        color = initialColor;
        image = initialImage;
    }

    sunElement.style.backgroundColor = `rgb(${color.join(',')})`;
    sunElement.style.backgroundImage = `url(${image})`;
}

function updateSunShadowColor(elapsedTime) {
    const sunShadowElement = document.querySelector('.sol2');
    const initialColor = [255, 255, 255];
    const finalColor = [255, 0, 0];

    const waitTime = 5 * millionYearsMS;
    const redPhase = 0.1 * millionYearsMS;
    const growPhase = 0.1 * millionYearsMS;
    const shrinkPhase = 0.03 * millionYearsMS;

    const redStart = waitTime;
    const growStart = redStart + redPhase;
    const shrinkStart = growStart + growPhase;
    const endTime = shrinkStart + shrinkPhase;

    let color = initialColor;

    if (elapsedTime >= redStart && elapsedTime < growStart) {
        const progress = (elapsedTime - redStart) / redPhase;
        color = [
            255,
            Math.round(255 * (1 - progress)),
            Math.round(255 * (1 - progress))
        ];
    } else if (elapsedTime >= growStart && elapsedTime < shrinkStart) {
        color = finalColor;
    } else if (elapsedTime >= shrinkStart && elapsedTime < endTime) {
        const progress = (elapsedTime - shrinkStart) / shrinkPhase;
        color = [
            255,
            Math.round(progress * 255),
            Math.round(progress * 255)
        ];
    } else if (elapsedTime >= endTime) {
        color = initialColor;
    }

    sunShadowElement.style.boxShadow = `
        0px 0px 20cm rgba(${color.join(',')},1),
        0px 0px 40cm rgba(${color.join(',')},0.797),
        0px 0px 80cm rgba(${color.join(',')},1),
        0px 0px 160cm rgba(${color.join(',')},1)
    `;
}



let realTime = new Date().getTime();
let acceleratedTime = realTime;
let elapsedOffset = 0;

function updateClock() {
    const clockElement = document.getElementById('clock');
    const currentTime = new Date().getTime();
    
    const deltaTime = (currentTime - lastUpdateTime) * targetMultiplier;
    acceleratedTime += deltaTime;
    elapsedOffset += deltaTime;

    lastUpdateTime = currentTime;

    let clockContent;

    const currentDate = new Date(acceleratedTime);

    // 5 bilhões de anos em milissegundos
    const fiveBillionYearsMS = 5e9 * 365.25 * 24 * 60 * 60 * 1000;

    if (isNaN(currentDate.getTime())) {
        // Contagem regressiva até 5 bilhões de anos
        let remainingMS = fiveBillionYearsMS - elapsedOffset;
        if (remainingMS < 0) remainingMS = 0;
        const remainingSeconds = Math.floor(remainingMS / 1000);
        clockContent = `expansion: ${remainingSeconds} s`;
    } else {
        const timeString = formatTime(currentDate);
        const dateString = formatDate(currentDate);
        clockContent = `${timeString} - ${dateString}`;
    }

    clockElement.textContent = clockContent;

    const elapsedTime = getElapsedTime();
    const currentSunScale = calculateSunScale(elapsedTime);

    const sol2Element = document.querySelector('.sol2');
    sol2Element.style.transform = `scale(${currentSunScale})`;

    updateSunColor(elapsedTime);
    updateSunShadowColor(elapsedTime);
    
    setTimeout(updateClock, 1);
}



function formatTime(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();

  var formattedTime = (hours < 10 ? '0' : '') + hours + ':' +
                      (minutes < 10 ? '0' : '') + minutes + ':' +
                      (seconds < 10 ? '0' : '') + seconds;

  return formattedTime;
}

function formatDate(date) {
  var day = date.getDate();
  var month = date.toLocaleString('pt-BR', { month: 'long' });
  var year = date.getFullYear();

  return day + ' de ' + month + ' de ' + year;
}




updateClock(); 




const initialAngles = {
  mercurio: 134, venus: 60, terra: 55, marte: 165,
  jupiter: -40, saturno: -350, urano: -50, netuno: 0,
  lua: 150, deimos: -100, phobos: 160,
  io: 20, ganymedes: -170, europa: 150, calisto: -55,
  titan: 133, enceda: -110, rhea: -55, mimas: 50,
  thethys: -60, dione: 100, lapetus: -100,
  miranda: 0
};

const planetData = {
  sol2: { rotationSpeed: 2332800 },
  mercurio: { duration: 7603200e3, radius: 57910, inclination: 0.034, rotationSpeed: 50418432, nameInclination: 0.034 },
  venus: { duration: 19425840e3, radius: 108200, inclination: 177.3, rotationSpeed: -20952000, nameInclination: 177.3 },
  terra: { duration: 31556952e3, radius: 149600, inclination: 0, rotationSpeed: 86450, nameInclination: 0 },
  marte: { duration: 59356800e3, radius: 227940, inclination: 25.2, rotationSpeed: 88560, nameInclination: 25.2 },
  day: {rotationSpeed: 86174},
  night: {rotationSpeed: 86174},
  jupiter: { duration: 374247820.8e3, radius: 778330, rotationSpeed: 35280, inclination: 3.1, nameInclination: 3.1 },
  saturno: { duration: 929878672e3, radius: 1429400, rotationSpeed: 38640, inclination: 26.73, nameInclination: 26.73 },
  urano: { duration: 2649369600e3, radius: 2870990, rotationSpeed: 61200, inclination: 97.8, nameInclination: 97.8 },
  netuno: { duration: 5196787200e3, radius: 4504300, rotationSpeed: 58800, inclination: 28.3, nameInclination: 28.3 },
  lua: { duration: 2360592e3, radius: 3840, inclination: -90, rotationSpeed: 2419200 },
  deimos: { duration: 109074e3, radius: 234, inclination: 0, rotationSpeed: 0, nameInclination: 0 },
  phobos: { duration: 27652e3, radius: 93, inclination: 0, rotationSpeed: 0, nameInclination: 0 },
  io: { duration: 152603e3, radius: 4220, inclination: -90, rotationSpeed: 152000, nameInclination: 0 },
  ganymedes: { duration: 622920e3, radius: 10704, inclination: -90, rotationSpeed: -604800, nameInclination: 0 },
  europa: { duration: 306086e3, radius: 6710, inclination: -90, rotationSpeed: -295022, nameInclination: -3 },
  calisto: { duration: 1442016e3, radius: 18800, inclination: -90, rotationSpeed: -1442931, nameInclination: 0 },
  titan: { duration: 1377648e3, radius: 12218, inclination: -105, rotationSpeed: 1373760, nameInclination: 0 },
  enceda: { duration: 118220e3, radius: 2380, inclination: -105, rotationSpeed: 101587 },
  rhea: { duration: 391008e3, radius: 5270, inclination: -105, rotationSpeed: 370974, nameInclination: 0 },
  mimas: { duration: 81636e3, radius: 1855, inclination: -105, rotationSpeed: 82225, nameInclination: 0 },
  thethys: { duration: 163129e3, radius: 2946, inclination: -105, rotationSpeed: 77040, nameInclination: 0 },
  dione: { duration: 236469.46e3, radius: 3774, inclination: -105, rotationSpeed: 236469.46, nameInclination: 0 },
  lapetus: { duration: 6853334.4e3, radius: 35610, inclination: -105, rotationSpeed: 68419200, nameInclination: 0 },
  miranda: { duration: 122124.59e3, radius: 1297, inclination: 0, rotationSpeed: 0, nameInclination: 0 }
};

const containerWidth = 1370, containerHeight = 727;

// listas fixas
const luasComOrientacaoFixa = new Set(['lua','io','europa','ganymedes','calisto','titan','enceda','rhea','mimas','thethys','dione','lapetus']);
const shadowIntervals = {
  io: { start: -14.7, end: 5 },
  europa: { start: -5, end: 5 },
  ganymedes: { start: -14.3, end: -9.4 }
};

// cache de elementos
const planetElements = {};
Object.keys(planetData).forEach(name => {
  planetElements[name] = document.querySelector(`.${name}`);
});
const planetNames = document.querySelectorAll('.nomes');

function rotatePlanetNames(elapsedTime) {
  planetNames.forEach(el => {
    const name = el.textContent.toLowerCase();
    const data = planetData[name];
    if (!data) return;

    const angle = (initialAngles[name] - elapsedTime * (360 / data.duration)) % 360;
    const adjustedAngle = angle + (data.nameInclination || 0);

    el.style.transform = `rotate(${-adjustedAngle}deg)`;
  });
}

function updatePlanetsPosition() {
  const elapsedTime = getElapsedTime() * 1000;
  const cx = containerWidth / 2, cy = containerHeight / 2;

  for (const [name, data] of Object.entries(planetData)) {
    const angle = (initialAngles[name] - elapsedTime * (360 / data.duration)) % 360;
    const rad = angle * Math.PI / 180;
    const x = cx + data.radius * Math.cos(rad);
    const y = cy + data.radius * Math.sin(rad);

    const el = planetElements[name];
    if (!el) continue;

    // sombra
    const shadow = shadowIntervals[name];
    if (shadow && angle >= shadow.start && angle <= shadow.end) {
      el.classList.add('black-planet');
    } else {
      el.classList.remove('black-planet');
    }

    // orientação
    if (luasComOrientacaoFixa.has(name)) {
      el.style.transform = `translate(${x}px, ${y}px) rotate(90deg) rotate(${data.inclination}deg)`;
    } else {
      el.style.transform = `translate(${x}px, ${y}px) rotate(${angle}deg) rotate(${data.inclination}deg)`;
    }

    startRotationAnimation(el, data.rotationSpeed, elapsedTime);
  }

  rotatePlanetNames(elapsedTime);
  requestAnimationFrame(updatePlanetsPosition);
}

function startRotationAnimation(el, speed, elapsedTime) {
  const absSpeed = Math.abs(speed);
  const initialRot = (elapsedTime % (absSpeed * 1000)) / (absSpeed * 1000) * 360;

  el.style.animation = `planetRotate ${absSpeed}s linear infinite`;
  el.style.animationDelay = `-${(initialRot / 360) * absSpeed}s`;
  el.style.backgroundPosition = `0% center`;
  el.style.animationDirection = speed < 0 ? 'reverse' : 'normal';
}

updatePlanetsPosition();

