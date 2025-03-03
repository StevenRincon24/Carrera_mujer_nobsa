import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import { ArrowLeft, MapPin, Landmark, Utensils, Heart } from 'lucide-react';

const Nazareth: React.FC = () => {
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
            Visita Nazareth
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <img 
              src="https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Vista panorámica de Nazareth" 
              className="w-full h-64 object-cover rounded-2xl shadow-lg"
            />
            
            <div>
              <p className="mb-4">
                Nazareth es un pueblo pintoresco con un rico patrimonio cultural y una 
                impresionante belleza natural. Como una de las ubicaciones asociadas para 
                la Segunda Gran Carrera Femenina, Nazareth da la bienvenida a los visitantes 
                para explorar su encanto único y cálida comunidad.
              </p>
              <p>
                El pueblo es conocido por sus amables habitantes, artesanías tradicionales 
                y hermosos alrededores que lo convierten en un complemento perfecto para 
                la experiencia de la carrera.
              </p>
            </div>
          </div>
          
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-feminine-purple mb-4 flex items-center">
              <Landmark className="mr-2" size={24} /> 
              Destacados de Nazareth
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-feminine-lavender/30 p-4 rounded-lg">
                <h3 className="font-bold mb-2">Plaza Principal</h3>
                <p>El corazón del pueblo, con una hermosa iglesia y arquitectura tradicional.</p>
              </div>
              <div className="bg-feminine-lavender/30 p-4 rounded-lg">
                <h3 className="font-bold mb-2">Mercado Artesanal</h3>
                <p>Artesanos locales muestran sus productos hechos a mano, desde textiles hasta cerámica.</p>
              </div>
              <div className="bg-feminine-lavender/30 p-4 rounded-lg">
                <h3 className="font-bold mb-2">Mirador</h3>
                <p>Ofrece impresionantes vistas del campo circundante y las montañas.</p>
              </div>
              <div className="bg-feminine-lavender/30 p-4 rounded-lg">
                <h3 className="font-bold mb-2">Centro Cultural</h3>
                <p>Alberga exposiciones de arte local y presentaciones culturales durante todo el año.</p>
              </div>
            </div>
          </div>
          
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-feminine-purple mb-4 flex items-center">
              <Utensils className="mr-2" size={24} /> 
              Sabores Locales
            </h2>
            <p className="mb-4">
              Nazareth ofrece deliciosa cocina local que refleja el patrimonio agrícola de la región:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Mazamorra - Un postre tradicional a base de maíz</li>
              <li>Trucha arcoiris - Trucha preparada con hierbas locales</li>
              <li>Ajiaco - Una sopa de papa y maíz con pollo</li>
              <li>Brevas con arequipe - Higos con caramelo</li>
              <li>Aguapanela - Una bebida tradicional hecha de panela (azúcar de caña sin refinar)</li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold text-feminine-purple mb-4 flex items-center">
              <Heart className="mr-2" size={24} /> 
              Participación Comunitaria
            </h2>
            <p className="mb-4">
              Nazareth se enorgullece de ser parte de la Segunda Gran Carrera Femenina, 
              con muchas mujeres locales participando en el evento. El pueblo ha organizado 
              actividades especiales para dar la bienvenida a las participantes y visitantes.
            </p>
            <p>
              Durante el fin de semana de la carrera, los negocios locales ofrecerán 
              promociones especiales, y grupos comunitarios organizarán presentaciones 
              culturales y exposiciones que celebran los logros y contribuciones de las 
              mujeres a la región.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nazareth;