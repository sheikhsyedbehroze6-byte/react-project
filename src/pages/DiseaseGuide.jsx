import AnimatedSection from '../components/AnimatedSection';
import { diseases } from '../data/agricultureData';
import { AlertTriangle, CheckCircle, Leaf } from 'lucide-react';
import './urdu.css'; // Import special styles for Urdu fonts

export default function DiseaseGuide() {
  return (
    <div className="container">
      <AnimatedSection className="section-header">
        <h2>Plant Disease & Solution Guide</h2>
        <p className="urdu-text" style={{ fontSize: '1.4rem', color: 'var(--primary-color)' }}>
          پودوں کی بیماریوں اور علاج کی رہنمائی
        </p>
        <p>Identify common crop diseases in Kashmir and find the exact cure and dosage.</p>
        <p className="urdu-text">
          کشمیر کی عام فصلوں کی بیماریوں کی شناخت کریں اور ان کا درست علاج اور دوا کی مقدار جانیں۔
        </p>
      </AnimatedSection>

      <div className="diseases-grid">
        {diseases.map((disease, index) => (
          <AnimatedSection key={disease.id} delay={index * 0.05} className="disease-card bilingual-card">
            
            <div className="disease-header">
              <span className="crop-badge"><Leaf size={14} style={{marginRight: '4px'}}/> {disease.crop}</span>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem' }}>
                <h3><AlertTriangle size={20} style={{marginRight: '8px'}}/> {disease.name}</h3>
                <h3 className="urdu-text" dir="rtl">{disease.nameUrdu}</h3>
              </div>
            </div>

            <div className="disease-content">
              <div className="english-side">
                <p><strong>Symptoms:</strong> {disease.symptoms}</p>
                <p><strong>Severity:</strong> <span style={{ color: disease.severity === 'High' ? 'red' : 'orange' }}>{disease.severity}</span></p>
              </div>
              <div className="urdu-side urdu-text" dir="rtl">
                <p><strong>علامات:</strong> {disease.symptomsUrdu}</p>
              </div>
            </div>
            
            <div className="disease-cure">
              <div className="english-side">
                <p><CheckCircle size={16} color="var(--primary-color)" style={{ verticalAlign: 'middle', marginRight: '5px' }}/>
                <strong>Recommended Cure:</strong> {disease.cure}</p>
                <p style={{ marginTop: '0.5rem' }}><strong>Dosage:</strong> {disease.dosage}</p>
              </div>
              <div className="urdu-side urdu-text" dir="rtl">
                <p><CheckCircle size={16} color="var(--primary-color)" style={{ verticalAlign: 'middle', marginLeft: '5px' }}/>
                <strong>علاج:</strong> {disease.cureUrdu}</p>
                <p style={{ marginTop: '0.5rem' }}><strong>مقدار:</strong> {disease.dosageUrdu}</p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
}
