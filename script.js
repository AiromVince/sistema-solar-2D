var scale = 1,
  panning = false,
  pointX = 0,
  pointY = 0,
  start = { x: 0, y: 0 },
  lastX = 0,
  lastY = 0,
  zoom = document.getElementById("zoom"),
  isDragEnabled = true,
  dragButton = document.getElementById("toggleDragButton");

function setTransform() {
  zoom.style.transform = `translate(${pointX}px, ${pointY}px) scale(${scale})`;
}

function getDistance(point1, point2) {
  var dx = point2.x - point1.x;
  var dy = point2.y - point1.y;
  return Math.sqrt(dx * dx + dy * dy);
}

dragButton.addEventListener("click", function () {
  isDragEnabled = !isDragEnabled;
  if (!isDragEnabled) {
    panning = false;
    start = { x: 0, y: 0 };
    lastX = pointX;
    lastY = pointY;
  }
});

document.body.addEventListener("mousedown", function (e) {
  if (isDragEnabled && !panning && !e.target.closest('.info-panel')) {
    panning = true;
    start = { x: e.clientX, y: e.clientY };
    lastX = pointX;
    lastY = pointY;
  }
});


document.body.addEventListener("wheel", function (e) {
  if (isDragEnabled && e.target === document.body) {
    var delta = e.deltaY > 0 ? 0.9 : 1.1;
    scale *= delta;
    pointX = (pointX - e.clientX) * delta + e.clientX;
    pointY = (pointY - e.clientY) * delta + e.clientY;
    setTransform();
    e.preventDefault();
  }
});

window.addEventListener("mouseup", function () {
  panning = false;
});

document.body.addEventListener("mousemove", function (e) {
  if (isDragEnabled && panning && !e.target.closest('.info-panel') && !e.target.closest('.config-panel') && !e.target.closest('.box')) {
    pointX = e.clientX - start.x + lastX;
    pointY = e.clientY - start.y + lastY;
    setTransform();
  }
});





function checkZoomLevel1() {
  var zoomContainer = document.getElementById('zoom');
  var galaxyImage = zoomContainer.querySelector('.galaxy1', 'galaxy2', 'galaxy3', 'galaxy4', 'galaxy5', 'galaxy6', 'galaxy7', 'galaxy8', 'galaxy9', 'galaxy10', 'galaxy11', 'galaxy12', 'galaxy13', 'galaxy14', 'galaxy15', 'galaxy16', 'galaxy17');

  var zoomThreshold = 0.00000007;

  if (scale <= zoomThreshold) {
    zoomContainer.classList.add('zoomed-out');
    [galaxyImage].forEach(el => el.classList.remove('zoomed-out'));
    document.body.style.background = 'black';
  } else {
    zoomContainer.classList.remove('zoomed-out');
    [galaxyImage].forEach(el => el.classList.add('zoomed-out'));
    document.body.style.background = 'url("/images/espaço-geral/espaço.jpg")';
  }
}


function adjustTouchSizesAndOrbitBorders(zoomLevel) {
  var touchElements = document.querySelectorAll('.touch');
  var orbitBorders = document.querySelectorAll('.orbit');
  
  touchElements.forEach(function (touchElement) {
    var planetClass = touchElement.classList[0];

    var maxTouchSize = {
      "touch-mercury": 15000,
      "touch-venus": 15000,
      "touch-terra": 15000,
      "touch-lua": 15000,
      "touch-marte": 15000,
      "touch-jupiter": 50000,
      "touch-saturno": 50000,
      "touch-urano": 100000,
      "touch-netuno": 100000
    };
    
    var originalTouchSize = {
      "touch-mercury": 50,
      "touch-venus": 140,
      "touch-terra": 140,
      "touch-marte": 80,
      "touch-jupiter": 1600,
      "touch-saturno": 1620,
      "touch-urano": 1000,
      "touch-netuno": 700
    };

    var speedFactor = 55; 
    var desiredSize = originalTouchSize[planetClass] + (maxTouchSize[planetClass] - originalTouchSize[planetClass]) * Math.pow(1 - zoomLevel, speedFactor);
    
    var opacity = desiredSize < originalTouchSize[planetClass] + 1 ? 0 : 1;
    touchElement.style.opacity = opacity;
    
    touchElement.style.width = desiredSize + 'px';
    touchElement.style.height = desiredSize + 'px';
    touchElement.style.margin = '-' + (desiredSize / 2) + 'px'; 
  });

  orbitBorders.forEach(function (orbitBorder) {
    var orbitClass = orbitBorder.classList[0];

    var borderSpeedFactor = 110;

    var maxBorderWidth = 1000;
    var minBorderWidth = 1;

    var zoomLimit = 0.1;
    if (zoomLevel > zoomLimit) {
      zoomLevel = zoomLimit;
    }

    var currentBorderWidth = minBorderWidth + (maxBorderWidth - minBorderWidth) * Math.pow(1 - zoomLevel, borderSpeedFactor);
    orbitBorder.style.borderWidth = currentBorderWidth + 'px';

    orbitBorder.style.opacity = currentBorderWidth <= minBorderWidth + 1 ? 0 : 1;
  });
}


function adjustPlanetNameSizes(zoomLevel) {
  var planetNames = document.querySelectorAll('.nomes');

  planetNames.forEach(function (planetName) {
    var planetClass = planetName.classList[0];

    var maxFontSize = {
      "nomes-mercury": 30000,
      "nomes-venus": 30000,
      "nomes-earth": 30000,
      "nomes-mars": 40000,
      "nomes-jupiter": 900000,
      "nomes-saturny": 900000,
      "nomes-urano": 500000,
      "nomes-neptune": 500000
    };
    
    var minFontSize = {
      "nomes-mercury": 50,
      "nomes-venus": 50,
      "nomes-earth": 50,
      "nomes-mars": 100,
      "nomes-jupiter": 200,
      "nomes-saturny": 200,
      "nomes-urano": 300,
      "nomes-neptune": 300
    };

    var zoomLimit = 0.1;

    if (zoomLevel > zoomLimit) {
      zoomLevel = zoomLimit;
    }

    var speedFactor = 100;
    var fontSize = minFontSize[planetClass] + (maxFontSize[planetClass] - minFontSize[planetClass]) * Math.pow(1 - zoomLevel, speedFactor);

    planetName.style.fontSize = fontSize + 'px';
    planetName.style.position = 'absolute';

    if (fontSize < minFontSize[planetClass]) {
      planetName.style.opacity = 0;
      planetName.style.transition = 'opacity 2s';
    } else {
      planetName.style.opacity = 1;
    }
  });
}

adjustPlanetNameSizes(scale);


var adjustZoomActive = false;
var zoomDisableTime = 500;
var updateSunSizeBasedOnTime = true;

function adjustSunSize(zoomLevel) {
  var sunElement = document.querySelector('.sol2');
  var startZoomInPercentage = 0.000002;
  var maxScale = 100000;
  var minScale = 0.001;

  if (zoomLevel < startZoomInPercentage) {
    adjustZoomActive = true;
    updateSunSizeBasedOnTime = true;
    setTimeout(function() {
      adjustZoomActive = false;
    });
  }

  if (adjustZoomActive) {
    var scaleValue = Math.max(minScale, 0.004 / zoomLevel);
    scaleValue = Math.min(scaleValue, maxScale);

    sunElement.style.transform = 'scale(' + scaleValue + ')';

    adjustShadowSize(scaleValue);
  }

  if (updateSunSizeBasedOnTime) {

    const elapsedTime = getElapsedTime();
    const currentSunScale = calculateSunScale(elapsedTime);

    const sol2Element = document.querySelector('.sol2');
    sol2Element.style.transform = `scale(${currentSunScale})`;

    updateSunColor(elapsedTime);
    updateSunShadowColor(elapsedTime);
  }
}


function checkZoomLevel() {
  adjustTouchSizesAndOrbitBorders(scale);
  adjustPlanetNameSizes(scale);
  adjustSunSize(scale);
}




var initialZoom = 50; 
var xOffset = 700; 
var yOffset = 500; 

scale = initialZoom / 10000;
pointX = xOffset; 
pointY = yOffset; 
setTransform(); 


zoom.addEventListener("wheel", function (e) {
  e.preventDefault();

  var containerRect = zoom.getBoundingClientRect();
  var mouseXInContainer = e.clientX - containerRect.left;
  var mouseYInContainer = e.clientY - containerRect.top;

  var xs = mouseXInContainer / scale;
  var ys = mouseYInContainer / scale;
  var delta = (e.wheelDelta ? e.wheelDelta : -e.deltaY);
  (delta > 0) ? (scale *= 1.2) : (scale /= 1.2);

  pointX = e.clientX - xs * scale;
  pointY = e.clientY - ys * scale;

  checkZoomLevel1();
  setTransform();
  checkZoomLevel();
});



var isAudioPlaying = false;

document.getElementById("playButton").addEventListener("click", function() {
  if (!isAudioPlaying) {
    var audio = new Audio("https://s27.aconvert.com/convert/p3r68-cdx67/4ipfq-6o5zw.ogg");
    audio.play();
    isAudioPlaying = true;
  }
});

document.getElementById("toggleOrbitsButton").addEventListener("click", function() {
  var orbits = document.querySelectorAll(".orbit");
  var hideOrbits = !orbits[0].classList.contains("hide-orbit");

  for (var i = 0; i < orbits.length; i++) {
    if (hideOrbits) {
      orbits[i].classList.add("hide-orbit");
    } else {
      orbits[i].classList.remove("hide-orbit");
    }
  }
});

document.getElementById("toggleTrailsButton").addEventListener("click", function() {
  var elementosParaOcultar = document.querySelectorAll(".touch, .trail");
  var esconderElementos = !elementosParaOcultar[0].classList.contains("hide-trail");

  for (var i = 0; i < elementosParaOcultar.length; i++) {
    if (esconderElementos) {
      elementosParaOcultar[i].classList.add("hide-trail");
    } else {
      elementosParaOcultar[i].classList.remove("hide-trail");
    }
  }
});



document.getElementById("toggleNomeButton").addEventListener("click", function() {
  var orbits = document.querySelectorAll(".nomes");
  var hideOrbits = !orbits[0].classList.contains("hide-nome");

  for (var i = 0; i < orbits.length; i++) {
    if (hideOrbits) {
      orbits[i].classList.add("hide-nome");
    } else {
      orbits[i].classList.remove("hide-nome");
    }
  }
});

var isFollowingPlanet = false;
var planetAnimationId;
var currentPlanetClass = "";

function followPlanet(newPlanetClass) {

  var previousPlanet = document.querySelector(".neon-border");
  if (previousPlanet) {
    previousPlanet.classList.remove("neon-border");
  }

  var planet = document.querySelector(newPlanetClass);
  if (!planet) return;

  planet.classList.add("neon-border");

  if (planetAnimationId) cancelAnimationFrame(planetAnimationId);

  currentPlanetClass = newPlanetClass;
  isFollowingPlanet = true;

  function updateCameraPosition() {
    if (!isFollowingPlanet || currentPlanetClass !== newPlanetClass) return;

    var planetPosition = planet.getBoundingClientRect();
    var targetX = planetPosition.left + planetPosition.width / 2;
    var targetY = planetPosition.top + planetPosition.height / 2;
    var offsetX = window.innerWidth / 2 - targetX;
    var offsetY = window.innerHeight / 2 - targetY;

    var interpolationFactor = 1;
    pointX += offsetX * interpolationFactor;
    pointY += offsetY * interpolationFactor;

    setTransform();

    planetAnimationId = requestAnimationFrame(updateCameraPosition);
  }

  updateCameraPosition();
}


function zoomOut() {
  var zoomContainer = document.getElementById('zoom');
  zoomContainer.classList.add('zoomed-out');


  pointX = Math.min(pointX, window.innerWidth - zoomContainer.clientWidth);
  pointY = Math.min(pointY, window.innerHeight - zoomContainer.clientHeight);
  scale = Math.max(scale, 0.1);

  setTransform();
}

var followButtons = document.querySelectorAll('.follow-button');

followButtons.forEach(function(button) {
  button.setAttribute('data-original-text', button.textContent);

  button.addEventListener('click', function() {
    var planetClass = button.getAttribute('data-planet');
    var isFollowing = button.getAttribute('data-following') === 'true';

    if (isFollowing) {
      isFollowingPlanet = false;
      cancelAnimationFrame(planetAnimationId);
      button.textContent = button.getAttribute('data-original-text');
      button.setAttribute('data-following', 'false');
      var planet = document.querySelector(planetClass);
      if (planet) planet.classList.remove("neon-border");
      currentPlanetClass = "";
    } else {

      followPlanet(planetClass);
      button.textContent = 'Deixar de seguir';
      button.setAttribute('data-following', 'true');
    }

    followButtons.forEach(function(otherButton) {
      if (otherButton !== button) {
        otherButton.textContent = otherButton.getAttribute('data-original-text');
        otherButton.setAttribute('data-following', 'false');
      }
    });
  });
});

var audio = new Audio('/sons/espaço profundo.mp3');
audio.volume = 1;

audio.addEventListener('ended', function() {
    audio.currentTime = 0;
    audio.play();
});

audio.play();
var buttons = document.querySelectorAll(".category-button");


let isMoonPlaying = false; 

function handleSound(sound, action) {
  if (isMoonPlaying) {
    sound.pause(); 
    return;
  }

  sound.currentTime = 0;
  sound.loop = (action === 'play'); 
  action === 'play' ? sound.play() : sound.pause();
}

const planetSoundMap = {
  'sun': sunSound,
  'mercurio': mercurySound,
  'venus': venusSound,
  'terra': terraSound,
  'marte': marteSound,
  'jupiter': jupiterSound,
  'saturno': saturnoSound,
  'urano': uranoSound,
  'netuno': netunoSound,
  // luas
  //lua terra
  'lua': luaSound,
  //lua terra
  //marte
  'deimos': deimosSound,
  'phobos': phobosSound,
  //marte
  //luas jupiter
  'io': ioSound,
  'europa': europaSound,
  'ganymedes': ganymedesSound,
  'calisto': calistoSound,
  //luas jupiter
  //luas saturno
  'mimas': mimasSound,
  'encedalos': encedalosSound,
  'thethys': thehtysSound,
  'rhea': rheaSound,
  'titan': titanSound,
  'dione': dioneSound,
  'lapetus': lapetusSound,
  //luas saturno

  //galaxias
  'milk': milkSound,
  'andro': androSound
};

const stoppingMoons = ['lua', 'io', 'europa', 'ganymedes', 'calisto', 'mimas', 'encedalos', 'thethys', 'rhea', 'titan', 'dione', 'lapetus', 'deimos', 'phobos'];

for (const planetId in planetSoundMap) {
  const planet = document.getElementById(planetId);

  planet.addEventListener("mouseover", () => handleSound(planetSoundMap[planetId], 'play'));
  planet.addEventListener("mouseout", () => handleSound(planetSoundMap[planetId], 'stop'));
}

stoppingMoons.forEach(moonId => {
  const moon = document.getElementById(moonId);

  moon.addEventListener('mouseover', () => {
    isMoonPlaying = true;
  });

  moon.addEventListener('mouseout', () => {
    isMoonPlaying = false;
  });
});


var audioElements = document.querySelectorAll('audio');

var muteButton = document.getElementById('muteButton');

function toggleMute() {
    audioElements.forEach(function(audio) {
        audio.muted = !audio.muted;
    });
}

muteButton.addEventListener('click', toggleMute);

var menuItem = document.querySelectorAll(".item-menu")

function selectLink(){
  menuItem.forEach((item)=>
      item.classList.remove('active')
  )
  this.classList.add('active')
}

menuItem.forEach((item)=>
    item.addEventListener('click', selectLink)
)

document.getElementById('btn-exp').addEventListener('click', function() {
  var menu = document.querySelector('.menu ul');
  menu.classList.toggle('active');
});

const btnExp = document.querySelector('.btn-exp');

btnExp.addEventListener('click', function() {
  this.classList.toggle('rotate-icon');
});


document.addEventListener('DOMContentLoaded', function() {
  var configIcon = document.getElementById('configIcon');
  var configPanel = document.getElementById('configPanel');
  var closeConfigPanel = document.getElementById('closeConfigPanel');
  var menu = document.querySelector('.menu');

  configIcon.addEventListener('click', function() {
    configPanel.style.display = 'block';
    menu.style.display = 'none';

    setTimeout(function() {
      configPanel.classList.add('open');
    }, 10);
  });

  closeConfigPanel.addEventListener('click', function() {

    configPanel.classList.remove('open');

    setTimeout(function() {
      configPanel.style.display = 'none';
    }, 500);

    menu.style.display = 'block';
  });
});

document.querySelector('.item-menu:nth-child(2) a').addEventListener('click', function(e) {
  e.preventDefault();
  document.getElementById('infoPanel').classList.add('active');
  
  document.getElementById('clock').style.display = 'none';
});

document.getElementById('closeInfoPanel').addEventListener('click', function() {
  document.getElementById('infoPanel').classList.remove('active');
  
  document.getElementById('clock').style.display = 'block';
});


document.addEventListener('DOMContentLoaded', function() {
  var toggleButtons = document.querySelectorAll('.toggle-button');

  toggleButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      this.querySelector('i').classList.toggle('bi-toggle-on');
      this.querySelector('i').classList.toggle('bi-toggle-off');
    });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  var toggleButtons = document.querySelectorAll('.toggle-button1');

  toggleButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      this.querySelector('i').classList.toggle('bi-toggle-on');
      this.querySelector('i').classList.toggle('bi-toggle-off');
    });
  });
});

function addShadow() {
  var planet = document.querySelector('.black-planet');
  planet.classList.add('show-shadow');
}

function removeShadow() {
  var planet = document.querySelector('.black-planet');
  planet.classList.remove('show-shadow');
}


document.addEventListener('DOMContentLoaded', function () {
  function traduzirTexto(texto, callback) {
    const lang = 'en';
    const targetLang = 'pt';
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${lang}&tl=${targetLang}&dt=t&q=${encodeURIComponent(
      texto
    )}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        let textoTraduzido = '';
        for (let i = 0; i < data[0].length; i++) {
          textoTraduzido += data[0][i][0];
        }
        callback(textoTraduzido);
      })
      .catch((error) => console.error('Erro ao traduzir texto:', error));
  }

  function getAPOD() {
    const apiKey = 'cT3bKDu3jkBA1OK1D10YtSAlvGu2C1p7fNxKC4s7';
    const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        const apodImage = document.getElementById('apodImage');
        const mediaType = data.media_type;
        
        if (mediaType === 'image') {
          apodImage.src = data.url;
          apodImage.alt = data.title;
        } else if (mediaType === 'video') {
          apodImage.src = ''; 
          const iframe = document.createElement('iframe');
          iframe.src = data.url;
          iframe.width = '89.5%';
          iframe.height = '400px';
          iframe.allowFullscreen = true;
          iframe.className = 'apod-iframe';
          apodImage.parentNode.replaceChild(iframe, apodImage);
        }
        

        const apodTitle = document.getElementById('apodTitle');
        apodTitle.textContent = data.title;

        const apodTextElement = document.getElementById('apodText');
        apodTextElement.textContent = data.explanation;

        traduzirTexto(data.title, function (tituloTraduzido) {
          apodTitle.textContent = tituloTraduzido;
        });

        traduzirTexto(data.explanation, function (textoTraduzido) {
          apodTextElement.textContent = textoTraduzido;
        });
      })
  }


  const apiKey = 'cT3bKDu3jkBA1OK1D10YtSAlvGu2C1p7fNxKC4s7';
  const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;
  
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const apodCategoria = document.getElementById('toggleButton');
      apodCategoria.classList.add('selecionada');
      selectCategoria.call(apodCategoria);
    })

  getAPOD();
});




document.addEventListener('DOMContentLoaded', function() {
  const categorias = document.querySelectorAll('.categoria');
  const conteudos = document.querySelectorAll('.conteudo');

  function selectCategoria() {
      const categoriaSelecionada = this.dataset.target;

      categorias.forEach((categoria) => categoria.classList.remove('selecionada'));
      conteudos.forEach((conteudo) => conteudo.style.display = 'none');

      this.classList.add('selecionada');
      document.getElementById(categoriaSelecionada).style.display = 'block';
  }

  
  categorias.forEach((categoria) => categoria.addEventListener('click', selectCategoria));

  document.querySelector('.categoria[data-target="apod"]').click();
});

   const subCategorias = document.querySelectorAll('.sub-categoria-planeta');
   const subConteudos = document.querySelectorAll('.sub-conteudo-planeta');
   const botaoVoltar = document.getElementById('botao-voltar');

   subCategorias.forEach((aba, index) => {
       aba.addEventListener('click', () => {
           subConteudos.forEach(conteudo => conteudo.style.display = 'none');
           subCategorias.forEach(elemento => elemento.classList.remove('ativo'));

           aba.classList.add('ativo');
           subConteudos[index].style.display = 'block';

           
           botaoVoltar.style.display = 'none';

           subCategorias.forEach((outraAba, outraIndex) => {
               if (outraIndex !== index) {
                   outraAba.style.display = 'none';
               }
           });
       });
   });

   botaoVoltar.addEventListener('click', () => {
       subCategorias.forEach(aba => aba.style.display = 'block');
       botaoVoltar.style.display = 'none';

       subConteudos.forEach(conteudo => conteudo.style.display = 'none');
       subCategorias.forEach(elemento => elemento.classList.remove('ativo'));
   });

document.addEventListener('DOMContentLoaded', function() {
  function getAsteroidInfo(dataEscolhida) {
    const apiKey = 'cT3bKDu3jkBA1OK1D10YtSAlvGu2C1p7fNxKC4s7';
    const apiUrl = `https://api.nasa.gov/neo/rest/v1/feed?api_key=${apiKey}&start_date=${dataEscolhida}&end_date=${dataEscolhida}`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const asteroidTitle = document.getElementById('asteroidTitle');
        asteroidTitle.textContent = 'dados sobre os asteroides';

        const asteroidList = document.getElementById('asteroidList');
        asteroidList.innerHTML = ''; 

        const asteroidData = data.near_earth_objects[dataEscolhida];

        asteroidData.forEach(asteroid => {
          const asteroidInfo = `
            <p>
              asteroide: ${asteroid.name} <br>
              Início: ${dataEscolhida} <br>
              Fim: ${dataEscolhida} <br>
              Distância (km): ${asteroid.close_approach_data[0].miss_distance.kilometers} <br>
              Distância (milhas): ${asteroid.close_approach_data[0].miss_distance.miles} <br>
              Órbita: ${asteroid.close_approach_data[0].orbiting_body} <br>
              Velocidade Relativa (km/h): ${asteroid.close_approach_data[0].relative_velocity.kilometers_per_hour} <br>
            </p>
          `;
          asteroidList.innerHTML += asteroidInfo;
        });
      })
      .catch(error => console.error('Erro ao obter informações do asteroide:', error));
  }

  document.getElementById('buscarAsteroides').addEventListener('click', function() {
    const dataEscolhida = document.getElementById('dataEscolhida').value;

    if (dataEscolhida) {
      getAsteroidInfo(dataEscolhida);
    } else {
      alert('Por favor, escolha uma data.');
    }
  });
});

function toggleButtons() {
  const timebtn = document.querySelector('.timebtn');
  timebtn.classList.toggle('active1');
}

function toggleRotation() {
  const toggleBtn = document.querySelector('.toggle-btn');
  toggleBtn.classList.toggle('rotate');
}

document.querySelector('.toggle-btn').addEventListener('click', toggleRotation);

let isPaused = false;
let pausedTime = null;
let pausedMultiplier = null;

function togglePlayPause() {
  const playAndpauseIcon = document.getElementById('playAndpause');
  if (isPaused) {
    isPaused = false;
    if (pausedTime !== null) {
      targetMultiplier = pausedMultiplier !== null ? pausedMultiplier : 1;
      startDate += Date.now() - pausedTime;
      lastUpdateTime = Date.now();
      pausedTime = null; 
      pausedMultiplier = null; 
      playAndpauseIcon.classList.remove('bi-play-circle');
      playAndpauseIcon.classList.add('bi-pause-circle');
    }
  } else {
    isPaused = true;
    pausedMultiplier = targetMultiplier;
    targetMultiplier = 0;
    pausedTime = Date.now();
    playAndpauseIcon.classList.remove('bi-pause-circle');
    playAndpauseIcon.classList.add('bi-play-circle');
  }
}



document.querySelector('.avan').addEventListener('click', function() {
  const slider = document.getElementById('timeSlider');
  handleButtonClick(1);
  handleSliderChange(slider.value);
  isPaused = false; 

  const playAndpauseIcon = document.getElementById('playAndpause');
  playAndpauseIcon.classList.remove('bi-play-circle');
  playAndpauseIcon.classList.add('bi-pause-circle');
});

document.querySelector('.retro').addEventListener('click', function() {
  const slider = document.getElementById('timeSlider');
  handleButtonClick(-1);
  handleSliderChange(slider.value);
  isPaused = false; 

  const playAndpauseIcon = document.getElementById('playAndpause');
  playAndpauseIcon.classList.remove('bi-play-circle');
  playAndpauseIcon.classList.add('bi-pause-circle');
});

document.addEventListener('DOMContentLoaded', function () {
  var loaderContainer = document.getElementById('loader-container');
  var content = document.body;

  window.addEventListener('load', function () {
      setTimeout(function () {
          loaderContainer.style.display = 'none';
          content.style.overflow = 'visible';
      }, 5000);
  });

  var progressBar = document.querySelector('.progress-bar');

  var interval = setInterval(function () {
      progressBar.style.width = '100%';

      clearInterval(interval);
  }, 500);
});
