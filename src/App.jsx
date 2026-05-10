import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';
import Login from './pages/Login';
import Home from './pages/Home';
import CreateTrip from './pages/CreateTrip';
import MyTrips from './pages/MyTrips';
import ItineraryBuilder from './pages/ItineraryBuilder';
import ItineraryView from './pages/ItineraryView';
import CitySearch from './pages/CitySearch';
import ActivitySearch from './pages/ActivitySearch';
import Budget from './pages/Budget';
import Checklist from './pages/Checklist';
import PublicItinerary from './pages/PublicItinerary';
import Profile from './pages/Profile';
import Notes from './pages/Notes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Login />} />
          <Route path="home" element={<Home />} />
          <Route path="create-trip" element={<CreateTrip />} />
          <Route path="my-trips" element={<MyTrips />} />
          <Route path="itinerary-builder" element={<ItineraryBuilder />} />
          <Route path="itinerary-view" element={<ItineraryView />} />
          <Route path="city-search" element={<CitySearch />} />
          <Route path="activity-search" element={<ActivitySearch />} />
          <Route path="budget" element={<Budget />} />
          <Route path="checklist" element={<Checklist />} />
          <Route path="public-itinerary" element={<PublicItinerary />} />
          <Route path="profile" element={<Profile />} />
          <Route path="notes" element={<Notes />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
