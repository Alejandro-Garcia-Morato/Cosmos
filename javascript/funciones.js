function cambiarIdiomaHome(idioma) {
    if (idioma === 'es') {
        document.getElementById('menu-lista_planetas-sol').innerHTML = 'Sol';
        document.getElementById('menu-lista_planetas-mercurio').innerHTML = 'Mercurio';
        document.getElementById('menu-lista_planetas-tierra').innerHTML = 'Tierra';
        document.getElementById('menu-lista_planetas-luna').innerHTML = 'Luna';
        document.getElementById('menu-lista_planetas-marte').innerHTML = 'Marte';
        document.getElementById('menu-lista_planetas-jupiter').innerHTML = 'Júpiter';
        document.getElementById('menu-lista_planetas-saturno').innerHTML = 'Saturno';
        document.getElementById('menu-lista_planetas-urano').innerHTML = 'Urano';
        document.getElementById('menu-lista_planetas-neptuno').innerHTML = 'Neptuno';
        document.getElementById('header-titulo').innerHTML = 'Descubre el cosmos';
        document.getElementById('header-subtitulo').innerHTML = '"El cosmos es todo lo que es, todo lo que fue y todo lo que alguna vez será" - Carl Sagan';
        document.getElementById('home-articulo-planeta-titulo_sol').innerHTML = 'Sol';
        document.getElementById('home-articulo-planeta-titulo_mercurio').innerHTML = 'Mercurio';
        document.getElementById('home-articulo-planeta-titulo_tierra').innerHTML = 'Tierra';
        document.getElementById('home-articulo-planeta-titulo_luna').innerHTML = 'Luna';
        document.getElementById('home-articulo-planeta-titulo_marte').innerHTML = 'Marte';
        document.getElementById('home-articulo-planeta-titulo_jupiter').innerHTML = 'Júpiter';
        document.getElementById('home-articulo-planeta-titulo_saturno').innerHTML = 'Saturno';
        document.getElementById('home-articulo-planeta-titulo_urano').innerHTML = 'Urano';
        document.getElementById('home-articulo-planeta-titulo_neptuno').innerHTML = 'Neptuno';
        document.getElementById('footer-desarrolladores').innerHTML = 'Página desarrollada por: Teresa María Fontela Lorenzo | Izan Gallego Torres | Alejandro García-Morato Ramos';
        document.getElementById('footer-info').innerHTML = 'Han participado en la elaboración de esta web los alumnos de Marina Martínez Bonat de 3º de ESO A, B y C y los alumnos de Alicia Portero Hernández dentro del programa de formación en competencias STEAM en el que participa el IES Juan Bosco de Alcázar de San Juan';
        document.getElementById('footer-copy').innerHTML = '© 2023 Todos los derechos reservados';
    } else if (idioma === 'en') {
        document.getElementById('menu-lista_planetas-sol').innerHTML = 'Sun';
        document.getElementById('menu-lista_planetas-mercurio').innerHTML = 'Mercury';
        document.getElementById('menu-lista_planetas-tierra').innerHTML = 'Earth';
        document.getElementById('menu-lista_planetas-luna').innerHTML = 'Moon';
        document.getElementById('menu-lista_planetas-marte').innerHTML = 'Mars';
        document.getElementById('menu-lista_planetas-jupiter').innerHTML = 'Jupiter';
        document.getElementById('menu-lista_planetas-saturno').innerHTML = 'Saturn';
        document.getElementById('menu-lista_planetas-urano').innerHTML = 'Uranus';
        document.getElementById('menu-lista_planetas-neptuno').innerHTML = 'Neptune';
        document.getElementById('header-titulo').innerHTML = 'Discover the cosmos';
        document.getElementById('header-subtitulo').innerHTML = '"The Cosmos is all that is or was or ever will be" - Carl Sagan';
        document.getElementById('home-articulo-planeta-titulo_sol').innerHTML = 'Sun';
        document.getElementById('home-articulo-planeta-titulo_mercurio').innerHTML = 'Mercury';
        document.getElementById('home-articulo-planeta-titulo_tierra').innerHTML = 'Earth';
        document.getElementById('home-articulo-planeta-titulo_luna').innerHTML = 'Moon';
        document.getElementById('home-articulo-planeta-titulo_marte').innerHTML = 'Mars';
        document.getElementById('home-articulo-planeta-titulo_jupiter').innerHTML = 'Jupiter';
        document.getElementById('home-articulo-planeta-titulo_saturno').innerHTML = 'Saturn';
        document.getElementById('home-articulo-planeta-titulo_urano').innerHTML = 'Uranus';
        document.getElementById('home-articulo-planeta-titulo_neptuno').innerHTML = 'Neptune';
        document.getElementById('footer-desarrolladores').innerHTML = 'Page developed by: Teresa María Fontela Lorenzo | Izan Gallego Torres | Alejandro García-Morato Ramos';
        document.getElementById('footer-info').innerHTML = 'The students of Marina Martínez Bonat in the 3rd year of ESO A, B and C and the students of Alicia Portero Hernández have participated in the development of this website within the training program in STEAM competences in which the IES Juan Bosco de Alcázar de San Juan participates';
        document.getElementById('footer-copy').innerHTML = '© 2023 All rights reserved';
    }
}

function cambiarIdiomaSol(idioma) {
    if (idioma === 'es') {
        document.getElementById('menu-lista_planetas-sol').innerHTML = 'Sol';
        document.getElementById('menu-lista_planetas-mercurio').innerHTML = 'Mercurio';
        document.getElementById('menu-lista_planetas-tierra').innerHTML = 'Tierra';
        document.getElementById('menu-lista_planetas-luna').innerHTML = 'Luna';
        document.getElementById('menu-lista_planetas-marte').innerHTML = 'Marte';
        document.getElementById('menu-lista_planetas-jupiter').innerHTML = 'Júpiter';
        document.getElementById('menu-lista_planetas-saturno').innerHTML = 'Saturno';
        document.getElementById('menu-lista_planetas-urano').innerHTML = 'Urano';
        document.getElementById('menu-lista_planetas-neptuno').innerHTML = 'Neptuno';
        document.getElementById('main-cabecera-titulo-sol').innerHTML = 'sol';
        document.getElementById('footer-desarrolladores').innerHTML = 'Página desarrollada por: Teresa María Fontela Lorenzo | Izan Gallego Torres | Alejandro García-Morato Ramos';
        document.getElementById('footer-info').innerHTML = 'Han participado en la elaboración de esta web los alumnos de Marina Martínez Bonat de 3º de ESO A, B y C y los alumnos de Alicia Portero Hernández dentro del programa de formación en competencias STEAM en el que participa el IES Juan Bosco de Alcázar de San Juan';
        document.getElementById('footer-copy').innerHTML = '© 2023 Todos los derechos reservados';
    } else if (idioma === 'en') {
        document.getElementById('menu-lista_planetas-sol').innerHTML = 'Sun';
        document.getElementById('menu-lista_planetas-mercurio').innerHTML = 'Mercury';
        document.getElementById('menu-lista_planetas-tierra').innerHTML = 'Earth';
        document.getElementById('menu-lista_planetas-luna').innerHTML = 'Moon';
        document.getElementById('menu-lista_planetas-marte').innerHTML = 'Mars';
        document.getElementById('menu-lista_planetas-jupiter').innerHTML = 'Jupiter';
        document.getElementById('menu-lista_planetas-saturno').innerHTML = 'Saturn';
        document.getElementById('menu-lista_planetas-urano').innerHTML = 'Uranus';
        document.getElementById('menu-lista_planetas-neptuno').innerHTML = 'Neptune';
        document.getElementById('main-cabecera-titulo-sol').innerHTML = 'sun';
        document.getElementById('footer-desarrolladores').innerHTML = 'Page developed by: Teresa María Fontela Lorenzo | Izan Gallego Torres | Alejandro García-Morato Ramos';
        document.getElementById('footer-info').innerHTML = 'The students of Marina Martínez Bonat in the 3rd year of ESO A, B and C and the students of Alicia Portero Hernández have participated in the development of this website within the training program in STEAM competences in which the IES Juan Bosco de Alcázar de San Juan participates';
        document.getElementById('footer-copy').innerHTML = '© 2023 All rights reserved';
    }
}

function cambiarIdiomaMercurio(idioma) {
    if (idioma === 'es') {
        document.getElementById('menu-lista_planetas-sol').innerHTML = 'Sol';
        document.getElementById('menu-lista_planetas-mercurio').innerHTML = 'Mercurio';
        document.getElementById('menu-lista_planetas-tierra').innerHTML = 'Tierra';
        document.getElementById('menu-lista_planetas-luna').innerHTML = 'Luna';
        document.getElementById('menu-lista_planetas-marte').innerHTML = 'Marte';
        document.getElementById('menu-lista_planetas-jupiter').innerHTML = 'Júpiter';
        document.getElementById('menu-lista_planetas-saturno').innerHTML = 'Saturno';
        document.getElementById('menu-lista_planetas-urano').innerHTML = 'Urano';
        document.getElementById('menu-lista_planetas-neptuno').innerHTML = 'Neptuno';
        document.getElementById('main-cabecera-titulo-mercurio').innerHTML = 'mercurio';
        document.getElementById('articulo-planetas-titulo-etimologia').innerHTML = 'etimología';
        document.getElementById('articulo-planetas-texto-etimologia').innerHTML = 'Su nombre viene de la mitología romana que es el equivalente de hermes: Mercurio.';
        document.getElementById('articulo-planetas-titulo-informacion').innerHTML = 'información';
        document.getElementById('articulo-planetas-texto-informacion1').innerHTML = "La duración de un día equivale a 58'6 días terrestres. Un año equivale a 87'87 días terrestres.";
        document.getElementById('articulo-planetas-texto-informacion2').innerHTML = 'La temperatura del agua tiene una media de -160º pudiendo alcanzar los -180º de noche y 160º de día. Hay agua en estado gaseoso y en hielo.';
        document.getElementById('articulo-planetas-texto-informacion3').innerHTML = 'Está llena de cráteres, grietas y de marcas de meteoritos.';
        document.getElementById('articulo-planetas-texto-informacion4').innerHTML = 'No podríamos ni andar ni saltar, flotaríamos. En la Tierra pesamos 100kg y en mercurio pesaríamos 38kg.';
        document.getElementById('articulo-planetas-texto-informacion5').innerHTML = 'La edad del planeta es de 4.500.000.000 años.';
        document.getElementById('aside-titulo').innerHTML = 'Datos Curiosos:';
        document.getElementById('aside-planetas-texto1').innerHTML = ' Para llegar desde la Tierra se tardan 40 días';
        document.getElementById('aside-planetas-texto2').innerHTML = ' Está a unos 80.000 kilómetros desde la Tierra';
        document.getElementById('aside-planetas-texto3').innerHTML = ' Su color es grisáceo';
        document.getElementById('footer-desarrolladores').innerHTML = 'Página desarrollada por: Teresa María Fontela Lorenzo | Izan Gallego Torres | Alejandro García-Morato Ramos';
        document.getElementById('footer-info').innerHTML = 'Han participado en la elaboración de esta web los alumnos de Marina Martínez Bonat de 3º de ESO A, B y C y los alumnos de Alicia Portero Hernández dentro del programa de formación en competencias STEAM en el que participa el IES Juan Bosco de Alcázar de San Juan';
        document.getElementById('footer-copy').innerHTML = '© 2023 Todos los derechos reservados';
    } else if (idioma === 'en') {
        document.getElementById('menu-lista_planetas-sol').innerHTML = 'Sun';
        document.getElementById('menu-lista_planetas-mercurio').innerHTML = 'Mercury';
        document.getElementById('menu-lista_planetas-tierra').innerHTML = 'Earth';
        document.getElementById('menu-lista_planetas-luna').innerHTML = 'Moon';
        document.getElementById('menu-lista_planetas-marte').innerHTML = 'Mars';
        document.getElementById('menu-lista_planetas-jupiter').innerHTML = 'Jupiter';
        document.getElementById('menu-lista_planetas-saturno').innerHTML = 'Saturn';
        document.getElementById('menu-lista_planetas-urano').innerHTML = 'Uranus';
        document.getElementById('menu-lista_planetas-neptuno').innerHTML = 'Neptune';
        document.getElementById('main-cabecera-titulo-mercurio').innerHTML = 'mercury';
        document.getElementById('articulo-planetas-titulo-etimologia').innerHTML = 'etymology';
        document.getElementById('articulo-planetas-texto-etimologia').innerHTML = 'Its name comes from Roman mythology, which is the equivalent of Hermes: Mercury.';
        document.getElementById('articulo-planetas-titulo-informacion').innerHTML = 'information';
        document.getElementById('articulo-planetas-texto-informacion1').innerHTML = "The length of a day is equal to 58.6 Earth days. One year equals 87.87 Earth days.";
        document.getElementById('articulo-planetas-texto-informacion2').innerHTML = 'The water temperature has an average of -160º and can reach -180º at night and 160º during the day. There is water in a gaseous state and in ice.';
        document.getElementById('articulo-planetas-texto-informacion3').innerHTML = 'It is full of craters, cracks and meteorite marks.';
        document.getElementById('articulo-planetas-texto-informacion4').innerHTML = 'We could neither walk nor jump, we would float. On Earth we weigh 100kg and on Mercury we would weigh 38kg.';
        document.getElementById('articulo-planetas-texto-informacion5').innerHTML = 'The age of the planet is 4,500,000,000 years.';
        document.getElementById('aside-titulo').innerHTML = 'Fun facts:';
        document.getElementById('aside-planetas-texto1').innerHTML = ' To get there from Earth it takes 40 days';
        document.getElementById('aside-planetas-texto2').innerHTML = ' It is about 80,000 kilometers from Earth';
        document.getElementById('aside-planetas-texto3').innerHTML = ' Its color is greyish';
        document.getElementById('footer-desarrolladores').innerHTML = 'Page developed by: Teresa María Fontela Lorenzo | Izan Gallego Torres | Alejandro García-Morato Ramos';
        document.getElementById('footer-info').innerHTML = 'The students of Marina Martínez Bonat in the 3rd year of ESO A, B and C and the students of Alicia Portero Hernández have participated in the development of this website within the training program in STEAM competences in which the IES Juan Bosco de Alcázar de San Juan participates';
        document.getElementById('footer-copy').innerHTML = '© 2023 All rights reserved';
    }
}

function cambiarIdiomaVenus(idioma) {
    if (idioma === 'es') {
        document.getElementById('menu-lista_planetas-sol').innerHTML = 'Sol';
        document.getElementById('menu-lista_planetas-mercurio').innerHTML = 'Mercurio';
        document.getElementById('menu-lista_planetas-tierra').innerHTML = 'Tierra';
        document.getElementById('menu-lista_planetas-luna').innerHTML = 'Luna';
        document.getElementById('menu-lista_planetas-marte').innerHTML = 'Marte';
        document.getElementById('menu-lista_planetas-jupiter').innerHTML = 'Júpiter';
        document.getElementById('menu-lista_planetas-saturno').innerHTML = 'Saturno';
        document.getElementById('menu-lista_planetas-urano').innerHTML = 'Urano';
        document.getElementById('menu-lista_planetas-neptuno').innerHTML = 'Neptuno';
        document.getElementById('footer-desarrolladores').innerHTML = 'Página desarrollada por: Teresa María Fontela Lorenzo | Izan Gallego Torres | Alejandro García-Morato Ramos';
        document.getElementById('footer-info').innerHTML = 'Han participado en la elaboración de esta web los alumnos de Marina Martínez Bonat de 3º de ESO A, B y C y los alumnos de Alicia Portero Hernández dentro del programa de formación en competencias STEAM en el que participa el IES Juan Bosco de Alcázar de San Juan';
        document.getElementById('footer-copy').innerHTML = '© 2023 Todos los derechos reservados';
    } else if (idioma === 'en') {
        document.getElementById('menu-lista_planetas-sol').innerHTML = 'Sun';
        document.getElementById('menu-lista_planetas-mercurio').innerHTML = 'Mercury';
        document.getElementById('menu-lista_planetas-tierra').innerHTML = 'Earth';
        document.getElementById('menu-lista_planetas-luna').innerHTML = 'Moon';
        document.getElementById('menu-lista_planetas-marte').innerHTML = 'Mars';
        document.getElementById('menu-lista_planetas-jupiter').innerHTML = 'Jupiter';
        document.getElementById('menu-lista_planetas-saturno').innerHTML = 'Saturn';
        document.getElementById('menu-lista_planetas-urano').innerHTML = 'Uranus';
        document.getElementById('menu-lista_planetas-neptuno').innerHTML = 'Neptune';
        document.getElementById('footer-desarrolladores').innerHTML = 'Page developed by: Teresa María Fontela Lorenzo | Izan Gallego Torres | Alejandro García-Morato Ramos';
        document.getElementById('footer-info').innerHTML = 'The students of Marina Martínez Bonat in the 3rd year of ESO A, B and C and the students of Alicia Portero Hernández have participated in the development of this website within the training program in STEAM competences in which the IES Juan Bosco de Alcázar de San Juan participates';
        document.getElementById('footer-copy').innerHTML = '© 2023 All rights reserved';
    }
}

function cambiarIdiomaTierra(idioma) {
    if (idioma === 'es') {
        document.getElementById('menu-lista_planetas-sol').innerHTML = 'Sol';
        document.getElementById('menu-lista_planetas-mercurio').innerHTML = 'Mercurio';
        document.getElementById('menu-lista_planetas-tierra').innerHTML = 'Tierra';
        document.getElementById('menu-lista_planetas-luna').innerHTML = 'Luna';
        document.getElementById('menu-lista_planetas-marte').innerHTML = 'Marte';
        document.getElementById('menu-lista_planetas-jupiter').innerHTML = 'Júpiter';
        document.getElementById('menu-lista_planetas-saturno').innerHTML = 'Saturno';
        document.getElementById('menu-lista_planetas-urano').innerHTML = 'Urano';
        document.getElementById('menu-lista_planetas-neptuno').innerHTML = 'Neptuno';
        document.getElementById('main-cabecera-titulo-tierra').innerHTML = 'la tierra';
        document.getElementById('articulo-planetas-titulo-etimologia').innerHTML = 'etimología';
        document.getElementById('articulo-planetas-texto-etimologia').innerHTML = 'Su nombre proviene del latín "terra" con mismo significado que el nuestro y relacionado con el verbo "torror", que significa secar o chamuscar.';
        document.getElementById('articulo-planetas-titulo-informacion').innerHTML = 'información';
        document.getElementById('articulo-planetas-texto-informacion1').innerHTML = "La temperatura media es 15º gracias a la presencia de gases de efecto invernadero en la atmósfera.";
        document.getElementById('articulo-planetas-texto-informacion2').innerHTML = 'El volumen de agua en la tierra es de 1500 millones de Km cúbicos, de los cuales la mayoría es agua salada, aunque también hay presencia de agua dulce en los tres estados.';
        document.getElementById('articulo-planetas-texto-informacion3').innerHTML = 'La atmosfera nos aporta gases para respirar, el más importante es el oxígeno. Nos protege del impacto de meteoritos. La atmosfera esta compuestas de nitrógeno, argón, oxígeno, dióxido de carbono y vapor de agua.';
        document.getElementById('aside-titulo').innerHTML = 'Datos Curiosos:';
        document.getElementById('aside-planetas-texto1').innerHTML = ' Un día dura 12h y la noche 12h y el año 365 días.';
        document.getElementById('aside-planetas-texto2').innerHTML = ' La mayoría de la superficie de la tierra esta compuesta por agua y lo de más por tierra.';
        document.getElementById('aside-planetas-texto3').innerHTML = ' La gravedad no afecta de igual manera en todos los puntos de la Tierra.';
        document.getElementById('footer-desarrolladores').innerHTML = 'Página desarrollada por: Teresa María Fontela Lorenzo | Izan Gallego Torres | Alejandro García-Morato Ramos';
        document.getElementById('footer-info').innerHTML = 'Han participado en la elaboración de esta web los alumnos de Marina Martínez Bonat de 3º de ESO A, B y C y los alumnos de Alicia Portero Hernández dentro del programa de formación en competencias STEAM en el que participa el IES Juan Bosco de Alcázar de San Juan';
        document.getElementById('footer-copy').innerHTML = '© 2023 Todos los derechos reservados';
    } else if (idioma === 'en') {
        document.getElementById('menu-lista_planetas-sol').innerHTML = 'Sun';
        document.getElementById('menu-lista_planetas-mercurio').innerHTML = 'Mercury';
        document.getElementById('menu-lista_planetas-tierra').innerHTML = 'Earth';
        document.getElementById('menu-lista_planetas-luna').innerHTML = 'Moon';
        document.getElementById('menu-lista_planetas-marte').innerHTML = 'Mars';
        document.getElementById('menu-lista_planetas-jupiter').innerHTML = 'Jupiter';
        document.getElementById('menu-lista_planetas-saturno').innerHTML = 'Saturn';
        document.getElementById('menu-lista_planetas-urano').innerHTML = 'Uranus';
        document.getElementById('menu-lista_planetas-neptuno').innerHTML = 'Neptune';
        document.getElementById('main-cabecera-titulo-tierra').innerHTML = 'the earth';
        document.getElementById('articulo-planetas-titulo-etimologia').innerHTML = 'etymology';
        document.getElementById('articulo-planetas-texto-etimologia').innerHTML = 'Its name comes from the Latin "terra" with the same meaning as ours and related to the verb "torror", which means to dry or singe.';
        document.getElementById('articulo-planetas-titulo-informacion').innerHTML = 'information';
        document.getElementById('articulo-planetas-texto-informacion1').innerHTML = "The average temperature is 15º thanks to the presence of greenhouse gases in the atmosphere.";
        document.getElementById('articulo-planetas-texto-informacion2').innerHTML = 'The volume of water on earth is 1,500 million cubic km, of which the majority is salt water, although there is also a presence of fresh water in the three states.';
        document.getElementById('articulo-planetas-texto-informacion3').innerHTML = 'The atmosphere provides us with gases to breathe, the most important being oxygen. It protects us from the impact of meteorites. The atmosphere is composed of nitrogen, argon, oxygen, carbon dioxide and water vapor.';
        document.getElementById('aside-titulo').innerHTML = 'Fun facts:';
        document.getElementById('aside-planetas-texto1').innerHTML = ' A day lasts 12h and the night 12h and the year 365 days.';
        document.getElementById('aside-planetas-texto2').innerHTML = " Most of the earth's surface is made up of water and the rest is made up of land.";
        document.getElementById('aside-planetas-texto3').innerHTML = ' Gravity does not affect all points on Earth in the same way.';
        document.getElementById('footer-desarrolladores').innerHTML = 'Page developed by: Teresa María Fontela Lorenzo | Izan Gallego Torres | Alejandro García-Morato Ramos';
        document.getElementById('footer-info').innerHTML = 'The students of Marina Martínez Bonat in the 3rd year of ESO A, B and C and the students of Alicia Portero Hernández have participated in the development of this website within the training program in STEAM competences in which the IES Juan Bosco de Alcázar de San Juan participates';
        document.getElementById('footer-copy').innerHTML = '© 2023 All rights reserved';
    }
}

function cambiarIdiomaLuna(idioma) {
    if (idioma === 'es') {
        document.getElementById('menu-lista_planetas-sol').innerHTML = 'Sol';
        document.getElementById('menu-lista_planetas-mercurio').innerHTML = 'Mercurio';
        document.getElementById('menu-lista_planetas-tierra').innerHTML = 'Tierra';
        document.getElementById('menu-lista_planetas-luna').innerHTML = 'Luna';
        document.getElementById('menu-lista_planetas-marte').innerHTML = 'Marte';
        document.getElementById('menu-lista_planetas-jupiter').innerHTML = 'Júpiter';
        document.getElementById('menu-lista_planetas-saturno').innerHTML = 'Saturno';
        document.getElementById('menu-lista_planetas-urano').innerHTML = 'Urano';
        document.getElementById('menu-lista_planetas-neptuno').innerHTML = 'Neptuno';
        document.getElementById('main-cabecera-titulo-luna').innerHTML = 'luna';
        document.getElementById('articulo-planetas-titulo-etimologia').innerHTML = 'etimología';
        document.getElementById('articulo-planetas-texto-etimologia').innerHTML = 'Su nombre proviene del latín luna, cuya forma arcaica era leuksna y después louksna. La unión de leuks (luz) y el sufijo -na significa luminosa.';
        document.getElementById('articulo-planetas-titulo-informacion').innerHTML = 'información';
        document.getElementById('articulo-planetas-texto-informacion1').innerHTML = "Las fases lunares son cuatro: nueva, cuarto creciente, luna llena y cuarto menguante.";
        document.getElementById('articulo-planetas-texto-informacion2').innerHTML = 'Astro más cercano a la Tierra (384.400Km) y satélite natural de nuestro planeta y el segundo más grande del sistema solar.';
        document.getElementById('articulo-planetas-texto-informacion3').innerHTML = 'La luna tiene un diámetro de 2474,8 Km Su superficie está repleta de cráteres producidos por impactos de meteoritos debido a que la luna no tiene atmósfera.';
        document.getElementById('articulo-planetas-texto-informacion4').innerHTML = 'Periodo de rotación: 27,3 días Periodo de traslación: 27,3 días Por eso siempre vemos la misma cara de la luna.';
        document.getElementById('articulo-planetas-texto-informacion5').innerHTML = 'La gravedad es menor que en la TIerra (1,62m/s2). Una persona que pese 45 kilos, en la Luna pesaría 8,05 kilos.';
        document.getElementById('aside-titulo').innerHTML = 'Datos Curiosos:';
        document.getElementById('aside-planetas-texto1').innerHTML = ' Ha llegando más gente a la Luna que a las profundidades de los océanos.';
        document.getElementById('aside-planetas-texto2').innerHTML = ' En la Luna no hay viento ni sonido.';
        document.getElementById('aside-planetas-texto3').innerHTML = ' Cada año la Luna se aleja de la Tierra 3.8 centímetros.';
        document.getElementById('aside-planetas-texto4').innerHTML = ' ¿Sabías que Mercurio y Venus son los únicos planetas del sistema solar que no tienen satélites?';
        document.getElementById('footer-desarrolladores').innerHTML = 'Página desarrollada por: Teresa María Fontela Lorenzo | Izan Gallego Torres | Alejandro García-Morato Ramos';
        document.getElementById('footer-info').innerHTML = 'Han participado en la elaboración de esta web los alumnos de Marina Martínez Bonat de 3º de ESO A, B y C y los alumnos de Alicia Portero Hernández dentro del programa de formación en competencias STEAM en el que participa el IES Juan Bosco de Alcázar de San Juan';
        document.getElementById('footer-copy').innerHTML = '© 2023 Todos los derechos reservados';
    } else if (idioma === 'en') {
        document.getElementById('menu-lista_planetas-sol').innerHTML = 'Sun';
        document.getElementById('menu-lista_planetas-mercurio').innerHTML = 'Mercury';
        document.getElementById('menu-lista_planetas-tierra').innerHTML = 'Earth';
        document.getElementById('menu-lista_planetas-luna').innerHTML = 'Moon';
        document.getElementById('menu-lista_planetas-marte').innerHTML = 'Mars';
        document.getElementById('menu-lista_planetas-jupiter').innerHTML = 'Jupiter';
        document.getElementById('menu-lista_planetas-saturno').innerHTML = 'Saturn';
        document.getElementById('menu-lista_planetas-urano').innerHTML = 'Uranus';
        document.getElementById('menu-lista_planetas-neptuno').innerHTML = 'Neptune';
        document.getElementById('main-cabecera-titulo-luna').innerHTML = 'moon';
        document.getElementById('articulo-planetas-titulo-etimologia').innerHTML = 'etymology';
        document.getElementById('articulo-planetas-texto-etimologia').innerHTML = 'Its name comes from the Latin luna, whose archaic form was leuksna and later louksna. The union of leuks (light) and the suffix -na means bright.';
        document.getElementById('articulo-planetas-titulo-informacion').innerHTML = 'information';
        document.getElementById('articulo-planetas-texto-informacion1').innerHTML = "There are four lunar phases: new, first quarter, full moon, and last quarter.";
        document.getElementById('articulo-planetas-texto-informacion2').innerHTML = 'Astro closest to Earth (384,400 km) and natural satellite of our planet and the second largest in the solar system.';
        document.getElementById('articulo-planetas-texto-informacion3').innerHTML = 'The moon has a diameter of 2474.8 km Its surface is full of craters produced by meteorite impacts because the moon has no atmosphere.';
        document.getElementById('articulo-planetas-texto-informacion4').innerHTML = "Rotation period: 27.3 days Translation period: 27.3 days That's why we always see the same side of the moon.";
        document.getElementById('articulo-planetas-texto-informacion5').innerHTML = 'Gravity is less than on Earth (1.62m/s2) A person who weighs 45 kilos on the Moon would weigh 8.05 kilos.';
        document.getElementById('aside-titulo').innerHTML = 'Fun facts:';
        document.getElementById('aside-planetas-texto1').innerHTML = ' More people have reached the Moon than the depths of the oceans.';
        document.getElementById('aside-planetas-texto2').innerHTML = ' On the Moon there is no wind or sound.';
        document.getElementById('aside-planetas-texto3').innerHTML = ' Every year the Moon moves away from Earth 3.8 centimeters.';
        document.getElementById('aside-planetas-texto4').innerHTML = ' Did you know that Mercury and Venus are the only planets in the solar system that do not have satellites?';
        document.getElementById('footer-desarrolladores').innerHTML = 'Page developed by: Teresa María Fontela Lorenzo | Izan Gallego Torres | Alejandro García-Morato Ramos';
        document.getElementById('footer-info').innerHTML = 'The students of Marina Martínez Bonat in the 3rd year of ESO A, B and C and the students of Alicia Portero Hernández have participated in the development of this website within the training program in STEAM competences in which the IES Juan Bosco de Alcázar de San Juan participates';
        document.getElementById('footer-copy').innerHTML = '© 2023 All rights reserved';
    }
}

function cambiarIdiomaMarte(idioma) {
    if (idioma === 'es') {
        document.getElementById('menu-lista_planetas-sol').innerHTML = 'Sol';
        document.getElementById('menu-lista_planetas-mercurio').innerHTML = 'Mercurio';
        document.getElementById('menu-lista_planetas-tierra').innerHTML = 'Tierra';
        document.getElementById('menu-lista_planetas-luna').innerHTML = 'Luna';
        document.getElementById('menu-lista_planetas-marte').innerHTML = 'Marte';
        document.getElementById('menu-lista_planetas-jupiter').innerHTML = 'Júpiter';
        document.getElementById('menu-lista_planetas-saturno').innerHTML = 'Saturno';
        document.getElementById('menu-lista_planetas-urano').innerHTML = 'Urano';
        document.getElementById('menu-lista_planetas-neptuno').innerHTML = 'Neptuno';
        document.getElementById('main-cabecera-titulo-marte').innerHTML = 'marte';
        document.getElementById('footer-desarrolladores').innerHTML = 'Página desarrollada por: Teresa María Fontela Lorenzo | Izan Gallego Torres | Alejandro García-Morato Ramos';
        document.getElementById('footer-info').innerHTML = 'Han participado en la elaboración de esta web los alumnos de Marina Martínez Bonat de 3º de ESO A, B y C y los alumnos de Alicia Portero Hernández dentro del programa de formación en competencias STEAM en el que participa el IES Juan Bosco de Alcázar de San Juan';
        document.getElementById('footer-copy').innerHTML = '© 2023 Todos los derechos reservados';
    } else if (idioma === 'en') {
        document.getElementById('menu-lista_planetas-sol').innerHTML = 'Sun';
        document.getElementById('menu-lista_planetas-mercurio').innerHTML = 'Mercury';
        document.getElementById('menu-lista_planetas-tierra').innerHTML = 'Earth';
        document.getElementById('menu-lista_planetas-luna').innerHTML = 'Moon';
        document.getElementById('menu-lista_planetas-marte').innerHTML = 'Mars';
        document.getElementById('menu-lista_planetas-jupiter').innerHTML = 'Jupiter';
        document.getElementById('menu-lista_planetas-saturno').innerHTML = 'Saturn';
        document.getElementById('menu-lista_planetas-urano').innerHTML = 'Uranus';
        document.getElementById('menu-lista_planetas-neptuno').innerHTML = 'Neptune';
        document.getElementById('main-cabecera-titulo-marte').innerHTML = 'mars';
        document.getElementById('footer-desarrolladores').innerHTML = 'Page developed by: Teresa María Fontela Lorenzo | Izan Gallego Torres | Alejandro García-Morato Ramos';
        document.getElementById('footer-info').innerHTML = 'The students of Marina Martínez Bonat in the 3rd year of ESO A, B and C and the students of Alicia Portero Hernández have participated in the development of this website within the training program in STEAM competences in which the IES Juan Bosco de Alcázar de San Juan participates';
        document.getElementById('footer-copy').innerHTML = '© 2023 All rights reserved';
    }
}

function cambiarIdiomaJupiter(idioma) {
    if (idioma === 'es') {
        document.getElementById('menu-lista_planetas-sol').innerHTML = 'Sol';
        document.getElementById('menu-lista_planetas-mercurio').innerHTML = 'Mercurio';
        document.getElementById('menu-lista_planetas-tierra').innerHTML = 'Tierra';
        document.getElementById('menu-lista_planetas-luna').innerHTML = 'Luna';
        document.getElementById('menu-lista_planetas-marte').innerHTML = 'Marte';
        document.getElementById('menu-lista_planetas-jupiter').innerHTML = 'Júpiter';
        document.getElementById('menu-lista_planetas-saturno').innerHTML = 'Saturno';
        document.getElementById('menu-lista_planetas-urano').innerHTML = 'Urano';
        document.getElementById('menu-lista_planetas-neptuno').innerHTML = 'Neptuno';
        document.getElementById('main-cabecera-titulo-jupiter').innerHTML = 'júpiter';
        document.getElementById('footer-desarrolladores').innerHTML = 'Página desarrollada por: Teresa María Fontela Lorenzo | Izan Gallego Torres | Alejandro García-Morato Ramos';
        document.getElementById('footer-info').innerHTML = 'Han participado en la elaboración de esta web los alumnos de Marina Martínez Bonat de 3º de ESO A, B y C y los alumnos de Alicia Portero Hernández dentro del programa de formación en competencias STEAM en el que participa el IES Juan Bosco de Alcázar de San Juan';
        document.getElementById('footer-copy').innerHTML = '© 2023 Todos los derechos reservados';
    } else if (idioma === 'en') {
        document.getElementById('menu-lista_planetas-sol').innerHTML = 'Sun';
        document.getElementById('menu-lista_planetas-mercurio').innerHTML = 'Mercury';
        document.getElementById('menu-lista_planetas-tierra').innerHTML = 'Earth';
        document.getElementById('menu-lista_planetas-luna').innerHTML = 'Moon';
        document.getElementById('menu-lista_planetas-marte').innerHTML = 'Mars';
        document.getElementById('menu-lista_planetas-jupiter').innerHTML = 'Jupiter';
        document.getElementById('menu-lista_planetas-saturno').innerHTML = 'Saturn';
        document.getElementById('menu-lista_planetas-urano').innerHTML = 'Uranus';
        document.getElementById('menu-lista_planetas-neptuno').innerHTML = 'Neptune';
        document.getElementById('main-cabecera-titulo-jupiter').innerHTML = 'jupiter';
        document.getElementById('footer-desarrolladores').innerHTML = 'Page developed by: Teresa María Fontela Lorenzo | Izan Gallego Torres | Alejandro García-Morato Ramos';
        document.getElementById('footer-info').innerHTML = 'The students of Marina Martínez Bonat in the 3rd year of ESO A, B and C and the students of Alicia Portero Hernández have participated in the development of this website within the training program in STEAM competences in which the IES Juan Bosco de Alcázar de San Juan participates';
        document.getElementById('footer-copy').innerHTML = '© 2023 All rights reserved';
    }
}

function cambiarIdiomaSaturno(idioma) {
    if (idioma === 'es') {
        document.getElementById('menu-lista_planetas-sol').innerHTML = 'Sol';
        document.getElementById('menu-lista_planetas-mercurio').innerHTML = 'Mercurio';
        document.getElementById('menu-lista_planetas-tierra').innerHTML = 'Tierra';
        document.getElementById('menu-lista_planetas-luna').innerHTML = 'Luna';
        document.getElementById('menu-lista_planetas-marte').innerHTML = 'Marte';
        document.getElementById('menu-lista_planetas-jupiter').innerHTML = 'Júpiter';
        document.getElementById('menu-lista_planetas-saturno').innerHTML = 'Saturno';
        document.getElementById('menu-lista_planetas-urano').innerHTML = 'Urano';
        document.getElementById('menu-lista_planetas-neptuno').innerHTML = 'Neptuno';
        document.getElementById('main-cabecera-titulo-saturno').innerHTML = 'saturno';
        document.getElementById('footer-desarrolladores').innerHTML = 'Página desarrollada por: Teresa María Fontela Lorenzo | Izan Gallego Torres | Alejandro García-Morato Ramos';
        document.getElementById('footer-info').innerHTML = 'Han participado en la elaboración de esta web los alumnos de Marina Martínez Bonat de 3º de ESO A, B y C y los alumnos de Alicia Portero Hernández dentro del programa de formación en competencias STEAM en el que participa el IES Juan Bosco de Alcázar de San Juan';
        document.getElementById('footer-copy').innerHTML = '© 2023 Todos los derechos reservados';
    } else if (idioma === 'en') {
        document.getElementById('menu-lista_planetas-sol').innerHTML = 'Sun';
        document.getElementById('menu-lista_planetas-mercurio').innerHTML = 'Mercury';
        document.getElementById('menu-lista_planetas-tierra').innerHTML = 'Earth';
        document.getElementById('menu-lista_planetas-luna').innerHTML = 'Moon';
        document.getElementById('menu-lista_planetas-marte').innerHTML = 'Mars';
        document.getElementById('menu-lista_planetas-jupiter').innerHTML = 'Jupiter';
        document.getElementById('menu-lista_planetas-saturno').innerHTML = 'Saturn';
        document.getElementById('menu-lista_planetas-urano').innerHTML = 'Uranus';
        document.getElementById('menu-lista_planetas-neptuno').innerHTML = 'Neptune';
        document.getElementById('main-cabecera-titulo-saturno').innerHTML = 'saturn';
        document.getElementById('footer-desarrolladores').innerHTML = 'Page developed by: Teresa María Fontela Lorenzo | Izan Gallego Torres | Alejandro García-Morato Ramos';
        document.getElementById('footer-info').innerHTML = 'The students of Marina Martínez Bonat in the 3rd year of ESO A, B and C and the students of Alicia Portero Hernández have participated in the development of this website within the training program in STEAM competences in which the IES Juan Bosco de Alcázar de San Juan participates';
        document.getElementById('footer-copy').innerHTML = '© 2023 All rights reserved';
    }
}

function cambiarIdiomaUrano(idioma) {
    if (idioma === 'es') {
        document.getElementById('menu-lista_planetas-sol').innerHTML = 'Sol';
        document.getElementById('menu-lista_planetas-mercurio').innerHTML = 'Mercurio';
        document.getElementById('menu-lista_planetas-tierra').innerHTML = 'Tierra';
        document.getElementById('menu-lista_planetas-luna').innerHTML = 'Luna';
        document.getElementById('menu-lista_planetas-marte').innerHTML = 'Marte';
        document.getElementById('menu-lista_planetas-jupiter').innerHTML = 'Júpiter';
        document.getElementById('menu-lista_planetas-saturno').innerHTML = 'Saturno';
        document.getElementById('menu-lista_planetas-urano').innerHTML = 'Urano';
        document.getElementById('menu-lista_planetas-neptuno').innerHTML = 'Neptuno';
        document.getElementById('main-cabecera-titulo-urano').innerHTML = 'urano';
        document.getElementById('footer-desarrolladores').innerHTML = 'Página desarrollada por: Teresa María Fontela Lorenzo | Izan Gallego Torres | Alejandro García-Morato Ramos';
        document.getElementById('footer-info').innerHTML = 'Han participado en la elaboración de esta web los alumnos de Marina Martínez Bonat de 3º de ESO A, B y C y los alumnos de Alicia Portero Hernández dentro del programa de formación en competencias STEAM en el que participa el IES Juan Bosco de Alcázar de San Juan';
        document.getElementById('footer-copy').innerHTML = '© 2023 Todos los derechos reservados';
    } else if (idioma === 'en') {
        document.getElementById('menu-lista_planetas-sol').innerHTML = 'Sun';
        document.getElementById('menu-lista_planetas-mercurio').innerHTML = 'Mercury';
        document.getElementById('menu-lista_planetas-tierra').innerHTML = 'Earth';
        document.getElementById('menu-lista_planetas-luna').innerHTML = 'Moon';
        document.getElementById('menu-lista_planetas-marte').innerHTML = 'Mars';
        document.getElementById('menu-lista_planetas-jupiter').innerHTML = 'Jupiter';
        document.getElementById('menu-lista_planetas-saturno').innerHTML = 'Saturn';
        document.getElementById('menu-lista_planetas-urano').innerHTML = 'Uranus';
        document.getElementById('menu-lista_planetas-neptuno').innerHTML = 'Neptune';
        document.getElementById('main-cabecera-titulo-urano').innerHTML = 'uranus';
        document.getElementById('footer-desarrolladores').innerHTML = 'Page developed by: Teresa María Fontela Lorenzo | Izan Gallego Torres | Alejandro García-Morato Ramos';
        document.getElementById('footer-info').innerHTML = 'The students of Marina Martínez Bonat in the 3rd year of ESO A, B and C and the students of Alicia Portero Hernández have participated in the development of this website within the training program in STEAM competences in which the IES Juan Bosco de Alcázar de San Juan participates';
        document.getElementById('footer-copy').innerHTML = '© 2023 All rights reserved';
    }
}

function cambiarIdiomaNeptuno(idioma) {
    if (idioma === 'es') {
        document.getElementById('menu-lista_planetas-sol').innerHTML = 'Sol';
        document.getElementById('menu-lista_planetas-mercurio').innerHTML = 'Mercurio';
        document.getElementById('menu-lista_planetas-tierra').innerHTML = 'Tierra';
        document.getElementById('menu-lista_planetas-luna').innerHTML = 'Luna';
        document.getElementById('menu-lista_planetas-marte').innerHTML = 'Marte';
        document.getElementById('menu-lista_planetas-jupiter').innerHTML = 'Júpiter';
        document.getElementById('menu-lista_planetas-saturno').innerHTML = 'Saturno';
        document.getElementById('menu-lista_planetas-urano').innerHTML = 'Urano';
        document.getElementById('menu-lista_planetas-neptuno').innerHTML = 'Neptuno';
        document.getElementById('main-cabecera-titulo-neptuno').innerHTML = 'neptuno';
        document.getElementById('footer-desarrolladores').innerHTML = 'Página desarrollada por: Teresa María Fontela Lorenzo | Izan Gallego Torres | Alejandro García-Morato Ramos';
        document.getElementById('footer-info').innerHTML = 'Han participado en la elaboración de esta web los alumnos de Marina Martínez Bonat de 3º de ESO A, B y C y los alumnos de Alicia Portero Hernández dentro del programa de formación en competencias STEAM en el que participa el IES Juan Bosco de Alcázar de San Juan';
        document.getElementById('footer-copy').innerHTML = '© 2023 Todos los derechos reservados';
    } else if (idioma === 'en') {
        document.getElementById('menu-lista_planetas-sol').innerHTML = 'Sun';
        document.getElementById('menu-lista_planetas-mercurio').innerHTML = 'Mercury';
        document.getElementById('menu-lista_planetas-tierra').innerHTML = 'Earth';
        document.getElementById('menu-lista_planetas-luna').innerHTML = 'Moon';
        document.getElementById('menu-lista_planetas-marte').innerHTML = 'Mars';
        document.getElementById('menu-lista_planetas-jupiter').innerHTML = 'Jupiter';
        document.getElementById('menu-lista_planetas-saturno').innerHTML = 'Saturn';
        document.getElementById('menu-lista_planetas-urano').innerHTML = 'Uranus';
        document.getElementById('menu-lista_planetas-neptuno').innerHTML = 'Neptune';
        document.getElementById('main-cabecera-titulo-neptuno').innerHTML = 'neptune';
        document.getElementById('footer-desarrolladores').innerHTML = 'Page developed by: Teresa María Fontela Lorenzo | Izan Gallego Torres | Alejandro García-Morato Ramos';
        document.getElementById('footer-info').innerHTML = 'The students of Marina Martínez Bonat in the 3rd year of ESO A, B and C and the students of Alicia Portero Hernández have participated in the development of this website within the training program in STEAM competences in which the IES Juan Bosco de Alcázar de San Juan participates';
        document.getElementById('footer-copy').innerHTML = '© 2023 All rights reserved';
    }
}