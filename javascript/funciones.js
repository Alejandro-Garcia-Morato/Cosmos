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
        document.getElementById('primero-article-sol').innerHTML = 'etimología';
        document.getElementById('etimologia-sol').innerHTML = 'Su nombre viene del latín sol, que era como los romanos llamaban al astro brillante que les ofrecía la luz del día.';
        document.getElementById('segundo-article-sol').innerHTML = 'información';
        document.getElementById('uno-sol').innerHTML = 'Se clasifica como una estrella tipo espectral G2 y clase de luminosidad V: una estrella “G2V”.';
        document.getElementById('dos-sol').innerHTML = 'MEDIDAS: Diámetro de 1,3927 millones de km y radio de 696.340 km.';
        document.getElementById('tres-sol').innerHTML = 'EDAD: 4.500.000.000 años.';
        document.getElementById('aside-sol').innerHTML = 'Datos Curiosos:';
        document.getElementById('uno-aside-sol').innerHTML = ' Aunque veamos que es amarillo en realidad es blanco.';
        document.getElementById('dos-aside-sol').innerHTML = ' Su temperatura de superficie es de 5.778 K.';
        document.getElementById('tres-aside-sol').innerHTML = ' Tiene una gravedad de 274 m/s².';
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
        document.getElementById('primero-article-sol').innerHTML = 'etymology';
        document.getElementById('etimologia-sol').innerHTML = 'Its name comes from the Latin sun, which was how the Romans called the bright star that offered them daylight.';
        document.getElementById('segundo-article-sol').innerHTML = 'information';
        document.getElementById('uno-sol').innerHTML = 'It is classified as a G2 spectral type star and luminosity class V: a “G2V” star.';
        document.getElementById('dos-sol').innerHTML = 'MEASUREMENTS: Diameter of 1.3927 million km and radius of 696,340 km.';
        document.getElementById('tres-sol').innerHTML = 'AGE: 4,500,000,000 years.';
        document.getElementById('aside-sol').innerHTML = 'Fun facts:';
        document.getElementById('uno-aside-sol').innerHTML = ' Although we see that it is yellow, it is actually white.';
        document.getElementById('dos-aside-sol').innerHTML = ' Its surface temperature is 5,778 K.';
        document.getElementById('tres-aside-sol').innerHTML = ' It has a gravity of 274 m/s².';
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
        document.getElementById('aside-planetas-texto1').innerHTML = ' Para llegar desde la Tierra se tardan 40 días.';
        document.getElementById('aside-planetas-texto2').innerHTML = ' Está a unos 80.000 kilómetros desde la Tierra.';
        document.getElementById('aside-planetas-texto3').innerHTML = ' Su color es grisáceo.';
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
        document.getElementById('primero-article-venus').innerHTML = 'etimologia';
        document.getElementById('etimologia-venus').innerHTML = 'Su nombre viene de la mitología romana que sería el equivalente a la diosa griega Afrodita. Es el único planeta del sistema solar que tiene nombre de una diosa.';
        document.getElementById('segundo-article-venus').innerHTML = 'información';
        document.getElementById('uno-venus').innerHTML = 'Su temperatura media es de 453ºC, de día es de 426ºC y de noche de -173ºC. En Venus no hay agua por su cercanía al sol.';
        document.getElementById('dos-venus').innerHTML = 'Un año en Venus son 243 días terrestres.';
        document.getElementById('tres-venus').innerHTML = 'MOVIMIENTOS: Su rotación es en dirección contraria a la de la Tierra y su translación son 225 días terrestres.';
        document.getElementById('aside-venus').innerHTML = 'Datos Curiosos:';
        document.getElementById('uno-aside-venus').innerHTML = ' La superficie de Venus es de 460,2 millones de kilómetros/m2.';
        document.getElementById('dos-aside-venus').innerHTML = ' No se puede ver su superficie porque está cubierta por nubes espesas.';
        document.getElementById('tres-aside-venus').innerHTML = ' Gravedad: 8,87 m/s².';
        document.getElementById('cuatro-aside-venus').innerHTML = ' Atmósfera: Está hecha de un 96% de CO2 y 3% de nitrógeno.';
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
        document.getElementById('primero-article-venus').innerHTML = 'etymology';
        document.getElementById('etimologia-venus').innerHTML = 'Its name comes from Roman mythology, which would be the equivalent of the Greek goddess Aphrodite. It is the only planet in the solar system named after a goddess.';
        document.getElementById('segundo-article-venus').innerHTML = 'information';
        document.getElementById('uno-venus').innerHTML = 'Its average temperature is 453ºC, during the day it is 426ºC and at night it is -173ºC. On Venus there is no water because of its proximity to the sun.';
        document.getElementById('dos-venus').innerHTML = 'A year on Venus is 243 Earth days.';
        document.getElementById('tres-venus').innerHTML = 'MOVEMENTS: Its rotation is in the opposite direction to that of the Earth and its translation is 225 Earth days.';
        document.getElementById('aside-venus').innerHTML = 'Fun facts:';
        document.getElementById('uno-aside-venus').innerHTML = ' The surface of Venus is 460.2 million km/m2.';
        document.getElementById('dos-aside-venus').innerHTML = ' You cannot see its surface because it is covered by thick clouds.';
        document.getElementById('tres-aside-venus').innerHTML = ' Gravity: 8.87 m/s².';
        document.getElementById('cuatro-aside-venus').innerHTML = ' Atmosphere: It is made of 96% CO2 and 3% nitrogen.';
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
        document.getElementById('articulo-planetas-texto-informacion1').innerHTML = "La temperatura media es de 15º gracias a la presencia de gases de efecto invernadero en la atmósfera.";
        document.getElementById('articulo-planetas-texto-informacion2').innerHTML = 'El volumen de agua en la tierra es de 1500 millones de Km cúbicos, de los cuales la mayoría es agua salada, aunque también hay presencia de agua dulce en los tres estados.';
        document.getElementById('articulo-planetas-texto-informacion3').innerHTML = 'La atmósfera nos aporta gases para respirar, el más importante es el oxígeno. Nos protege del impacto de meteoritos. La atmosfera esta compuestas de nitrógeno, argón, oxígeno, dióxido de carbono y vapor de agua.';
        document.getElementById('aside-titulo').innerHTML = 'Datos Curiosos:';
        document.getElementById('aside-planetas-texto1').innerHTML = ' Un día dura 12h y la noche 12h y el año 365 días.';
        document.getElementById('aside-planetas-texto2').innerHTML = ' La mayoría de la superficie de la tierra esta compuesta por agua y lo demás por tierra.';
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
        document.getElementById('articulo-planetas-texto-informacion3').innerHTML = 'La luna tiene un diámetro de 2474,8 Km. Su superficie está repleta de cráteres producidos por impactos de meteoritos debido a que la luna no tiene atmósfera.';
        document.getElementById('articulo-planetas-texto-informacion4').innerHTML = 'Periodo de rotación: 27,3 días. Periodo de traslación: 27,3. días Por eso siempre vemos la misma cara de la luna.';
        document.getElementById('articulo-planetas-texto-informacion5').innerHTML = 'La gravedad es menor que en la TIerra (1,62m/s2). Una persona que pese 45 kilos en la Luna pesaría 8,05 kilos.';
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
        document.getElementById('articulo-planetas-texto-informacion3').innerHTML = 'The moon has a diameter of 2474.8 km. Its surface is full of craters produced by meteorite impacts because the moon has no atmosphere.';
        document.getElementById('articulo-planetas-texto-informacion4').innerHTML = "Rotation period: 27.3 days. Translation period: 27.3 days. That's why we always see the same side of the moon.";
        document.getElementById('articulo-planetas-texto-informacion5').innerHTML = 'Gravity is less than on Earth (1.62m/s2). A person who weighs 45 kilos on the Moon would weigh 8.05 kilos.';
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
        document.getElementById('primero-article-jupiter').innerHTML = 'etimologia';
        document.getElementById('etimologia-jupiter').innerHTML = 'Júpiter deriva de Ius-piter, o sea, últimamente de Deus-pater "dios padre".';
        document.getElementById('segundo-article-jupiter').innerHTML = 'información';
        document.getElementById('uno-segundo-jupiter').innerHTML = 'Júpiter tiene una variación extremada de lluvia mensual por estación. Llueve durante el año en Júpiter. El mes con más lluvia en Júpiter es septiembre, con un promedio de 147 milímetros de lluvia. El mes con menos lluvia en Júpiter es diciembre, con un promedio de 45 milímetros de lluvia.';
        document.getElementById('dos-segundo-jupiter').innerHTML = 'Su atmósfera se compone aproximadamente de un 82% de hidrógeno y un 17% de helio. A estos componentes principales hay que sumarle otros en mucho menor porcentaje como metano, vapor de agua, amoniaco, etano, fosfina, sulfuro de hidrógeno e hidrosulfuro.';
        document.getElementById('aside-jupiter').innerHTML = 'Datos Curiosos:';
        document.getElementById('uno-aside-jupiter').innerHTML = ' El dia dura 9h 56m. De la noche 4:56h y del día 5 horas';
        document.getElementById('dos-aside-jupiter').innerHTML = ' Sin duda, uno de los aspectos más fascinantes de Júpiter es su atmósfera, principalmente compuesta de hidrógeno en más de uno 80% además de grandes proporciones de helio, amoniaco y etano.';
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
        document.getElementById('main-cabecera-titulo-jupiter').innerHTML = 'Jupiter';
        document.getElementById('primero-article-jupiter').innerHTML = 'etymology';
        document.getElementById('etimologia-jupiter').innerHTML = 'Jupiter derives from Ius-piter, that is, ultimately from Deus-pater "father god".';
        document.getElementById('segundo-article-jupiter').innerHTML = 'rainfall';
        document.getElementById('uno-segundo-jupiter').innerHTML = 'Jupiter has an extreme variation of monthly rainfall by season. Rain falls throughout the year on Jupiter. The month with the most rain on Jupiter is September, with an average of 147 millimeters of rain. The month with the least rain on Jupiter is December, with an average of 45 millimeters of rain. ';
        document.getElementById('dos-segundo-jupiter').innerHTML = 'Its atmosphere is made up of approximately 82% hydrogen and 17% helium. To these main components we must add others in a much lower percentage such as methane, water vapor, ammonia, ethane, phosphine, hydrogen sulfide and hydrosulfide.';
        document.getElementById('aside-jupiter').innerHTML = 'Fun facts:';
        document.getElementById('uno-aside-jupiter').innerHTML = ' The day lasts 9h 56m full day temperature. 4:56h at night and 5h during the day.';
        document.getElementById('dos-aside-jupiter').innerHTML = ' Undoubtedly, one of the most fascinating aspects of Jupiter is its atmosphere, mainly composed of more than 80% hydrogen in addition to large proportions of helium, ammonia and ethane.';
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
        document.getElementById('primero-article-saturno').innerHTML = 'etimología';
        document.getElementById('etimologia-saturno').innerHTML = 'Su nombre proviene del dios romano Saturno.';
        document.getElementById('segundo-article-saturno').innerHTML = 'información';
        document.getElementById('uno-segundo-saturno').innerHTML = 'AGUA: Un estudio realizado por la universidad de Leicester, ha detectado que el agua existe en la atmósfera.';
        document.getElementById('dos-segundo-saturno').innerHTML = 'DURACIÓN: La duración de saturno es de 11 horas en total. Donde 10 horas es por el día y solo una por la noche. La traslación de Saturno es de 29 años terrestres.';
        document.getElementById('aside-saturno').innerHTML = 'Datos Curiosos:';
        document.getElementById('uno-aside-saturno').innerHTML = 'Saturno tiene una superficie de 42,7 de millones de kilómetros.';
        document.getElementById('dos-aside-saturno').innerHTML = 'Un radio de 58.232 km.';
        document.getElementById('tres-aside-saturno').innerHTML = 'Saturno no es el único planeta que tiene anillos';
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
        document.getElementById('primero-article-saturno').innerHTML = 'etimology';
        document.getElementById('etimologia-saturno').innerHTML = 'Its name comes from the Roman god Saturn.';
        document.getElementById('segundo-article-saturno').innerHTML = 'information';
        document.getElementById('uno-segundo-saturno').innerHTML = 'WATER: A study carried out by the University of Leicester has detected that water exists in the atmosphere.';
        document.getElementById('dos-segundo-saturno').innerHTML = 'DURATION: The duration of Saturn is 11 hours in total. Where 10 hours is for the day and only one for the night. The translation of Saturn is 29 Earth years.';
        document.getElementById('aside-saturno').innerHTML = 'Fun facts:';
        document.getElementById('uno-aside-saturno').innerHTML = 'Saturn has a distance of 42.7 million kilometers.';
        document.getElementById('dos-aside-saturno').innerHTML = 'A radius of 58,232 km.';
        document.getElementById('tres-aside-saturno').innerHTML = 'Saturn is not the only planet with rings';
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
