import React from 'react';
import { Link } from 'react-router-dom';
import { Plus } from 'lucide-react';

export default function ItineraryBuilder() {
  return (
    <div className="page-transition">
      <div className="flex-between" style={{ marginBottom: '2rem' }}>
        <h1>Itinerary Builder</h1>
        <Link to="/itinerary-view" className="btn-outline">Preview Itinerary</Link>
      </div>
      <div className="glass-panel" style={{ padding: '2rem' }}>
        <div className="flex-between" style={{ marginBottom: '1.5rem' }}>
          <h3>Trip Stops</h3>
          <Link to="/city-search" className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Plus size={16} /> Add Stop
          </Link>
        </div>
        <p style={{ color: 'var(--color-text-secondary)' }}>No stops added yet. Start by searching for a city.</p>
      </div>
    </div>
  );
}
