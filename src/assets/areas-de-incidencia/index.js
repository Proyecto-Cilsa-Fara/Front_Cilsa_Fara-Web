import ViolenciaDeGenero from "./violencia-de-genero.webp"
import PoliticasPublicas from "./politicas-publicas.webp"
import Arte from "./arte.webp"
import Educacion from "./educacion.webp"
import Facilitacion from "./facilitacion.webp"
import Justicia from "./justicia.webp"
import NiñezyJuventud from "./niñez-y-juventud.webp"
import Oficios from "./oficios.webp"

const AreasDeIncidencia = [
    {
        tittle: "VIOLENCIA DE GÉNERO Y OTRAS VIOLENCIAS",
        image: ViolenciaDeGenero,
        subtittle: "ENFOQUE RESTAURATIVO EN VIOLENCIA DE GÉNERO Y OTRAS VIOLENCIAS",
        members: ["Silvina Paz", "Eliana Servera", "Constanza Ochoa", "Lucia Fassi"],
        objetives: [
            "Reconocer la dimensión politica de la Justicia Restaurativa en el abordaje de violencia de genero y diversidades sexuales.",
            "Difundir los beneficios de la aplicación de la metodología restaurativa en la gestión de las violencias y específicamente en la violencia de genero, a través de la divulgación de buenas practicas.",
            "Impulsar todas las acciones tendientes a la promoción y capacitación en materia gestión de violencias, violencias y diversidades, violencia de genero, justicia restaurtiva.",
            "Reconocer los efectos de las violencias en las personas, familias y comunidades.",
            "Construir herramientas restaurativas para gestionar pacíficamente los conflictos emergentes como consecuencia del delito.",
        ],
    },
    {
        tittle: "NIÑEZ Y JUVENTUD",
        image: NiñezyJuventud,
        subtittle: "DESARROLLO DESCA EN LATINOAMERICA",
        members: [
            "Silvina Paz",
            "Eliana Servera",
            "Constanza Ochoa",
            "Julia Berruti",
            "Laura Seglie",
            "Tatiana Almaso",
            "Ximena Funes",
            "Noelia Barone",
        ],
        objetives: [
            "Reconocer la dimensión política de la Justicia Restaurativa y su necesaria incorporación en las comunidades, en el fuero penal juvenil y ademas agencias penales, y en todos aquellos ámbitos donde los niños niñas y adolescentes, y jóvenes transcurran.",
            "Impulsar todas las acciones tendientes a la promoción y capacitaciónen materia de justicia restaurativa juvenil.",
            "Propender la utilización de la justicia restaurativa con niños, niñas, adolescentes y jóvenes en situación de vulnerabilidad, en todos los ámbitos donde ellos se vean afectados.",
            " Promoción y acceso a Derechos Económicos, Sociales y Culturales en los procesos restaurativos.",
            "Visibilizar el rol del facilitador restaurativo en la gestion de derechos de niños, niñas adolescentes y jóvenes.",
            "Fortalecimiento del principio de corresponsabilidad social restaurativa.",
            "Trazas directrices para la incorporación de practicas con enfoque restaurativo y reparador en todos los ámbitos en que los niños, niñas, adolescentes y jóvenes se encuentren transitando.",
            "Difundir los beneficios de la aplicación de la metodología restaurativa, a través de la divulgación de buenas practicas territoriales.",
        ],
    },
    {
        tittle: "JUSTICIA PARA VÍCTIMAS",
        image: Justicia,
        subtittle: "ENCUADRE PSICO SOCIO JURÍDICO Y POSIBILIDADES BIO PSICO SOCIAL",
        members: ["M. Adam", "Eliana Servera"],
        objetives: [
            "Con enfoque victimal se realizaran planes en búsqueda de egresar del estado de víctima.",
            "Generar un espacio de escucha y reflexión sobre los hechos y el derecho.",
            "Fortalecer a las víctimas por medio de enfoques restaurativos que reduzcan al mínimo posible los efectos del delito en las personas y en las comunidades.",
            "Implementar programas en base a sus necesidades de seguridad, escucha, reconocimiento.",
            "Realizar lecturas y documentos que permitan generar una guía de derechos.",
        ],
    },
    {
        tittle: "POLÍTICAS PÚBLICAS",
        image: PoliticasPublicas,
        subtittle: "GESTIÓN DE LA CONFLICTIVIDAD SOCIAL Y CULTURA DE PAZ EN LOS NIVELES NACIONAL, PROVINCIAL Y COMUNAL",
        members: ["Constanza Hasperúe", "Cecil Simonuti"],
        objetives: [
            "Hacer efectivo el derecho a la paz, visibilizando acciones territoriales en la región.",
            "Promover una gestión gubernamental inteligente desde un enfoque restaurativo.",
            "Diseñar programas interinstitucionales que aborden la gestión de la conflictividad social a través de respuestas restaurativas diversas y adecuadas, que garanticen el acceso a justicia de personas en situación de vulnerabilidad.",
            "Releven y atiendan las necesidades particulares de las comunidades. Diseño de marcos normativos adjetivos y sustantivos.",
        ],
    },
    {
        tittle: "FACILITACIÓN Y MEDIACIÓN",
        image: Facilitacion,
        subtittle:
            "EN LA COMUNIDAD, EN FUERZAS POLICIALES, EN EL PROCESO PENAL, EN EL SISTEMA DE EJECUCIÓN DE LA PENA (PENITENCIARIO), Y POST DELITO. MIGRANTES.",
        members: [
            "COMUNITARIO: Catalina Bernat",
            "POLICIAL: Darío Almada",
            "PENITENCIARIO: Lautaro Fernandez, Romina Tamburrini, Mariana Rando, Mariel Delle Donne y Gerardo Zaratiegui",
            "MIGRANTES: Marcela",
            "PENAL: Silvina Paz, Silvina Mignona, Laura Seglia y Julia Berrutti",
        ],
        objetives: [
            "Difundir la formación del rol del Facilitador penal, policial y penitenciario.",
            "Relevamiento, análisis y aportes a los programas en la región.",
            "Analizar resoluciones y medidas restaurativas en los procesos penales.",
            "Fortalecimiento de los procesos conciliados a partir del principio de oportunidad con enfoque restaurador.",
            "Gestión de procesos restaurativos derivados de la justicia, la policía y el servicio penitenciario.",
            "Hacer redes de trabajo soporte a los programas.",
        ],
    },
    {
        tittle: "EDUCACIÓN E INCLUSIÓN DE GRUPOS VULNERABLES",
        image: Educacion,
        subtittle: "ESTRATEGIAS PARA UNA EDUCACIÓN INCLUSIVA Y ACCESIBLE",
        members: ["María Martha Adam", "Titina Poch"],
        objetives: [
            "Generar  programas  restauradores  que  gestionen  la   conflictividad   del Bullying y acoso escolar en la educación formal y no formal.",
            "Integrar Redes con enfoque en la pedagogía inclusiva y restauradora.",
            "Generar Círculos restauradores para la inclusión.",
            "Proponer y desarrollar programas estratégicos para sostener relaciones de inclusión.",
        ],
    },
    {
        tittle: "ESCUELA DE OFICIOS EMPRENDEDORES",
        image: Oficios,
        subtittle: "CAPACITACIONES CON IMPACTO SOCIAL Y ECONÓMICO",
        members: ["Matías Mazza", "Fernanda Santilli"],
        objetives: [
            "Visibilizar fuentes creativas de ingresos que permitan el desarrollo personal, familiar y social.",
            "Reconocer el valor de las prácticas emprendedoras restaurativas.",
            "Reforzar la sustentabilidad del emprendimiento y la necesidad de sustento para la familia.",
            "Generar programas con noveles emprendedores.",
            "Realizar alianzas multinivel para ampliar la gestión de acciones restaurativas emprendedoras.",
        ],
    },
    {
        tittle: "CÍRCULOS DE ARTE",
        image: Arte,
        subtittle: "ARTE COMO HERRAMIENTA DE INCLUSIÓN Y DESARROLLO",
        members: ["Elisa Lovato", "María Cherry", "Alejandra Barranquero"],
        objetives: [
            "Reconocer el valor de trabajar en equipo y descubrir habilidades propias.",
            "Gestionar proyectos basados en círculos musicales.",
            "Armonizar los trayectos juveniles con programas basados en el arte.",
            "Generar espacios de aprendizajes práctico, en la comunidad para desarrollar las fortalezas artísticas.",
        ],
    },
]

export default AreasDeIncidencia
