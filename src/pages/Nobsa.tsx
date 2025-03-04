import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { ArrowLeft, Landmark, Utensils, Camera } from "lucide-react";

const categories = [
  {
    name: "7 - 14 años",
    km: "3 km",
    vueltas: "1 vuelta",
    link: "https://forms.gle/example1",
  },
  {
    name: "15 - 28 años",
    km: "5 km",
    vueltas: "2 vueltas",
    link: "https://forms.gle/example2",
  },
  {
    name: "29 - 50 años",
    km: "8 km",
    vueltas: "3 vueltas",
    link: "https://forms.gle/example3",
  },
  {
    name: "Elites (Pro)",
    km: "10 km",
    vueltas: "4 vueltas",
    link: "https://forms.gle/example4",
  },
  {
    name: "Discapacidad",
    km: "4 km",
    vueltas: "1 vuelta",
    link: "https://forms.gle/example5",
  },
  {
    name: "Hombres recreativo",
    km: "6 km",
    vueltas: "2 vueltas",
    link: "https://forms.gle/example6",
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
          <h1 className="text-4xl md:text-5xl font-bold text-feminine-pink mb-6 text-center">
            Carrera de la mujer Nobsa
          </h1>

          {/* Sección de Categorías */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-feminine-purple mb-4 text-center">
              Categorías de la Carrera
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {categories.map((category, index) => (
                <div
                  key={index}
                  className="bg-feminine-lavender/30 p-6 rounded-xl shadow-md text-center"
                >
                  <h3 className="font-bold text-lg mb-2">{category.name}</h3>
                  <p className="mb-1">Distancia: {category.km}</p>
                  <p className="mb-4">Vueltas: {category.vueltas}</p>
                  <a
                    href={category.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-feminine-pink text-white font-semibold px-4 py-2 rounded-lg shadow hover:bg-feminine-purple transition"
                  >
                    Inscribirse
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nobsa;
