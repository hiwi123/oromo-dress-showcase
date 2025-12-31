import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-primary text-primary-foreground shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold tracking-tight">
              Shaggarcity
            </Link>
          </div>
          <div className="hidden md:block">
            <nav className="flex items-center space-x-4">
              <Link to="/" className="hover:bg-primary-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium">Home</Link>
              <Link to="/gallery" className="hover:bg-primary-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium">Gallery</Link>
              <Link to="/about" className="hover:bg-primary-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium">About</Link>
            </nav>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-primary-foreground hover:text-white hover:bg-primary-foreground focus:outline-none">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-primary-foreground hover:text-primary">Home</Link>
            <Link to="/gallery" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-primary-foreground hover:text-primary">Gallery</Link>
            <Link to="/about" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-primary-foreground hover:text-primary">About</Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;