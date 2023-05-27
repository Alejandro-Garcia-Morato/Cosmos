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