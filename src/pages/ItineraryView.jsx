import React from 'react';
import { Link } from 'react-router-dom';

export default function ItineraryView() {
  return (
    <div className="page-transition">
      <div className="flex-between" style={{ marginBottom: '2rem' }}>
        <h1>Summer in Europe</h1>
        <Link to="/public-itinerary" className="btn-outline">Share</Link>
      </div>
      <div className="glass-panel" style={{ padding: '2rem' }}>
        <h2 style={{ marginBottom: '1.5rem', color: 'var(--color-brand-primary)' }}>Day 1: Paris</h2>
        <div style={{ borderLeft: '2px solid var(--color-border)', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div className="glass-panel" style={{ padding: '1rem' }}>
            <h4>10:00 AM - Eiffel Tower Visit</h4>
            <p style={{ color: 'var(--color-text-secondary)' }}>Sightseeing • $30</p>
          </div>
          <div className="glass-panel" style={{ padding: '1rem' }}>
            <h4>01:00 PM - Lunch at Le Jules Verne</h4>
            <p style={{ color: 'var(--color-text-secondary)' }}>Food • $100</p>
          </div>
        </div>
      </div>
    </div>
  );
}
