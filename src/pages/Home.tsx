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
                  <h2
                    className="text-7xl md:text-5xl  text-feminine-purple font-betterlett"
                    style={{ fontFamily: "Betterlett" }}
                  >
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
                  <Button variant="tertiary" onClick={() => navigate("/nobsa")}>
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
            <div className="text-center">
              <h2
                className="text-5xl md:text-5xl text-feminine-purple"
                style={{ fontFamily: "Betterlett" }}
              >
                🏅 Premiación 🏅
              </h2>
              <p className="text-lg text-feminine-pink max-w-2xl mx-auto mt-4 font-semibold mb-4">
                🥇🥈🥉 Se entregarán premios a los tres primeros lugares en las
                categorías: 7 a 14, 15 a 28, 29 a 50 y 50 en adelante, en ambas
                competencias (Nobsa y Nazareth).
              </p>
              <p className="text-lg text-feminine-purple font-semibold mb-4">
                🏆 En la categoría Élite, se premiará al primer 🥇 y segundo 🥈
                puesto.
              </p>
              <p className="text-lg text-feminine-pink font-semibold">
                🎟️ En la categoría "Sin Límites", se realizarán rifas entre los
                participantes.
              </p>
            </div>
          </div>

          <div className="relative bg-white/80 mt-5 backdrop-blur-sm rounded-3xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2
                className="text-5xl md:text-5xl  text-feminine-purple"
                style={{ fontFamily: "Betterlett" }}
              >
                📜 Reglamentación
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-feminine-lightPink2 p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold">🏁 Reglas Generales</h3>
                <ul className="list-none pl-4 mt-2 text-gray-700">
                  <li>🏃‍♂️ La carrera termina cuando el atleta cruza la meta.</li>
                  <li>
                    📊 El orden de llegada es determinado por el orden en que
                    los atletas cruzan la línea de meta.
                  </li>
                  <li>
                    ⏱️ El tiempo se mide desde el disparo de salida hasta que el
                    atleta cruza la línea de meta.
                  </li>
                </ul>
              </div>

              <div className="bg-feminine-purple/20 p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold">⚠️ Reglas de Penalización</h3>
                <ul className="list-none pl-4 mt-2 text-gray-700">
                  <li>
                    🚷 Si un atleta obstruye o interfiere con otro atleta, puede
                    ser penalizado o descalificado.
                  </li>
                  <li>
                    📍 Si un atleta abandona la ruta designada sin autorización,
                    puede ser descalificado.
                  </li>
                </ul>
              </div>

              <div className="bg-feminine-purple/20 p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold">
                  🚨 Reglas de Descalificación
                </h3>
                <ul className="list-none pl-4 mt-2 text-gray-700">
                  <li>
                    🧪 El uso de cualquier sustancia psicoactiva es motivo de
                    descalificación.
                  </li>
                  <li>
                    🙅 Si un atleta se comporta de manera antideportiva, puede
                    ser descalificado.
                  </li>
                  <li>
                    ❌ Si un atleta incumple con alguna de las reglas de
                    competencia, puede ser descalificado.
                  </li>
                </ul>
              </div>

              <div className="bg-feminine-lightPink2 p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold">🏃 Reglas de Competencia</h3>
                <ul className="list-none pl-4 mt-2 text-gray-700">
                  <li>
                    🚦 Salida: Los atletas deben permanecer detrás de la línea
                    de salida hasta que se dispare el arma de salida.
                  </li>
                  <li>
                    🚫 No se permite obstruir o interferir con otros atletas.
                  </li>
                  <li>
                    🛤️ Ruta: Los atletas deben correr por la ruta designada y no
                    pueden abandonarla sin autorización.
                  </li>
                  <li>
                    🚫 No se permite recibir ayuda externa, como comida, bebida
                    o equipo, durante la carrera.
                  </li>
                  <li>
                    🎽 Los atletas deben utilizar equipo autorizado y no pueden
                    llevar objetos peligrosos.
                  </li>

                  <li>
                    🤝Se espera un comportamiento respetuoso hacia otros
                    atletas, jueces y espectadores.
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
