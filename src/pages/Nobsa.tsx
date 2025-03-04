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
    link: "https://forms.gle/example1",
  },
  {
    name: "15 - 28 años",
    km: "3 km",
    vueltas: "2 vueltas",
    genero: "Femenino",
    link: "https://forms.gle/example2",
  },
  {
    name: "29 - 50 años",
    km: "3 km",
    vueltas: "2 vueltas",
    genero: "Femenino",
    link: "https://forms.gle/example3",
  },
  {
    name: "Elites (Pro)",
    km: "5 km",
    vueltas: "3 vueltas",
    genero: "Femenino",
    link: "https://forms.gle/example4",
  },
  {
    name: "Discapacidad",
    km: "1.5 km",
    vueltas: "1 vuelta",
    genero: "Femenino",
    link: "https://forms.gle/example5",
  },
  {
    name: "Hombres recreativo",
    km: "3 km",
    vueltas: "2 vueltas",
    genero: "Masculino",
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
                  <p className="mb-1">Vueltas: {category.vueltas}</p>
                  <p className="mb-1">Género: {category.genero}</p>
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

          {/* Sección del Mapa del Recorrido */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-feminine-purple mb-4 text-center">
              Mapa del Recorrido
            </h2>
            <div className="flex justify-center">
              <img
                src="https://cultura-nobsa-imagenes.s3.us-east-2.amazonaws.com/Nazareth.png?response-content-disposition=inline&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMiJGMEQCIBynPC16OudAqRePN8%2By56iLgzeoE2CL9CdMozR%2B1ZYoAiBZjSL4USrxHvhA09TL%2B2mm6dFjXmhGlkv2YWEHCYUEgCrQAwjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAEaDDU5NDgwMDkxMzM4MyIMPshSiWlktwtBJaVNKqQDZucrjqt3ntLGykHHCFnLMQphOAkXrlBG6DOBnu0rOncwB8XVVwAYYuFzGMxuwP9dN9EZWQSReh3MNrnGSlfLd%2BkfOP%2B9j4uqUARXyp%2BcpDn3YnUnfIU41y4X2XCZdQLS43gOIcPJnQ8xYKozKk9F2IQui%2F4pM4RNeBZ6z5k2GXV0R%2F%2FJa%2FcVYS7T9W0uvFohKqxz2mLAZuJoZKtO%2FJkznYoL57os0KsrnIRFUqs0igIy%2FD3d66pZhAcuMCcn61er99Kv5ipnv6kS9oNwX0NBvgzaCIJ8mFODldEbii2WmWW8KrcTz4WFMUCjHdnbMig1bV9KfQo5JyzT6aZDEUFQ6%2B0wwTQJHvoBYekqKLgqX2sMAPuZChHtpRlceE1LUfZVwASioR9ycNS3swCaZiWo%2B3F92rXPlFUyLa0xFRlYXqNK3CHJcwZdlK5jttzLW3CSMKvWul7P2g0uVY96VAHrOB5TvXxLjmX4nf05bWBC5VBTkUvP29IEMbK3jSO50OH29zNvl2QVapO9vclf07CAK48gZabOoTCYmNXj5dvFa9ehL%2FdPMMfknL4GOuUC6f5c6fangh6eCjpV%2FCyWbH%2BDHUhItghB5BuMTcEJ7dIcG6Z0%2BRob2ckxQwnBFdOqe%2BDkXUPwbMkcfLx1q%2FXFfaN4zNcRp0dxKMq0QTXzv7%2FpCxSwhN5E7iUDMDdJkW5eAk6hKfFH7JukfEmw2r0UlXDdxqo6vJ0CjmRXNzQYmxkFclIaKP2RjWRypPVIl7nuI4oCOAKLrwaNnKobBh%2FZ2KlhaJBUg9fpCUC82vGKATsMSy187bOA4djDfaSlXecmOWeJFENmUdAIedqQwOvbN9FAvSYd8reAVPq1VgONc%2FBfBX4ATeCNqiyIYaodnz%2FOEIABgpqgLCvB5q9AmhPgv3%2BoXtvVBQSn0gVY7M9gDFmM16sc15a24L8%2FfjWLtco%2B47dkbauszCTBCvKRgsd3P%2B%2Bc5ZJwnb7lNrVd9CBiCha6%2FW12Aoxhgb5sars1aJpwglaHHgSlGVSckh6IDbMhDuS0ru0J&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIAYU7HFVPTTZPZUOLD%2F20250304%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T174744Z&X-Amz-Expires=43200&X-Amz-SignedHeaders=host&X-Amz-Signature=b6767681db3dcbee8d6740fa9236a8169c0bf45bb90cede30cf3ac9e11f680da"
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
