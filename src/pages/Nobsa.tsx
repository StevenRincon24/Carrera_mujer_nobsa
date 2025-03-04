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
                src="https://cultura-nobsa-imagenes.s3.us-east-2.amazonaws.com/Nobsa.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAYU7HFVPT6OPTHL7Y%2F20250304%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T170357Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMiJGMEQCIG13FASIYh4nrT%2F%2B%2B5zq2MYhrp7AZ2NU32MXOCy0MbR6AiAu7rbAv%2FxMeBRg7Or4z3N4t13YiYiA2LCPSAJaNDPDqyrxAgjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAEaDDU5NDgwMDkxMzM4MyIM%2BD7heZViIl3KKaLhKsUCGdYyvDwRfQFA4c5jDkIvbr8lj%2BVHnz%2F4%2FlyITZesak%2BnaNgro5YJG%2Bpi2yFdyOiOBw6Xkbl1YQ7dvl6KXOW2HgXN7JRMwkruFLs4llZBPNISTineCyfeB1sEUiIc3wRfysYpp9QQxrueUSZ51aqc2c6U96DTL4wDW8ypw3bknkR2%2FGlItBn33Os55qnN88HNszjNzWtcTCfVfJE3%2FLSeeaNL74phsQ8Ic4CI5nkv7zAImsnWI9TYfQBN09m1%2FuzPQCqugrc2a1nYM28JLaBRkb0KLdrzQVe7KamFv0WQO7O0g3rXZXJIF7h%2BSHSYFO%2BIpU6uJvGlkkwJNVPty3lCLWA9rUnvI5BKw21AcoPVDIiDu4KBkuZYXn9KhJMzAA%2BQMdmwWL%2BBP7IAPQsFbPcaXDdj7lMcx7Zpa3oXidxo9p3uFQ8H1jDH5Jy%2BBjq0AlhozS7Z8QnM2O0z7fp6njjUmTR5q2Xk4KgeZ1rOL4Nu77s%2FfulB9vDUdqN3nOY5CDTEcfgJUEISWmVOoHftTrLvg4zmaj3cD1K7KPs3%2B%2BLJO82lkYY0nn53%2BlU6Z9cOIzh0v93RC9bozJ%2BU093kic%2FR%2BjJubDumlye5j9IhOTT0iBkPD4b%2Bl9rKcrRNmpPYGB4es%2ByBFSVIxW3adRjz%2F5uokUg%2B0m%2FIteGioZdKoYBb7n7qUWOzimkrSgBGG88%2Fs0rDJSHAv3whWECC7s0GTcABeDrkcd6up4inqFkGp6M0XRVRJGv0hv%2FaAm%2B0S4oZJDWU19Cl679xBaeUPr1DBTAr4%2BMUn%2BSa6QQO%2FTTW%2Fjj4tA62aYEnfzuXKY6RS3YBQJR5Q5MLJIIFHn2HIACOFN9Y4%2B%2Bw&X-Amz-Signature=d62d14513b917c37c5eabee5ccb864aa3adc944834d692b89231429644e34514&X-Amz-SignedHeaders=host&response-content-disposition=inline"
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
