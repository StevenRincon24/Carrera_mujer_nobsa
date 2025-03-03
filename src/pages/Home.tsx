import React from "react";
import { useNavigate } from "react-router-dom";
import AnimatedText from "../components/AnimatedText";
import Button from "../components/Button";
import { ArrowRight } from "lucide-react";

const Home: React.FC = () => {
  const navigate = useNavigate();

  const title = "Segunda Carrera de la MUJER";
  const titleWords = title.split(" ");

  return (
    <div className="min-h-screen bg-gradient-to-br from-feminine-lavender via-white to-feminine-lightPink">
      <div className="container mx-auto px-4 py-12">
        <header className="text-center mb-16">
          <div className="inline-block">
            {titleWords.map((word, index) => (
              <React.Fragment key={index}>
                {index > 0 && <span> </span>}
                <AnimatedText
                  text={word}
                  delay={index * 200}
                  animation="rebound"
                  className="text-5xl md:text-7xl font-bold text-feminine-pink"
                />
              </React.Fragment>
            ))}
          </div>

          <div className="mt-6 opacity-0 animate-[fadeIn_1s_ease-in_forwards_1.5s]">
            <p className="text-feminine-purple text-xl md:text-2xl font-medium">
              Empoderando a las mujeres a través del deporte y la comunidad
            </p>
          </div>
        </header>

        <main>
          <div className="relative">
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-feminine-pink/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-feminine-purple/10 rounded-full blur-3xl"></div>

            <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto">
              <div className="flex flex-col items-center">
                <div className="w-full max-w-md mx-auto">
                  <img
                    src="https://images.unsplash.com/photo-1486480115419-c2c453a8222d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                    alt="Mujeres corriendo en una carrera"
                    className="w-full h-64 object-cover rounded-2xl shadow-lg mb-8"
                  />
                </div>

                <div className="text-center mb-10">
                  <h2 className="text-2xl md:text-3xl font-bold text-feminine-purple mb-4">
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
                    variant="primary"
                    onClick={() => navigate("/event-description")}
                    className="flex items-center justify-center gap-2"
                  >
                    Descripción del Evento <ArrowRight size={18} />
                  </Button>

                  <Button
                    variant="secondary"
                    onClick={() => navigate("/nobsa")}
                  >
                    Descubre Nobsa
                  </Button>

                  <Button
                    variant="tertiary"
                    onClick={() => navigate("/nazareth")}
                  >
                    Visita Nazareth
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
