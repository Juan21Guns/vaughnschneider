import React from 'react';
import { createRoot } from 'react-dom/client';

function App() {
  return (
    <div><p>Vaughn Schneider&apos;s Portfolio</p></div>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);
