import { createRoot } from 'react-dom/client';
import { App } from './components/App';
import React from 'react';

const root = document.getElementById('root');

if (!root) {
    throw Error('No root element in DOM');
}

createRoot(root).render(<App />);
