import React from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';

export default function ActivitySearch() {
  return (
    <div className="page-transition">
      <div className="flex-between" style={{ marginBottom: '2rem' }}>
        <h1>Find Activities</h1>
        <Link to="/itinerary-builder" className="btn-outline">Back to Builder</Link>
      </div>
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
        <div style={{ position: 'relative', flex: 1 }}>
          <Search style={{ position: 'absolute', top: '50%', left: '1rem', transform: 'translateY(-50%)', color: 'var(--color-text-secondary)' }} size={20} />
          <input className="input-field" type="text" placeholder="Search experiences..." style={{ paddingLeft: '3rem' }} />
        </div>
        <select className="input-field" style={{ width: 'auto' }}>
          <option>All Types</option>
          <option>Sightseeing</option>
          <option>Food & Drink</option>
        </select>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
        <div className="glass-panel" style={{ padding: '1.5rem' }}>
          <h3>Colosseum Guided Tour</h3>
          <p style={{ color: 'var(--color-text-secondary)', marginBottom: '1rem' }}>Sightseeing • 2 Hours • $45</p>
          <button className="btn-primary" style={{ width: '100%' }}>Add Activity</button>
        </div>
      </div>
    </div>
  );
}
