import AnimatedSection from '../components/AnimatedSection';
import ProductCard from '../components/ProductCard';
import { products } from '../data/agricultureData';

export default function Products() {
  return (
    <div className="container">
      <AnimatedSection className="section-header">
        <h2>Our Agricultural Products</h2>
        <p>Premium solutions to maximize your yield and protect your crops.</p>
      </AnimatedSection>

      <div className="products-grid">
        {products.map((product, index) => (
          <AnimatedSection key={product.id} delay={index * 0.1}>
            <ProductCard product={product} />
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
}
