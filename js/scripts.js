(function($) {
    "use strict";

    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 60
    });

    $('#topNav').affix({
        offset: {
            top: 200
        }
    });
    
    new WOW().init();
    
    $('a.page-scroll').bind('click', function(event) {
        var $ele = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($ele.attr('href')).offset().top - 60)
        }, 1450, 'easeInOutExpo');
        event.preventDefault();
    });
    
    $('.navbar-collapse ul li a').click(function() {
        /* always close responsive nav after click */
        $('.navbar-toggle:visible').click();
    });

    $('#galleryModal').on('show.bs.modal', function (e) {
       $('#galleryImage').attr("src",$(e.relatedTarget).data("src"));
    });

})(jQuery);

/*
Template code
***************************
*/



let localizationTable = {
  en: {
    intro:'Intro',
    aboutMe:'About me',
    gallery:'Gallery',
    toggleVideo:'Toggle Video',
    getStarted:'Get started!',
    browserNotSupportVideo: 'Your browser does not support the video tag.',
    welcomePage: 'Welcome on my page!',
    welcomeContent: 'This is a small presentation about myself, done as a project for webdesign course. Scroll down for more information about me, see the photo gallery and find my LinkedIn and Instagram profiles.',
    findMe: 'Find me',
    programmer: 'Professional programmer',
    traveller: 'Travelling fan',
    hobbist: 'Hobbist',
    programmerContent: 'I am programming currently in telco buisness. Mostly in C++, but briefly also in Java, lua, ttcn-3. Previously worked with C on AVR platform.',
    travellerContent: 'During vacations I travel a lot. Especially I like to visit islands, I have been already to most of Canary Islands, Mallorca, Bornholm, Mauritius and also some smaller ones of Croatia and Greece while sailing there.',
    hobbistContent: 'I got quite a few hobbies. I like learning new things, that is why I ended up as programmer although I have mechatronic degree. It also is one of the reasons I created this page. Currently I am learning Spanish. I also like sailing and almost all kinds of music.',
    myCareer: 'My career',
    nokiaTitle: 'NOKIA - Software engineer',
    nokiaContent: '2018 - Now: Working as a software developer in LTE network development. Recently started part time work as a Scrum Master.',
    delphiTitle: 'DELPHI (currently APTIV) - Process engineer',
    delphiContent: '2015-2018: Developing applications and devices to improve production processes',
    graduateTitle: 'Graduated',
    graduateContent: '2018: Master\'s degree in mechatronic engineering on University of Science and Technology AGH in Cracow',
    coursesTitle: 'Courses',
    coursesContent: 'SAFe practitioner, driver\'s licence, skipper\'s licence',
    skillsTitle: 'Skills',
    skillsContent: 'Good teamworking skills, analytical skills, quite fluent with computers. Currently I am most fluent with C++, but I have also brief knowlegde of C, Java, C#, lua, ttcn-3, html, css, js.',
    languagesTitle: 'Languages',
    languagesContent: 'Polish, English, Spanish',
    findMeOn:'Find me on'
  },
  pl: {
    intro:'Wstęp',
    aboutMe:'O mnie',
    gallery:'Galeria',
    toggleVideo:'Wyłącz wideo',
    getStarted:'Zacznijmy!',
    browserNotSupportVideo: 'Twoja przeglądarka nie wspiera video w kodzie HTML.',
    welcomePage: 'Witaj na mojej stronie!',
    welcomeContent: 'To drobna prezentacja mojej osoby którą zrobiłem w ramach kursu tworzenia stron WWW. Przesuwaj w dół by przeczytać więcej o mnie, zobaczyć galerię zdjęć i znaleźć mnie na LinkedIn lub Instagramie.',
    findMe: 'Kontakt',
    programmer: 'Zawodowy programista',
    traveller: 'Amator podróży',
    hobbist: 'Zapalony hobbysta',
    programmerContent: 'Aktualnie programuje w branży telekomunikacyjnej. Głównie w C++, ale mam styczność także z Java, lua, ttcn-3. Wcześniej pracowałem też w C na platformie AVR.',
    travellerContent: 'Urlopy spędzam głównie podróżując. Szególnie lubie odwiedzać wyspy, byłem już na większości z Wysp Kanaryjskich, Majorce, Bornholmie, Mauritiusie i paru innych żeglując na Chorwacji i w Grecji.',
    hobbistContent: 'Mam całkiem szerokie zainteresownia. Lubię uczyć się nowych rzeczy, dlatego skończyłem jako programista pomimo iż ukonczyłem mechatronikę. To także jeden z powodów przez które stworzyłem tą stron. Aktualnie uczę się hiszpańskiego. Lubię także żeglować i prawie każdy rodzaj muzyki.',
    myCareer: 'Moja kariera',
    nokiaTitle: 'NOKIA - Inżynier oprogramowania',
    nokiaContent: '2018 - Teraz: Pracuje jako programista rozwijając i utrzymując sieć LTE. Niedawno zaczałem także cześciowo pełnić obowiązki Scrum Mastera.',
    delphiTitle: 'DELPHI (aktualnie APTIV) - Inżynier procesu',
    delphiContent: '2015-2018: Rozwijałem oprogramowanie i urządzenia w celu ulepszania procesu produkcji',
    graduateTitle: 'Dyplom',
    graduateContent: '2018: Dyplom magistra inżynierii mechatronicznej na Akademi Górniczo-Hutniczej w Krakowie',
    coursesTitle: 'Kursy',
    coursesContent: 'SAFe practitioner, prawo jazdy, patent żeglarski',
    skillsTitle: 'Umiejętności',
    skillsContent: 'Dobre umiejętności pracy w zespole, umiejętności analityczne, dobrze radzę sobie z komputerami. Aktulanie najlepiej radzę sobie z C++, ale znam też podstawy C, Java, C#, lua, ttcn-3, html, css, js.',
    languagesTitle: 'Języki',
    languagesContent: 'Polski, Angielski, Hiszpański',
    findMeOn:'Znajdź mnie na'
  },
  es: {
    intro:'Intro',
    aboutMe:'Sobre mí',
    gallery:'Galería',
    toggleVideo:'Desactivar Video',
    getStarted:'Comencemos!',
    browserNotSupportVideo: 'Tu navegador no soporta HTML video.',
    welcomePage: 'Bienvenidos a mi página!',
    welcomeContent: 'Esta es una pequeña presentación sobre mí, hecha como proyecto para un curso de diseño web. Desplácese hacia abajo para obtener más información sobre mí, ver la galería de fotos y mis perfiles de LinkedIn e Instagram.',
    findMe: ' Encontrarme',
    programmer: 'Un programador profesional',
    traveller: 'Un viajero',
    hobbist: 'Un aficionado',
    programmerContent: 'Ahora estoy programando en la empresa de telecomunicaciones. Principalmente en C++, pero un poco también en Java, lua, ttcn-3. Anterior trabajé con C en la plataforma AVR también.',
    travellerContent: 'Viajo mucho en mis vacaciones. Me gusta mucho visitar las islas, estuve en la mayoria de Islas Canarias, Mallorca, Bornholm, Mauricio y, durante los cruceros, algunas pequeñas islas de Croacia y Grecia.',
    hobbistContent: 'Tengo algunos pasatiempos. Me gusta aprender cosas nuevas, por eso soy programador aunque me he graduado en mecatrónica. Por eso, también, creé esta página. Actualmente, aprendo Español en nivel B1. Además, me gusta mucho navegar en barco de vela y escuchar casi todo tipo de música.',
    myCareer: 'Mi carrera ',
    nokiaTitle: 'NOKIA - Ingeniero de software',
    nokiaContent: '2018 - Presente: Estoy trabajando como ingeniero de software en desarollo de LTE red. Acabo de empazar a trabajar en parte como ScrumMaster.',
    delphiTitle: 'DELPHI (Ahora es APTIV) - Ingeniero de procesos.',
    delphiContent: '2015-2018: Desarrollaba de aplicaciones y dispositivos para mejorar los procesos de producción',
    graduateTitle: 'Carrera',
    graduateContent: '2018: Maestría en Ingeniería Mecatrónica en la Universidad de Ciencia y Tecnología AGH en Cracovia',
    coursesTitle: 'Cursos',
    coursesContent: 'SAFe practitioner, licencia de conducir, licencia de navegación(velero)',
    skillsTitle: 'Habilidades',
    skillsContent: 'Buenas habilidades de trabajo en equipo, habilidades analíticas, bastante fluidez con los ordenadores. Actualmente soy más fluido con C++, pero también tengo uns conocimiento de C, Java, C#, lua, ttcn-3, html, css, js.',
    languagesTitle: 'Lenguajes',
    languagesContent: 'Polaco, Inglese, Español',
    findMeOn:'Encuéntrame en '
    
  }
}

window.onload = function() {
  addRandomQuoteToPage();
  changeLanguageAccordingToUrlOrConfig();
};

function addRandomQuoteToPage() {
  let myQuotes = ['Hi! Welcome, hello!', 
  'Let\'s sail!',
  'And he set sail again...',
  'Staying home today.',
  'We and the crater :)',
  'Whoa, there are more islands here',
  'Pigeons, pigeons everywhere!',
  'Kitty, kitty, meow',
  'Waves',
  'Nice',
  'Emm, what now?'
  ];
document.getElementById('my-quote').innerHTML = '"'+ myQuotes[Math.floor(myQuotes.length * Math.random())]+'"';  
}

function changeLanguageAccordingToUrlOrConfig() {
  let params = (new URL(document.location)).searchParams;
  let lang = params.get('lang');
  if (languageHasTranslation(lang)) {
    changeLanguage(lang);
  }
  else {
    changeLanguageBasedOnBrowserConfig();
  }
}

function changeLanguageBasedOnBrowserConfig() {
  let currentBrowserLanguage = getLang();
  if(currentBrowserLanguage != undefined)
  {
    changeLanguage(returnTranslatedLanguageOrDefault(currentBrowserLanguage));
  }
}

function changeLanguage(translatedLanguageTag) {
    $("#language").val(translatedLanguageTag).change();
}

function returnTranslatedLanguageOrDefault(rfc5646LanguageTag) {
  if (languageHasTranslation(rfc5646LanguageTag)) {
    return rfc5646LanguageTag;
  }
  return 'en';
}

function languageHasTranslation(rfc5646LanguageTag) {
  return (0 != $('#language option[value='+rfc5646LanguageTag+']').length);
}

function getLang() { //returns value from RFC 5646: Tags for Identifying Languages (also known as BCP 47)
  if (navigator.languages != undefined) 
    return navigator.languages[0]; 
  return navigator.language;
}

function localizeAll() {
  updateUrlStringWithLangParam();
  for (element of (document.querySelectorAll('[data-localizationName]'))) {
    element.innerHTML = localizeWord(element.getAttribute('data-localizationName'));
  }
}

function updateUrlStringWithLangParam() {
  let params = (new URL(document.location)).searchParams;
  params.set('lang',getLanguageFromDomElement());
  let newUrl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?' + params;    
  window.history.pushState({ path: newUrl }, '', newUrl);
}

function localizeWord(word) {
  return (localizationTable[getLanguageFromDomElement()][word]);
}

function getLanguageFromDomElement() {
  return document.getElementById('language').value;
}
