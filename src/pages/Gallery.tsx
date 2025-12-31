import { Link } from 'react-router-dom';
import { dresses } from '@/data/dresses';

const Gallery = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8 text-center">Oromo Dress Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {dresses.map((dress) => (
          <Link to={`/dress/${dress.id}`} key={dress.id} className="bg-card rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <img src={dress.image} alt={dress.name} className="w-full h-64 object-cover" />
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">{dress.name}</h2>
              <p className="text-muted-foreground">{dress.occasion}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Gallery;