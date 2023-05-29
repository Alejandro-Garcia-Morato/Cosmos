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
        document.getElementById('dos-sol').innerHTML = 'MEDIDAS: con un diámetro de 1,3927 millones km y con un Radio de 696.340 km.';
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
        document.getElementById('etimologia-sol').innerHTML = 'Its name comes from the Latin sun, which was how the Romans called the star brilliant that the light of day offered them.';
        document.getElementById('segundo-article-sol').innerHTML = 'information';
        document.getElementById('uno-sol').innerHTML = 'It is classified as a spectral type G2 star and luminosity class V: a “G2V” star.';
        document.getElementById('dos-sol').innerHTML = 'MEASUREMENTS: with a diameter of 1.3927 million km and a radius of 696,340 km.';
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
        document.getElementById('etimologia-venus').innerHTML = 'Su nombre viene de la mitologia romana que seria el equivalente a la diosa griega Afrodita. Es el unico planeta del sistema solar que tiene nombre de una diosa.';
        document.getElementById('segundo-article-venus').innerHTML = 'información';
        document.getElementById('uno-venus').innerHTML = 'Su temperatura media 453ºC, de día es 426ºC y de noche -173ºC.En Venus no hay agua por su cercanía al sol.';
        document.getElementById('dos-venus').innerHTML = 'DURACIONES: 243,0226 de dia ,sus noche 116,75 días terrestres y sus años 243 días terrestres.';
        document.getElementById('tres-venus').innerHTML = 'MOVIMIENTOS: su rotación es en dirección contraria a la de la Tierra y su translación 225 días terrestres.';
        document.getElementById('aside-venus').innerHTML = 'Datos Curiosos:';
        document.getElementById('uno-aside-venus').innerHTML = 'La superficie de Venus es de 460,2 millones de kilómetros/m2.';
        document.getElementById('dos-aside-venus').innerHTML = 'No se puede ver su superficie porque esta cubierta por nubes espesas.';
        document.getElementById('tres-aside-venus').innerHTML = 'Gravedad: 8,87 m/s².';
        document.getElementById('cuatro-aside-venus').innerHTML = 'Atmósfera: Esta hecha de un  96% CO2 y 3% de nitrógeno.';
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
        document.getElementById('etimologia-venus').innerHTML = 'Its name comes from Roman mythology, which would be the equivalent of the Greek goddess Aphrodite.It is the only planet in the solar system named after a goddess.';
        document.getElementById('segundo-article-venus').innerHTML = 'information';
        document.getElementById('uno-venus').innerHTML = 'Its average temperature is 453ºC, during the day its is 426ºC and at night -173ºC. On Venus there is no water because of its proximity to the sun.';
        document.getElementById('dos-venus').innerHTML = 'DURATION: 243.0226 days, its nights 116.75 Earth days and its years 243 Earth days.';
        document.getElementById('tres-venus').innerHTML = 'MOVEMENTS: its rotation is in the opposite direction to that of the Earth and its translation 225 Earth days.';
        document.getElementById('aside-venus').innerHTML = 'Fun facts:';
        document.getElementById('uno-aside-venus').innerHTML = ' The surface of Venus is 460.2 million km/m2.';
        document.getElementById('dos-aside-venus').innerHTML = ' Its surface cannot be seen because it is covered by thick clouds.';
        document.getElementById('tres-aside-venus').innerHTML = ' Gravity: 8.87 m/s².';
        document.getElementById('cuatro-aside-venus').innerHTML = ' Atmosphere: It is made of 96% CO2 and 3% nitrogen.';
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
        document.getElementById('etimologia-jupiter').innerHTML = 'Júpiter deriva de Ius-piter, o sea, últimamente de Deus-pater "dios padre"';
        document.getElementById('segundo-article-jupiter').innerHTML = 'información';
        document.getElementById('uno-segundo-jupiter').innerHTML = 'Júpiter tiene una variación extremada de lluvia mensual por estación. Llueve durante el año en Júpiter. El mes con más lluvia en Júpiter es septiembre, con un promedio de 147 milímetros de lluvia. El mes con menos lluvia en Júpiter es diciembre, con un promedio de 45 milímetros de lluvia.';
        document.getElementById('dos-segundo-jupiter').innerHTML = 'Su atmósfera se compone aproximadamente de un 82% de hidrógeno y un 17% de helio. A estos componentes principales hay que sumarle otros en mucho menor porcentaje como metano, vapor de agua, amoniaco, etano, fosfina, sulfuro de hidrógeno e hidrosulfuro.';
        document.getElementById('aside-jupiter').innerHTML = 'Datos Curiosos:';
        document.getElementById('uno-aside-jupiter').innerHTML = ' El dia dura 9h 56m. De la noche 4:56h y del día 5 horas';
        document.getElementById('dos-aside-jupiter').innerHTML = ' Sin duda, uno de los aspectos más fascinantes de Júpiter es su atmósfera, principalmente compuesta de hidrógeno en más de uno 80% además de grandes proporciones de helio amoniaco y etano.';
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
        document.getElementById('etimologia-jupiter').innerHTML = 'Jupiter derives from Ius-piter, that is, ultimately from Deus-pater "father god"';
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
        document.getElementById('primero-article-saturno').innerHTML = 'etimologia';
        document.getElementById('etimologia-saturno').innerHTML = 'Su nombre viene del latín sol que era como los romanos llamaban al astro brillante que les ofrecía la luz del día.';
        document.getElementById('segundo-article-saturno').innerHTML = 'información';
        document.getElementById('uno-segundo-saturno').innerHTML = 'AGUA: Un estudio realizado por la universidad de Leicester, ha detectado que el agua existe en la atmósfera.';
        document.getElementById('dos-segundo-saturno').innerHTML = 'DURACIÓN: La duración de saturno es de 11 horas en total.Donde 10 horas es por el día y solo una por la noche la traslación de Saturno es de 29 años y la rotación de 10 horas.';
        document.getElementById('aside-saturno').innerHTML = 'Datos Curiosos:';
        document.getElementById('uno-aside-saturno').innerHTML = 'Saturno tiene una superficie de 42,7 de millones de kilómetros.';
        document.getElementById('dos-aside-saturno').innerHTML = 'Un radio de 58.232 km.';
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
        document.getElementById('primero-article-saturno').innerHTML = 'etimologia';
        document.getElementById('etimologia-saturno').innerHTML = 'Its name comes from the Latin sun, which was how the Romans called the bright star that offered them daylight.';
        document.getElementById('segundo-article-saturno').innerHTML = 'información';
        document.getElementById('uno-segundo-saturno').innerHTML = 'WATER: A study carried out by the University of Leicester has detected that water exists in the atmosphere.';
        document.getElementById('dos-segundo-saturno').innerHTML = 'DURATION: The duration of Saturn is 11 hours in total. Where 10 hours is for the day and only one for the night.Saturn´s translation is 29 years and rotation 10 hours.';
        document.getElementById('aside-saturno').innerHTML = 'Fun facts:';
        document.getElementById('uno-aside-saturno').innerHTML = 'Saturn has a distance of 42.7 million kilometers.';
        document.getElementById('dos-aside-saturno').innerHTML = 'A radius of 58,232 km.';
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
