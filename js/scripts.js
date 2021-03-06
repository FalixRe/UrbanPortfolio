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
    intro:'Wst??p',
    aboutMe:'O mnie',
    gallery:'Galeria',
    toggleVideo:'Wy????cz wideo',
    getStarted:'Zacznijmy!',
    browserNotSupportVideo: 'Twoja przegl??darka nie wspiera video w kodzie HTML.',
    welcomePage: 'Witaj na mojej stronie!',
    welcomeContent: 'To drobna prezentacja mojej osoby kt??r?? zrobi??em w ramach kursu tworzenia stron WWW. Przesuwaj w d???? by przeczyta?? wi??cej o mnie, zobaczy?? galeri?? zdj???? i znale???? mnie na LinkedIn lub Instagramie.',
    findMe: 'Kontakt',
    programmer: 'Zawodowy programista',
    traveller: 'Amator podr????y',
    hobbist: 'Zapalony hobbysta',
    programmerContent: 'Aktualnie programuje w bran??y telekomunikacyjnej. G????wnie w C++, ale mam styczno???? tak??e z Java, lua, ttcn-3. Wcze??niej pracowa??em te?? w C na platformie AVR.',
    travellerContent: 'Urlopy sp??dzam g????wnie podr????uj??c. Szeg??lnie lubie odwiedza?? wyspy, by??em ju?? na wi??kszo??ci z Wysp Kanaryjskich, Majorce, Bornholmie, Mauritiusie i paru innych ??egluj??c na Chorwacji i w Grecji.',
    hobbistContent: 'Mam ca??kiem szerokie zainteresownia. Lubi?? uczy?? si?? nowych rzeczy, dlatego sko??czy??em jako programista pomimo i?? ukonczy??em mechatronik??. To tak??e jeden z powod??w przez kt??re stworzy??em t?? stron. Aktualnie ucz?? si?? hiszpa??skiego. Lubi?? tak??e ??eglowa?? i prawie ka??dy rodzaj muzyki.',
    myCareer: 'Moja kariera',
    nokiaTitle: 'NOKIA - In??ynier oprogramowania',
    nokiaContent: '2018 - Teraz: Pracuje jako programista rozwijaj??c i utrzymuj??c sie?? LTE. Niedawno zacza??em tak??e cze??ciowo pe??ni?? obowi??zki Scrum Mastera.',
    delphiTitle: 'DELPHI (aktualnie APTIV) - In??ynier procesu',
    delphiContent: '2015-2018: Rozwija??em oprogramowanie i urz??dzenia w celu ulepszania procesu produkcji',
    graduateTitle: 'Dyplom',
    graduateContent: '2018: Dyplom magistra in??ynierii mechatronicznej na Akademi G??rniczo-Hutniczej w Krakowie',
    coursesTitle: 'Kursy',
    coursesContent: 'SAFe practitioner, prawo jazdy, patent ??eglarski',
    skillsTitle: 'Umiej??tno??ci',
    skillsContent: 'Dobre umiej??tno??ci pracy w zespole, umiej??tno??ci analityczne, dobrze radz?? sobie z komputerami. Aktulanie najlepiej radz?? sobie z C++, ale znam te?? podstawy C, Java, C#, lua, ttcn-3, html, css, js.',
    languagesTitle: 'J??zyki',
    languagesContent: 'Polski, Angielski, Hiszpa??ski',
    findMeOn:'Znajd?? mnie na'
  },
  es: {
    intro:'Intro',
    aboutMe:'Sobre m??',
    gallery:'Galer??a',
    toggleVideo:'Desactivar Video',
    getStarted:'Comencemos!',
    browserNotSupportVideo: 'Tu navegador no soporta HTML video.',
    welcomePage: 'Bienvenidos a mi p??gina!',
    welcomeContent: 'Esta es una peque??a presentaci??n sobre m??, hecha como proyecto para un curso de dise??o web. Despl??cese hacia abajo para obtener m??s informaci??n sobre m??, ver la galer??a de fotos y mis perfiles de LinkedIn e Instagram.',
    findMe: ' Encontrarme',
    programmer: 'Un programador profesional',
    traveller: 'Un viajero',
    hobbist: 'Un aficionado',
    programmerContent: 'Ahora estoy programando en la empresa de telecomunicaciones. Principalmente en C++, pero un poco tambi??n en Java, lua, ttcn-3. Anterior trabaj?? con C en la plataforma AVR tambi??n.',
    travellerContent: 'Viajo mucho en mis vacaciones. Me gusta mucho visitar las islas, estuve en la mayoria de Islas Canarias, Mallorca, Bornholm, Mauricio y, durante los cruceros, algunas peque??as islas de Croacia y Grecia.',
    hobbistContent: 'Tengo algunos pasatiempos. Me gusta aprender cosas nuevas, por eso soy programador aunque me he graduado en mecatr??nica. Por eso, tambi??n, cre?? esta p??gina. Actualmente, aprendo Espa??ol en nivel B1. Adem??s, me gusta mucho navegar en barco de vela y escuchar casi todo tipo de m??sica.',
    myCareer: 'Mi carrera ',
    nokiaTitle: 'NOKIA - Ingeniero de software',
    nokiaContent: '2018 - Presente: Estoy trabajando como ingeniero de software en desarollo de LTE red. Acabo de empazar a trabajar en parte como ScrumMaster.',
    delphiTitle: 'DELPHI (Ahora es APTIV) - Ingeniero de procesos.',
    delphiContent: '2015-2018: Desarrollaba de aplicaciones y dispositivos para mejorar los procesos de producci??n',
    graduateTitle: 'Carrera',
    graduateContent: '2018: Maestr??a en Ingenier??a Mecatr??nica en la Universidad de Ciencia y Tecnolog??a AGH en Cracovia',
    coursesTitle: 'Cursos',
    coursesContent: 'SAFe practitioner, licencia de conducir, licencia de navegaci??n(velero)',
    skillsTitle: 'Habilidades',
    skillsContent: 'Buenas habilidades de trabajo en equipo, habilidades anal??ticas, bastante fluidez con los ordenadores. Actualmente soy m??s fluido con C++, pero tambi??n tengo uns conocimiento de C, Java, C#, lua, ttcn-3, html, css, js.',
    languagesTitle: 'Lenguajes',
    languagesContent: 'Polaco, Inglese, Espa??ol',
    findMeOn:'Encu??ntrame en '
    
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
