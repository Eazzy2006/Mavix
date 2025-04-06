import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../images/mavix-transparent.png";

const WebDevelopment = () => {
  // Styles object with dark theme
  const styles = {
    container: {
      maxWidth: '1500px',
      margin: '0 auto',
      padding: '2rem',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      color: '#ffffff',
      backgroundColor: '#1a1a2e',
      minHeight: '100vh'
    },
    header: {
      textAlign: 'center',
      marginBottom: '3rem',
      padding: '2rem 0',
      background: 'linear-gradient(135deg, #16213e 0%, #0f3460 100%)',
      borderRadius: '10px'
    },
    title: {
      fontSize: '3.8rem',
      marginBottom: '1.5rem',
      fontWeight: '800',
      position:'relative',
      left:'120px',
      background: 'linear-gradient(90deg, #00dbde 0%, #fc00ff 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent'
    },
    subtitle: {
      fontSize: '1.3rem',
      color: '#e6e6e6',
      opacity: '0.9'
    },
    nav: {
      display: 'flex',
      justifyContent: 'center',
      gap: '2rem',
      marginBottom: '3rem',
      padding: '1.5rem',
      background: '#16213e',
      borderRadius: '8px',
      flexWrap: 'wrap'
    },
    navLink: {
      textDecoration: 'none',
      color: '#ffffff',
      fontWeight: '500',
      fontSize: '1.1rem',
      padding: '0.5rem 1rem',
      borderRadius: '5px',
      transition: 'all 0.3s ease',
      ':hover': {
        background: 'rgba(255,255,255,0.1)',
        transform: 'translateY(-2px)'
      }
    },
    section: {
      marginBottom: '4rem',
      padding: '2rem',
      background: '#16213e',
      borderRadius: '10px',
      boxShadow: '0 10px 20px rgba(0,0,0,0.2)'
    },
    sectionTitle: {
      fontSize: '2rem',
      marginBottom: '1.5rem',
      color: '#ffffff',
      position: 'relative',
      paddingBottom: '0.5rem',
      ':after': {
        content: '""',
        position: 'absolute',
        bottom: '0',
        left: '0',
        width: '80px',
        height: '4px',
        background: 'linear-gradient(90deg, #00dbde 0%, #fc00ff 100%)',
        borderRadius: '2px'
      }
    },
    sectionText: {
      lineHeight: '1.8',
      fontSize: '1.1rem',
      color: '#e6e6e6'
    },
    projectGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
      gap: '2rem',
      marginTop: '2rem'
    },
    projectCard: {
      borderRadius: '10px',
      overflow: 'hidden',
      boxShadow: '0 8px 15px rgba(0,0,0,0.3)',
      transition: 'all 0.3s ease',
      ':hover': {
        transform: 'translateY(-10px)',
        boxShadow: '0 15px 30px rgba(0,0,0,0.4)'
      }
    },
    projectImage: {
      height: '220px',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundColor: '#0f3460' // Fallback if no image
    },
    projectPlaceholder: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      background: 'rgba(0,0,0,0.3)',
      color: '#ffffff',
      fontSize: '1.2rem'
    }
  };

  // Sample project data - just placeholder images
  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      category: 'Web Development'
    },
    {
      id: 2,
      title: 'Corporate Website',
      category: 'Web Design'
    },
    {
      id: 3,
      title: 'SEO Campaign',
      category: 'Digital Marketing'
    },
    {
      id: 4,
      title: 'Mobile Application',
      category: 'App Development'
    },
    {
      id: 5,
      title: 'Brand Identity',
      category: 'Graphic Design'
    },
    {
      id: 6,
      title: 'Content Strategy',
      category: 'Digital Marketing'
    },
    {
      id: 6,
      title: 'Content Strategy',
      category: 'Digital Marketing'
    },
    {
      id: 6,
      title: 'Content Strategy',
      category: 'Digital Marketing'
    },
    {
      id: 6,
      title: 'Content Strategy',
      category: 'Digital Marketing'
    },
    {
      id: 6,
      title: 'Content Strategy',
      category: 'Digital Marketing'
    },
    {
      id: 6,
      title: 'Content Strategy',
      category: 'Digital Marketing'
    },
    {
      id: 6,
      title: 'Content Strategy',
      category: 'Digital Marketing'
    },
  ];

  return (
    <div style={styles.container}>
      <header style={styles.header}>
                    <img 
                      src={logo} 
                      alt="Mavix Logo" 
                      className="logo-img"
                      style={{ height: "100px" }}
                    />
        <h1 style={styles.title}>Website Development & SEO</h1>
        <p style={styles.subtitle}>Ndërtimi i eksperiencave dixhitale që sjellin rezultate</p>
      </header>

      <nav style={styles.nav}>
        <Link to="/" style={styles.navLink}>Kryefaqja</Link>
        <Link to="/dashboard" style={styles.navLink}>Dashboard</Link>
        <Link to="/orders" style={styles.navLink}>Orders</Link>
        <Link to="/products" style={styles.navLink}>Products</Link>
        <Link to="/customers" style={styles.navLink}>Customers</Link>
      </nav>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}> Si punojmë ne? </h2>
        <p style={styles.sectionText}>
        Ne krijojmë faqe internet të personalizuara që janë të shpejta, të sigurta dhe të optimizuara për motorët e kërkimit. 
        Qasja jonë e plotë kombinon dizajn të përkryer me ekselencë teknike për të ofruar rezultate të shkëlqyera për biznesin tuaj.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Projektet e mëparshme</h2>
        <div style={styles.projectGrid}>
          {projects.map((project) => (
            <div key={project.id} style={styles.projectCard}>
              <div style={styles.projectImage}>
                <div style={styles.projectPlaceholder}>
                  {project.category}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default WebDevelopment;