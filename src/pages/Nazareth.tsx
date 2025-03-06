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
    link: "https://forms.gle/juTy4t7w7cNsephNA",
  },
  {
    name: "15 - 28 años",
    km: "3 km",
    vueltas: "2 vueltas",
    genero: "Femenino",
    link: "https://forms.gle/VnYCR7fsEM31DC2Q9",
  },
  {
    name: "29 - 50 años",
    km: "3 km",
    vueltas: "2 vueltas",
    genero: "Femenino",
    link: "https://forms.gle/Z64ZGjJzTSDZyjw7A",
  },
  {
    name: "50 años en adelante",
    km: "5 km",
    vueltas: "3 vueltas",
    genero: "Femenino",
    link: "https://forms.gle/BDcNgYVNzTVf6Qgd7",
  },
  {
    name: "Elites (Pro)",
    km: "5 km",
    vueltas: "3 vueltas",
    genero: "Femenino",
    link: "https://forms.gle/VLeBbdwdAC5RQXpU8",
  },
  {
    name: "Discapacidad",
    km: "1.5 km",
    vueltas: "1 vuelta",
    genero: "Femenino",
    link: "https://forms.gle/egsbSh6qebLrn15B7",
  },
  {
    name: "Hombres recreativo",
    km: "3 km",
    vueltas: "2 vueltas",
    genero: "Masculino",
    link: "https://forms.gle/RCtFPNmpsNG5kjmAA",
  },
];

const Nazareth: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-feminine-lavender via-white to-feminine-lightPink">
      <div className="container mx-auto px-6 py-12">
        <Button
          variant="tertiary"
          onClick={() => navigate("/")}
          className="mb-8 flex items-center text-rose-600"
        >
          <ArrowLeft size={18} className="mr-2" /> Volver al Inicio
        </Button>

        <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-lg p-8 md:p-12 max-w-4xl mx-auto">
          <h1 className="text-5xl font-extrabold text-feminine-pink mb-8 text-center">
            Carrera de la Mujer - Barrio Nazareth
          </h1>

          {/* Sección de Categorías */}
          <div className="mb-8">
            <h2 className="text-3xl font-semibold text-feminine-purple mb-6 text-center">
              Categorías de Participación
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {categories.map((category, index) => (
                <div
                  key={index}
                  className="bg-white border-2 border-rose-300 p-6 rounded-xl shadow-md text-center transition transform hover:scale-105"
                >
                  <h3 className="font-bold text-xl text-rose-700 mb-2">
                    {category.name}
                  </h3>
                  <p className="text-purple-800 mb-1">
                    Distancia: {category.km}
                  </p>
                  <p className="text-purple-800 mb-1">
                    Vueltas: {category.vueltas}
                  </p>
                  <p className="text-purple-800 mb-1">
                    Género: {category.genero}
                  </p>
                  <a
                    href={category.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 bg-feminine-pink text-white font-semibold px-4 py-2 rounded-lg shadow hover:bg-feminine-purple transition"
                  >
                    Inscribirse
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Sección de Información */}
          <div className="mt-12">
            <h2 className="text-3xl font-semibold text-purple-700 mb-4 text-center">
              Recorrido y Ubicación
            </h2>
            <div className="flex justify-center">
              <img
                src="https://i.postimg.cc/ydSQLJ6B/Nazareth.png"
                height="100"
                className="rounded-lg shadow-md border-2 border-rose-400"
                alt="Mapa del recorrido de la carrera en Nazareth"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nazareth;
