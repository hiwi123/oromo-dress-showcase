import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="text-center">
      <div 
        className="relative h-[60vh] bg-cover bg-center rounded-lg shadow-lg flex items-center justify-center text-white"
        style={{ backgroundImage: `url('https://storage.googleapis.com/dala-prod-public-storage/generated-images/42a963c5-1730-403c-903c-9932d631de8e/oromo-traditional-dress-2-v7xxnd2-1767154857573.webp')` }}
      >
        <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
        <div className="relative z-10 p-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">Welcome to Shaggarcity</h1>
          <p className="text-lg md:text-2xl mb-8">Discover the beauty of Oromo traditional attire.</p>
          <Link to="/gallery" className="bg-primary hover:bg-primary-foreground hover:text-primary text-primary-foreground font-bold py-3 px-6 rounded-lg text-lg transition duration-300">
            Explore Gallery
          </Link>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-3xl font-bold mb-8">Our Collection</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-card p-6 rounded-lg shadow-md">
            <img src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/42a963c5-1730-403c-903c-9932d631de8e/oromo-traditional-dress-1-35m72nk-1767154849877.webp" alt="Woyane Dress" className="rounded-lg mb-4 h-64 w-full object-cover"/>
            <h3 className="text-xl font-semibold mb-2">Vibrant Dresses</h3>
            <p className="text-muted-foreground">Experience the rich colors and intricate designs of Oromo dresses.</p>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-md">
            <img src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/42a963c5-1730-403c-903c-9932d631de8e/oromo-traditional-dress-3-qb8h60t-1767154864763.webp" alt="Dress Detail" className="rounded-lg mb-4 h-64 w-full object-cover"/>
            <h3 className="text-xl font-semibold mb-2">Exquisite Details</h3>
            <p className="text-muted-foreground">Admire the craftsmanship in every stitch and bead.</p>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-md">
            <img src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/42a963c5-1730-403c-903c-9932d631de8e/oromo-traditional-dress-4-m2pihrl-1767154872148.webp" alt="Cultural Celebration" className="rounded-lg mb-4 h-64 w-full object-cover"/>
            <h3 className="text-xl font-semibold mb-2">Cultural Heritage</h3>
            <p className="text-muted-foreground">Learn about the stories and traditions behind the attire.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;