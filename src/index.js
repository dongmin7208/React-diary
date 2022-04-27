import './index.css';
import App from './App';
import React from "react";
import ReactDOM from "react-dom/client";
// const container = document.getElementById('app');
// const root = createRoot(container);
// root.render(<App />)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
