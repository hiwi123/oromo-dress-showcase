const About = () => {
  return (
    <div className="bg-card p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">About Shaggarcity</h1>
      <div className="space-y-6 text-lg text-foreground">
        <p>
          Shaggarcity is a project dedicated to the celebration and promotion of the rich cultural heritage of the Oromo people, with a special focus on our beautiful traditional dresses. This platform is a collaborative effort led by the IT Women's Promoter of <a href="http://eservice.shaggarcity.et" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">eservice.shaggarcity.et</a>.
        </p>
        <h2 className="text-2xl font-semibold pt-4">Our Mission</h2>
        <p>
          Our mission is to create a digital space where the world can explore, learn about, and appreciate the artistry and stories behind Oromo traditional attire. We aim to empower Oromo women in technology and provide a platform to showcase their skills while preserving our cultural identity.
        </p>
        <h2 className="text-2xl font-semibold pt-4">The IT Women's Promoter</h2>
        <p>
          The IT Women's Promoter is an initiative to encourage and support women in the technology sector within the Shaggarcity administration. By developing projects like this, we provide practical experience and a platform for women to contribute to the digital representation of our culture.
        </p>
      </div>
    </div>
  );
};

export default About;