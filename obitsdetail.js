const followTargets = {
  followSunButton: ".sol2",
  followMarsButton: ".marte",

  // Luas de Marte
  followDeimosButton: ".deimos",
  followPhobosButton: ".phobos",

  followVenusButton: ".venus",
  followEarthButton: ".terra",
  followMoonButton: ".lua",
  followJupiterButton: ".jupiter",

  // Luas de Júpiter
  followIoButton: ".io",
  followEuropaButton: ".europa",
  followGanymedesButton: ".ganymedes",
  followCalistoButton: ".calisto",

  followSaturnoButton: ".saturno",

  // Luas de Saturno
  followTitanButton: ".titan",
  followEncedaloButton: ".enceda",
  followRheaButton: ".rhea",
  followMimasButton: ".Mimas",
  followThethysButton: ".thethys",
  followDioneButton: ".dione",
  followLapetusButton: ".lapetus",

  // Luas de Urano
  followMirandaButton: ".miranda",

  followMercurioButton: ".mercurio",
  followUranoButton: ".urano",
  followNetunoButton: ".netuno"
};

// Linhas de orbitas
Object.entries(followTargets).forEach(([buttonId, planetClass]) => {
  const button = document.getElementById(buttonId);
  if (button) {
    button.addEventListener("click", () => followPlanet(planetClass));
  }
});

  
  function changeOrbitColor(orbitNumber, isActive) {
    var orbitElement = document.querySelector(`.orbit${orbitNumber}-active`);
    isActive ? orbitElement.classList.add('orbit-active') : orbitElement.classList.remove('orbit-active');
  }
  
  function resetOrbitColor(orbitNumber) {
    changeOrbitColor(orbitNumber, false);
  }
  
  function changeOrbitColor1() {
    var mercuryOrbitElement = document.querySelector('.mercury-orbit');
    mercuryOrbitElement.classList.add('orbit-active');
  }
  
  function resetOrbitColor1() {
    var mercuryOrbitElement = document.querySelector('.mercury-orbit');
    mercuryOrbitElement.classList.remove('orbit-active');
  }
  
  function changeOrbitColor2() {
    var venusOrbitElement = document.querySelector('.venus-orbit');
    venusOrbitElement.classList.add('orbit-active');
  }
  
  function resetOrbitColor2() {
    var venusOrbitElement = document.querySelector('.venus-orbit');
    venusOrbitElement.classList.remove('orbit-active');
  }
  
  function changeOrbitColor3() {
    var terraOrbitElement = document.querySelector('.terra-orbit');
    terraOrbitElement.classList.add('orbit-active');
  }
  
  function resetOrbitColor3() {
    var terraOrbitElement = document.querySelector('.terra-orbit');
    terraOrbitElement.classList.remove('orbit-active');
  }
  
  function changeOrbitColor4() {
    var marteOrbitElement = document.querySelector('.marte-orbit');
    marteOrbitElement.classList.add('orbit-active');
  }
  
  function resetOrbitColor4() {
    var marteOrbitElement = document.querySelector('.marte-orbit');
    marteOrbitElement.classList.remove('orbit-active');
  }
  
  function changeOrbitColor5() {
    var jupiterOrbitElement = document.querySelector('.jupiter-orbit');
    jupiterOrbitElement.classList.add('orbit-active');
  }
  
  function resetOrbitColor5() {
    var jupiterOrbitElement = document.querySelector('.jupiter-orbit');
    jupiterOrbitElement.classList.remove('orbit-active');
  }
  
  function changeOrbitColor6() {
    var saturnoOrbitElement = document.querySelector('.saturno-orbit');
    saturnoOrbitElement.classList.add('orbit-active');
  }
  
  function resetOrbitColor6() {
    var saturnoOrbitElement = document.querySelector('.saturno-orbit');
    saturnoOrbitElement.classList.remove('orbit-active');
  }
  
  function changeOrbitColor7() {
    var uranoOrbitElement = document.querySelector('.urano-orbit');
    uranoOrbitElement.classList.add('orbit-active');
  }
  
  function resetOrbitColor7() {
    var uranoOrbitElement = document.querySelector('.urano-orbit');
    uranoOrbitElement.classList.remove('orbit-active');
  }
  
  function changeOrbitColor8() {
    var netunoOrbitElement = document.querySelector('.netuno-orbit');
    netunoOrbitElement.classList.add('orbit-active');
  }
  
  function resetOrbitColor8() {
    var netunoOrbitElement = document.querySelector('.netuno-orbit');
    netunoOrbitElement.classList.remove('orbit-active');
  }
  
  function changeOrbitColor10() {
    var moonOrbitElement = document.querySelector('.moon-orbit');
    moonOrbitElement.classList.add('orbit-active');
  }
  
  function resetOrbitColor10() {
    var moonOrbitElement = document.querySelector('.moon-orbit');
    moonOrbitElement.classList.remove('orbit-active');
  }
  
  function resetOrbitColor11() {
    var ioOrbitElement = document.querySelector('.io-orbit');
    ioOrbitElement.classList.remove('orbit-active');
  }
  
  function changeOrbitColor11() {
    var ioOrbitElement = document.querySelector('.io-orbit');
    ioOrbitElement.classList.add('orbit-active');
  }
  
  function resetOrbitColor12() {
    var ganymedesOrbitElement = document.querySelector('.ganymedes-orbit');
    ganymedesOrbitElement.classList.remove('orbit-active');
  }
  
  function changeOrbitColor12() {
    var ganymedesOrbitElement = document.querySelector('.ganymedes-orbit');
    ganymedesOrbitElement.classList.add('orbit-active');
  }
  
  
  function resetOrbitColor13() {
    var europaOrbitElement = document.querySelector('.europa-orbit');
    europaOrbitElement.classList.remove('orbit-active');
  }
  
  function changeOrbitColor13() {
    var europaOrbitElement = document.querySelector('.europa-orbit');
    europaOrbitElement.classList.add('orbit-active');
  }
  
  function resetOrbitColor14() {
    var calistoOrbitElement = document.querySelector('.calisto-orbit');
    calistoOrbitElement.classList.remove('orbit-active');
  }
  
  function changeOrbitColor14() {
    var calistoOrbitElement = document.querySelector('.calisto-orbit');
    calistoOrbitElement.classList.add('orbit-active');
  }
  
  function resetOrbitColor15() {
    var titanOrbitElement = document.querySelector('.titan-orbit');
    titanOrbitElement.classList.remove('orbit-active');
  }
  
  function changeOrbitColor15() {
    var titanOrbitElement = document.querySelector('.titan-orbit');
    titanOrbitElement.classList.add('orbit-active');
  }
  
  function resetOrbitColor16() {
    var encedaOrbitElement = document.querySelector('.enceda-orbit');
    encedaOrbitElement.classList.remove('orbit-active');
  }
  
  function changeOrbitColor16() {
    var encedaOrbitElement = document.querySelector('.enceda-orbit');
    encedaOrbitElement.classList.add('orbit-active');
  }
  
  function resetOrbitColor17() {
    var rheaOrbitElement = document.querySelector('.rhea-orbit');
    rheaOrbitElement.classList.remove('orbit-active');
  }
  
  function changeOrbitColor17() {
    var rheaOrbitElement = document.querySelector('.rhea-orbit');
    rheaOrbitElement.classList.add('orbit-active');
  }
  
  function resetOrbitColor18() {
    var mimasOrbitElement = document.querySelector('.mimas-orbit');
    mimasOrbitElement.classList.remove('orbit-active');
  }
  
  function changeOrbitColor18() {
    var mimasOrbitElement = document.querySelector('.mimas-orbit');
    mimasOrbitElement.classList.add('orbit-active');
  }
  
  function resetOrbitColor19() {
    var thehtysOrbitElement = document.querySelector('.thehtys-orbit');
    thehtysOrbitElement.classList.remove('orbit-active');
  }
  
  function changeOrbitColor19() {
    var thehtysOrbitElement = document.querySelector('.thehtys-orbit');
    thehtysOrbitElement.classList.add('orbit-active');
  }
  
  function resetOrbitColor20() {
    var dioneOrbitElement = document.querySelector('.dione-orbit');
    dioneOrbitElement.classList.remove('orbit-active');
  }
  
  function changeOrbitColor20() {
    var dioneOrbitElement = document.querySelector('.dione-orbit');
    dioneOrbitElement.classList.add('orbit-active');
  }
  function resetOrbitColor21() {
    var lapetusOrbitElement = document.querySelector('.lapetus-orbit');
    lapetusOrbitElement.classList.remove('orbit-active');
  }
  
  function changeOrbitColor21() {
    var lapetusOrbitElement = document.querySelector('.lapetus-orbit');
    lapetusOrbitElement.classList.add('orbit-active');
  }
  function resetOrbitColor22() {
    var deimosOrbitElement = document.querySelector('.deimos-orbit');
    deimosOrbitElement.classList.remove('orbit-active');
  }
  
  function changeOrbitColor22() {
    var deimosOrbitElement = document.querySelector('.deimos-orbit');
    deimosOrbitElement.classList.add('orbit-active');
  }
  function resetOrbitColor23() {
    var phobosOrbitElement = document.querySelector('.phobos-orbit');
    phobosOrbitElement.classList.remove('orbit-active');
  }
  
  function changeOrbitColor23() {
    var phobosOrbitElement = document.querySelector('.phobos-orbit');
    phobosOrbitElement.classList.add('orbit-active');
  }
  function resetOrbitColor24() {
    var mirandaOrbitElement = document.querySelector('.miranda-orbit');
    mirandaOrbitElement.classList.remove('orbit-active');
  }
  
  function changeOrbitColor24() {
    var mirandaOrbitElement = document.querySelector('.miranda-orbit');
    mirandaOrbitElement.classList.add('orbit-active');
  }

  