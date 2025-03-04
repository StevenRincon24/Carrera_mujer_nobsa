import React from "react";
import { useNavigate } from "react-router-dom";
import AnimatedText from "../components/AnimatedText";
import Button from "../components/Button";
import { motion } from "framer-motion"; // Importamos Framer Motion

const Home: React.FC = () => {
  const navigate = useNavigate();

  const title = ["Segunda", "Carrera", "de", "la", "MUJER"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-feminine-lavender via-white to-feminine-lightPink">
      <div className="container mx-auto px-4 py-12">
        <header className="text-center">
          <div className="inline-flex gap-4 flex-wrap justify-center leading-[1.3]">
            {title.map((word, index) => {
              if (word === "MUJER") {
                return (
                  <motion.span
                    key={index}
                    className="text-5xl md:text-7xl font-bold mx-2"
                    animate={{
                      color: ["#FF69B4", "#c2c2c2", "#9370DB"],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 20,
                      ease: "easeInOut",
                    }}
                  >
                    {word}
                  </motion.span>
                );
              } else {
                return (
                  <AnimatedText
                    key={index}
                    text={word}
                    delay={index * 200}
                    animation="rebound"
                    className="text-5xl md:text-7xl font-bold text-feminine-pink mx-2"
                  />
                );
              }
            })}
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
                  <p className="text-gray-700 mb-6">
                    Sé parte de este evento inspirador que celebra la fuerza,
                    determinación y espíritu comunitario de las mujeres en los
                    hermosos pueblos de Nobsa y Nazareth.
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

          <div className="mt-16 text-center">
            <p className="text-feminine-pink font-medium">
              ¡Las inscripciones abrirán pronto! Mantente atenta para más
              detalles.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
