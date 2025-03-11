import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { ArrowLeft } from "lucide-react";

const categories = [
  {
    name: "7 - 14 años",
    km: "1.5 km",
    vueltas: "1 vuelta",
    genero: "Femenino",
    link: "https://forms.gle/biqo62VL4MnvE2zK7",
  },
  {
    name: "15 - 28 años",
    km: "3 km",
    vueltas: "2 vueltas",
    genero: "Femenino",
    link: "https://forms.gle/yEBCrkqKWpJnaGW49",
  },
  {
    name: "29 - 50 años",
    km: "3 km",
    vueltas: "2 vueltas",
    genero: "Femenino",
    link: "https://forms.gle/QcHCNbHPtXF9f8jK7",
  },
  {
    name: "50 años en adelante",
    km: "1.5 km",
    vueltas: "1 vuelta",
    genero: "Femenino",
    link: "https://forms.gle/F5LTyzgMRagovYJ6A",
  },
  {
    name: "Elites (Pro)",
    km: "5 km",
    vueltas: "3 vueltas",
    genero: "Femenino",
    link: "https://forms.gle/156ZtcB1mT7XCAvy9",
  },
  {
    name: "Sin Límite (Personas en condición de discapacidad) ",
    km: "1.5 km",
    vueltas: "1 vuelta",
    genero: "Femenino",
    link: "https://forms.gle/i5eNFPdp44H2povk7",
  },
  {
    name: "Hombres recreativo",
    km: "3 km",
    vueltas: "2 vueltas",
    genero: "Masculino",
    link: "https://forms.gle/XRrgGXCNMxuXSo186",
  },
];

const Nobsa: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-feminine-lavender via-white to-feminine-lightPink">
      <div className="container mx-auto px-4 py-12">
        <Button
          variant="tertiary"
          onClick={() => navigate("/")}
          className="mb-8 inline-flex items-center"
        >
          <ArrowLeft size={18} className="mr-2" /> Volver al Inicio
        </Button>

        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <img
              src="https://i.postimg.cc/qvqt4Fjq/Nobsa-Centro.png"
              alt="Carrera de la Mujer Nobsa"
              className="rounded-lg shadow-lg w-full max-w-3xl"
            />
          </div>

          {/* Sección de Categorías */}
          <div className="mb-8">
            <h2
              style={{ fontFamily: "Betterlett" }}
              className="text-6xl  text-feminine-purple mb-4 text-center"
            >
              Categorías
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {categories.map((category, index) => (
                <div
                  key={index}
                  className="bg-feminine-lavender/30 p-6 rounded-xl shadow-md text-center"
                >
                  <h3 className="font-bold text-lg mb-2">{category.name}</h3>
                  <p className="mb-1">
                    📏 <strong>Distancia:</strong> {category.km}
                  </p>
                  <p className="mb-1">
                    🔄 <strong>Vueltas:</strong> {category.vueltas}
                  </p>
                  <p className="mb-1">
                    🚻 <strong>Género:</strong> {category.genero}
                  </p>
                  <span className="inline-block mt-2 bg-gray-400 text-white font-semibold px-4 py-2 rounded-lg shadow opacity-70 cursor-not-allowed">
                    Inscripciones Finalizadas
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Sección del Mapa del Recorrido */}
          <div className="mt-12">
            <h2
              style={{ fontFamily: "Betterlett" }}
              className="text-5xl text-feminine-purple mb-4 text-center"
            >
              Mapa del Recorrido
            </h2>
            <div className="flex justify-center">
              <img
                src="https://i.postimg.cc/QN1Y5WnJ/Nobsa.png"
                height="100"
                className="rounded-lg shadow-lg"
                alt="Mapa del recorrido de la carrera de la mujer Nobsa"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nobsa;
