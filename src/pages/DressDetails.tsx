import { useParams, Link } from 'react-router-dom';
import { dresses } from '@/data/dresses';
import { ArrowLeft } from 'lucide-react';

const DressDetails = () => {
  const { id } = useParams();
  const dress = dresses.find((d) => d.id === parseInt(id || ''));

  if (!dress) {
    return (
      <div className="text-center">
        <h2 className="text-2xl font-bold">Dress not found</h2>
        <Link to="/gallery" className="text-primary hover:underline mt-4 inline-block">Back to Gallery</Link>
      </div>
    );
  }

  return (
    <div>
      <Link to="/gallery" className="inline-flex items-center text-primary hover:underline mb-8">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Gallery
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <img src={dress.image} alt={dress.name} className="w-full h-auto object-cover rounded-lg shadow-lg"/>
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-bold mb-4">{dress.name}</h1>
          <p className="text-lg text-muted-foreground mb-4"><strong>Occasion:</strong> {dress.occasion}</p>
          <p className="text-lg leading-relaxed">{dress.description}</p>
        </div>
      </div>
    </div>
  );
};

export default DressDetails;