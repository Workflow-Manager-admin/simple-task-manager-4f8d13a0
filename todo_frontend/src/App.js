import React from 'react';
import './App.css';
import TodoPage from './components/TodoPage';

// PUBLIC_INTERFACE
function App() {
  // Optionally, global theme logic can remain, or be removed for this Figma preview.
  return (
    <div className="App">
      <TodoPage />
    </div>
  );
}

export default App;
