import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import { ArrowLeft, MapPin, Landmark, Utensils, Camera } from 'lucide-react';

const Nobsa: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-feminine-lavender via-white to-feminine-lightPink">
      <div className="container mx-auto px-4 py-12">
        <Button 
          variant="tertiary" 
          onClick={() => navigate('/')}
          className="mb-8 inline-flex items-center"
        >
          <ArrowLeft size={18} className="mr-2" /> Volver al Inicio
        </Button>
        
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-feminine-pink mb-6 text-center">
            Descubre Nobsa
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <img 
              src="https://images.unsplash.com/photo-1519817914152-22d216bb9170?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Vista del pueblo de Nobsa" 
              className="w-full h-64 object-cover rounded-2xl shadow-lg"
            />
            
            <div>
              <p className="mb-4">
                Nobsa es un encantador pueblo colombiano conocido por su rico patrimonio 
                cultural, hermosos paisajes y artesanías tradicionales. Ubicado en el 
                departamento de Boyacá, ofrece a los visitantes una visión única de las 
                tradiciones colombianas auténticas y una cálida hospitalidad.
              </p>
              <p>
                Como anfitrión de la Segunda Gran Carrera Femenina, Nobsa da la bienvenida 
                a participantes y espectadores para explorar sus calles, degustar su 
                gastronomía y experimentar su vibrante cultura.
              </p>
            </div>
          </div>
          
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-feminine-purple mb-4 flex items-center">
              <Landmark className="mr-2" size={24} /> 
              Puntos de Interés
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-feminine-lavender/30 p-4 rounded-lg">
                <h3 className="font-bold mb-2">Iglesia de Nobsa</h3>
                <p>Una hermosa iglesia colonial en el centro del pueblo, que muestra la arquitectura tradicional.</p>
              </div>
              <div className="bg-feminine-lavender/30 p-4 rounded-lg">
                <h3 className="font-bold mb-2">Mercado de Artesanías en Lana</h3>
                <p>Famoso por sus productos de lana de alta calidad y técnicas tradicionales de tejido.</p>
              </div>
              <div className="bg-feminine-lavender/30 p-4 rounded-lg">
                <h3 className="font-bold mb-2">Punta Larga</h3>
                <p>Un mirador escénico que ofrece vistas panorámicas de los valles circundantes.</p>
              </div>
              <div className="bg-feminine-lavender/30 p-4 rounded-lg">
                <h3 className="font-bold mb-2">Valle de Sugamuxi</h3>
                <p>Hermosos paisajes naturales perfectos para caminatas y actividades al aire libre.</p>
              </div>
            </div>
          </div>
          
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-feminine-purple mb-4 flex items-center">
              <Utensils className="mr-2" size={24} /> 
              Gastronomía Local
            </h2>
            <p className="mb-4">
              Nobsa ofrece deliciosa cocina tradicional colombiana con algunas especialidades locales:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Caldo de costilla - Una sustanciosa sopa para el desayuno</li>
              <li>Arepa boyacense - Tortas de maíz rellenas de queso</li>
              <li>Cocido boyacense - Un guiso tradicional con varias carnes y verduras</li>
              <li>Obleas - Finas galletas con arequipe (dulce de leche)</li>
              <li>Chicha - Una bebida tradicional fermentada de maíz</li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold text-feminine-purple mb-4 flex items-center">
              <Camera className="mr-2" size={24} /> 
              Día de Carrera en Nobsa
            </h2>
            <p className="mb-4">
              El día de la carrera, Nobsa se transformará en una vibrante celebración 
              del empoderamiento femenino y el espíritu comunitario. La ruta de la carrera 
              llevará a las participantes a través de algunas de las partes más pintorescas 
              del pueblo, mostrando su belleza y encanto.
            </p>
            <p>
              Los negocios locales estarán abiertos para dar la bienvenida a los visitantes, 
              y se organizarán eventos especiales en todo el pueblo para crear un ambiente 
              festivo para que todos disfruten.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nobsa;