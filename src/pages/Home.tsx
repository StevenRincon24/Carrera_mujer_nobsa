import React from "react";
import { useNavigate } from "react-router-dom";
import AnimatedText from "../components/AnimatedText";
import Button from "../components/Button";
import { motion } from "framer-motion";

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-feminine-lavender via-white to-feminine-lightPink">
      <div className="container mx-auto px-4 py-12">
        <header className="text-center">
          <div>
            <img
              src="https://i.postimg.cc/rprV8cTg/Cabezote-Web-Carrera-Mujer-04.png"
              alt="Mujeres corriendo en una carrera"
              className="w-full"
            />
          </div>

          <div className="mt-6 opacity-0 animate-[fadeIn_1s_ease-in_forwards_1.5s]">
            <p className="text-feminine-purple text-xl md:text-2xl font-medium">
              Empoderando a las mujeres a través del deporte y la comunidad
            </p>
          </div>
        </header>

        <main>
          <div className="relative">
            <div className="absolute -left-20 w-64 h-64 bg-feminine-pink/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-feminine-purple/10 rounded-full blur-3xl"></div>

            <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto">
              <div className="flex flex-col items-center">
                <div className="w-full max-w-md mx-auto">
                  <img
                    src="https://bogota.gov.co/sites/default/files/styles/1050px/public/2024-09/carrera-de-la-mujer.png"
                    alt="Mujeres corriendo en una carrera"
                    className="w-full h-64 object-cover rounded-2xl shadow-lg mb-8"
                  />
                </div>

                <div className="text-center mb-10">
                  <h2 className="text-2xl md:text-3xl font-bold text-feminine-purple font-feminine">
                    ¡Únete a una experiencia inolvidable!
                  </h2>
                  <p className="text-gray-700 mb-6 text-lg mt-5">
                    Gracias por ser parte de la II Carrera Atlética de la Mujer
                    Nobsa 2025 <b>#NobsaEsMujer</b> <br />
                    Sé parte de este evento inspirador que celebra la fuerza,
                    determinación y espíritu comunitario de las mujeres en Nobsa
                    y en el barrio Nazareth. La carrera atlética femenina tiene
                    como objetivo promover la salud, el deporte y la igualdad de
                    género.
                  </p>
                </div>

                <div className="flex flex-col md:flex-row gap-4 justify-center w-full">
                  <Button
                    variant="secondary"
                    onClick={() => navigate("/nobsa")}
                  >
                    Inscripciones Carrera Nobsa Centro
                  </Button>

                  <Button
                    variant="tertiary"
                    onClick={() => navigate("/nazareth")}
                  >
                    Inscripciones Nobsa Barrio Nazareth
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Sección de Premiación */}
          <div className="relative mt-5 bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto">
            <div className=" text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-feminine-purple ">
                🎖 Premiación 🎖
              </h2>
              <p className="text-lg text-feminine-pink max-w-2xl mx-auto  mt-4 font-semibold mb-4">
                🏆 Se otorgará premio a las tres primeras personas por categoría
                en las diferentes carreras Nobsa y Nazareth.
              </p>
              <p className="text-lg text-feminine-purple font-semibold mb-4">
                🏆 En la categoría profesional, solamente se otorgan premios al
                primer y segundo puesto.
              </p>
              <p className="text-lg text-feminine-pink font-semibold">
                🎟️ Se harán rifas en la categoría "Sin Límites" (personas en
                condición de discapacidad).
              </p>
            </div>
          </div>

          <div className="relative bg-white/80 mt-5 backdrop-blur-sm rounded-3xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-feminine-purple">
                📜 Reglamentación
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-feminine-lightPink p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold">🏁 Reglas Generales</h3>
                <ul className="list-none pl-4 mt-2 text-gray-700">
                  <li>🏃‍♂️ La carrera termina cuando el atleta cruza la meta.</li>
                  <li>
                    📊 El orden de llegada es determinado por quien cruce
                    primero.
                  </li>
                  <li>
                    ⏱️ El tiempo se mide desde el disparo de salida hasta la
                    meta.
                  </li>
                </ul>
              </div>
              <div className="bg-feminine-purple/20 p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold">🏃 Reglas de Competencia</h3>
                <ul className="list-none pl-4 mt-2 text-gray-700">
                  <li>🚦 Salida: Nadie debe cruzar antes del disparo.</li>
                  <li>🛤️ Ruta: Se debe correr en el trayecto designado.</li>
                  <li>🚫 No se permite obstruir a otros atletas.</li>
                </ul>
              </div>
              <div className="bg-feminine-lightPink p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold">⚠️ Reglas de Penalización</h3>
                <ul className="list-none pl-4 mt-2 text-gray-700">
                  <li>
                    🚷 Obstrucción: Puede resultar en penalización o
                    descalificación.
                  </li>
                  <li>
                    📍 Abandono de ruta: Descalificación si no hay autorización.
                  </li>
                </ul>
              </div>
              <div className="bg-feminine-purple/20 p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold">
                  🚨 Reglas de Descalificación
                </h3>
                <ul className="list-none pl-4 mt-2 text-gray-700">
                  <li>
                    🧪 Dopaje: Uso de sustancias prohibidas resulta en
                    descalificación.
                  </li>
                  <li>🙅 Conducta antideportiva no será tolerada.</li>
                  <li>
                    ❌ Incumplir reglas de competencia conlleva descalificación.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
