import imgCircArt from '../assets/Equipos Multi/CirculosDeArte.jpg';
import Educacion from '../assets/Equipos Multi/Educacion.jpg';
import Oficios from '../assets/Equipos Multi/Escuela de oficios.jpg';
import Facilitacion from '../assets/Equipos Multi/Facilitacion y mediacion.jpg';
import Justicia from '../assets/Equipos Multi/Justicia para victimas.jpg';
import Niñez from '../assets/Equipos Multi/Niñez y juventud.jpg';
import Politicas from '../assets/Equipos Multi/Politicas publicas.jpg';
import Violencia from '../assets/Equipos Multi/Violencia.jpg'; 

export function Areas() {
  const areas = [
    { name: "Círculos de arte", image: imgCircArt, color: "#3999BFAB" },
    { name: "Educación e inclusión de grupos vulnerables", image: Educacion, color: "#E3A647D1" },
    { name: "Escuela de oficios emprende- dores", image: Oficios, color: "#B9CE48C4" },
    { name: "Facilitación y mediación", image: Facilitacion, color: "#C0322DC2" },
    { name: "Justicia para víctimas", image: Justicia, color: "#C0322DC2" },
    { name: "Niñez y juventud", image: Niñez, color: "#2FAEA5B5" },
    { name: "Políticas Públicas", image: Politicas, color: "#47B3DED6" },
    { name: "Violencia de género y otras violencias", image: Violencia, color: "#E3A647CC" }
  ];

  return (
    <div className="max-w-4xl mx-auto p-4 text-center">
      <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2">
        NUESTROS EQUIPOS MULTIDISCIPLINARIOS
      </h2>
      <p className="text-base md:text-lg lg:text-xl mb-6">
        La Fundación cuenta con equipos interdisciplinarios que estudian, analizan y desarrollan proyectos en múltiples áreas de incidencia.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {areas.map((area, index) => (
          <div
            key={index}
            className="relative flex flex-col justify-end p-4 md:p-5 lg:p-6 text-white font-bold text-center bg-cover bg-center h-48 md:h-56 lg:h-64"
            style={{
              backgroundImage: `url(${area.image})`,
            }}
          >
            {/* Capa de color con opacidad */}
            <div
              className="absolute top-0 left-0 w-full h-full"
              style={{
                backgroundColor: area.color,
                opacity: 0.5,
              }}
            ></div>

            {/* Texto alineado al fondo */}
            <span
              className="relative z-10 mb-2 md:mb-3 lg:mb-4 text-lg md:text-xl lg:text-2xl text-left text-white"
              style={{
                textShadow: '2px 2px 5px rgba(0, 0, 0, 0.8)',
              }}
            >
              {area.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

