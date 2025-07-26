import React from 'react';
import UpcomingReservations from './components/UpcomingReservations';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Restaurant Reservations
          </h1>
          <p className="mt-2 text-lg text-gray-600">
            Manage your upcoming dining experiences
          </p>
        </div>
        <UpcomingReservations />
      </div>
    </div>
  );
}

export default App; 