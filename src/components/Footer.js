import React, { useState, useEffect } from 'react';

const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="footer">
      <p>&copy; {year} Queralt Sosa Mompel</p>
    </footer>
  );
};

export default Footer;