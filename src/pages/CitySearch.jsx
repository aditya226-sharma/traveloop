import React from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';

export default function CitySearch() {
  return (
    <div className="page-transition">
      <div className="flex-between" style={{ marginBottom: '2rem' }}>
        <h1>Find Cities</h1>
        <Link to="/itinerary-builder" className="btn-outline">Back to Builder</Link>
      </div>
      <div style={{ position: 'relative', marginBottom: '2rem' }}>
        <Search style={{ position: 'absolute', top: '50%', left: '1rem', transform: 'translateY(-50%)', color: 'var(--color-text-secondary)' }} size={20} />
        <input className="input-field" type="text" placeholder="Search for cities..." style={{ paddingLeft: '3rem' }} />
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1.5rem' }}>
        <div className="glass-panel" style={{ padding: '1.5rem' }}>
          <h3>Rome, Italy</h3>
          <p style={{ color: 'var(--color-text-secondary)', marginBottom: '1rem' }}>High Popularity • Cost: $$$</p>
          <button className="btn-primary" style={{ width: '100%' }}>Add to Trip</button>
        </div>
      </div>
    </div>
  );
}
