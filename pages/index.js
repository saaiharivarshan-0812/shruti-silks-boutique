import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

export default function HomePage() {
  const features = [
    {
      title: 'Premium Quality',
      description: 'Handpicked silk collections from India\'s finest weavers'
    },
    {
      title: 'Exclusive Designs',
      description: 'Unique and elegant designs you won\'t find elsewhere'
    },
    {
      title: 'Fast Shipping',
      description: 'Quick and reliable delivery across India'
    },
    {
      title: 'Customer Support',
      description: '24/7 support for your queries and concerns'
    }
  ];

  return (
    <>
      <Head>
        <title>Shruti Silks Boutique - Premium Silk Collections</title>
        <meta name="description" content="Discover elegant silk sarees, kurtis, and accessories at Shruti Silks Boutique" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main style={styles.container}>
        {/* Navigation */}
        <nav style={styles.nav}>
          <div style={styles.navContent}>
            <h2 style={styles.logo}>Shruti Silks</h2>
            <ul style={styles.navLinks}>
              <li><Link href="/"><a style={styles.link}>Home</a></Link></li>
              <li><Link href="/boutique"><a style={styles.link}>Boutique</a></Link></li>
              <li><Link href="#"><a style={styles.link}>About</a></Link></li>
              <li><Link href="#"><a style={styles.link}>Contact</a></Link></li>
            </ul>
          </div>
        </nav>

        {/* Hero Section */}
        <section style={styles.hero}>
          <div style={styles.heroContent}>
            <h1 style={styles.heroTitle}>Elegance in Every Weave</h1>
            <p style={styles.heroSubtitle}>Discover Premium Silk Collections</p>
            <Link href="/boutique">
              <a style={styles.ctaButton}>Explore Boutique</a>
            </Link>
          </div>
        </section>

        {/* Features */}
        <section style={styles.featuresSection}>
          <h2 style={styles.sectionTitle}>Why Choose Us</h2>
          <div style={styles.featuresGrid}>
            {features.map((feature, index) => (
              <div key={index} style={styles.featureCard}>
                <div style={styles.featureIcon}>✨</div>
                <h3 style={styles.featureTitle}>{feature.title}</h3>
                <p style={styles.featureDescription}>{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer style={styles.footer}>
          <p>&copy; 2026 Shruti Silks Boutique. All rights reserved.</p>
        </footer>
      </main>
    </>
  );
}

const styles = {
  container: {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: '#333',
    backgroundColor: '#fff'
  },
  nav: {
    backgroundColor: '#8b4513',
    padding: '20px',
    position: 'sticky',
    top: 0,
    zIndex: 100,
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  },
  navContent: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  logo: {
    color: 'white',
    fontSize: '24px',
    margin: '0',
    fontWeight: 'bold'
  },
  navLinks: {
    display: 'flex',
    listStyle: 'none',
    gap: '30px',
    margin: '0',
    padding: '0'
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '14px',
    fontWeight: '500'
  },
  hero: {
    background: 'linear-gradient(135deg, #8b4513 0%, #d2a679 100%)',
    color: 'white',
    padding: '120px 20px',
    textAlign: 'center'
  },
  heroContent: {
    maxWidth: '800px',
    margin: '0 auto'
  },
  heroTitle: {
    fontSize: '56px',
    fontWeight: 'bold',
    margin: '0 0 20px 0',
    letterSpacing: '1px'
  },
  heroSubtitle: {
    fontSize: '24px',
    margin: '0 0 30px 0',
    fontWeight: '300'
  },
  ctaButton: {
    display: 'inline-block',
    padding: '15px 40px',
    backgroundColor: 'white',
    color: '#8b4513',
    textDecoration: 'none',
    borderRadius: '30px',
    fontWeight: 'bold',
    transition: 'transform 0.3s ease'
  },
  featuresSection: {
    padding: '80px 20px',
    maxWidth: '1200px',
    margin: '0 auto'
  },
  sectionTitle: {
    fontSize: '36px',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '50px',
    color: '#8b4513'
  },
  featuresGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '40px'
  },
  featureCard: {
    textAlign: 'center',
    padding: '30px'
  },
  featureIcon: {
    fontSize: '48px',
    marginBottom: '15px'
  },
  featureTitle: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '10px',
    color: '#8b4513'
  },
  featureDescription: {
    fontSize: '14px',
    color: '#666',
    lineHeight: '1.6'
  },
  footer: {
    backgroundColor: '#8b4513',
    color: 'white',
    textAlign: 'center',
    padding: '30px 20px',
    marginTop: '60px'
  }
};
