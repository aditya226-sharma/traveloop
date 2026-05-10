import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Map, Briefcase, PlusCircle, Search, DollarSign, CheckSquare, User, FileText } from 'lucide-react';

export default function Layout() {
  const location = useLocation();
  const isAuthPage = location.pathname === '/';
  const isPublicPage = location.pathname === '/public-itinerary';

  if (isAuthPage || isPublicPage) {
    return <Outlet />;
  }

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <aside className="glass-panel" style={{ width: '250px', borderRight: '1px solid var(--color-border)', padding: '2rem 1rem', display: 'flex', flexDirection: 'column', gap: '1rem', borderRadius: 0, position: 'fixed', height: '100vh', left: 0, top: 0 }}>
        <h2 style={{ paddingLeft: '1rem', marginBottom: '2rem', color: 'var(--color-brand-primary)' }}>Traveloop</h2>
        
        <Link to="/home" className="btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', border: 'none', justifyContent: 'flex-start' }}><Map size={20}/> Home</Link>
        <Link to="/my-trips" className="btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', border: 'none', justifyContent: 'flex-start' }}><Briefcase size={20}/> My Trips</Link>
        <Link to="/create-trip" className="btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', border: 'none', justifyContent: 'flex-start' }}><PlusCircle size={20}/> Plan Trip</Link>
        <Link to="/city-search" className="btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', border: 'none', justifyContent: 'flex-start' }}><Search size={20}/> Explore</Link>
        
        <div style={{ margin: '1rem 0', borderBottom: '1px solid var(--color-border)' }}></div>
        
        <Link to="/budget" className="btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', border: 'none', justifyContent: 'flex-start' }}><DollarSign size={20}/> Budget</Link>
        <Link to="/checklist" className="btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', border: 'none', justifyContent: 'flex-start' }}><CheckSquare size={20}/> Checklist</Link>
        <Link to="/notes" className="btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', border: 'none', justifyContent: 'flex-start' }}><FileText size={20}/> Notes</Link>
        
        <div style={{ marginTop: 'auto' }}>
          <Link to="/profile" className="btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', border: 'none', justifyContent: 'flex-start' }}><User size={20}/> Profile</Link>
        </div>
      </aside>
      
      <main className="container" style={{ flex: 1, padding: '2rem', marginLeft: '250px' }}>
        <Outlet />
      </main>
    </div>
  );
}
