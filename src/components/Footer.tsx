const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground mt-auto">
      <div className="container mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <div className="text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Shaggarcity. All rights reserved.</p>
          <p className="mt-1">Promoting Oromo Culture with the IT Women's Promoter.</p>
          <p>eservice.shaggarcity.et</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;