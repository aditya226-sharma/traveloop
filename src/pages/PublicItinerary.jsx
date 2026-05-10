import React from 'react';

export default function PublicItinerary() {
  return (
    <div className="page-transition container" style={{ paddingTop: '2rem' }}>
      <div className="glass-panel" style={{ padding: '2rem', textAlign: 'center', marginBottom: '2rem' }}>
        <h1 style={{ marginBottom: '1rem' }}>Summer in Europe</h1>
        <p style={{ color: 'var(--color-text-secondary)', marginBottom: '1.5rem' }}>A beautiful 15-day journey across France, Italy, and Spain.</p>
        <button className="btn-primary">Copy Trip</button>
      </div>
      <div className="glass-panel" style={{ padding: '2rem' }}>
        <h2 style={{ marginBottom: '1.5rem' }}>Itinerary Overview</h2>
        <p style={{ color: 'var(--color-text-secondary)' }}>Day 1: Paris - Eiffel Tower, Louvre Museum</p>
        <p style={{ color: 'var(--color-text-secondary)' }}>Day 2: Paris - Versailles</p>
      </div>
    </div>
  );
}
