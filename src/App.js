import React from 'react';
import logo from './logo.svg';
import './App.css';
import ToastMarker, { toastSuccess, toastWarning, toastInfo, toastError } from './toast';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Click <code>button</code> to test toast.
        </p>
        <button onClick={() => toastSuccess('Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet possimus accusantium illo libero debitis impedit recusandae non modi ipsam deleniti eos alias, nisi necessitatibus aut ex temporibus illum explicabo neque.')}>SUCCESS</button>
        <button onClick={() => toastWarning('Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet possimus accusantium illo libero debitis impedit recusandae non modi ipsam deleniti eos alias, nisi necessitatibus aut ex temporibus illum explicabo neque.')}>WARNING</button>
        <button onClick={() => toastInfo('Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet possimus accusantium illo libero debitis impedit recusandae non modi ipsam deleniti eos alias, nisi necessitatibus aut ex temporibus illum explicabo neque.')}>INFO</button>
        <button onClick={() => toastError('Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet possimus accusantium illo libero debitis impedit recusandae non modi ipsam deleniti eos alias, nisi necessitatibus aut ex temporibus illum explicabo neque.')}>ERROR</button>
        <div style={{ height: 1000 }} />
      </header>
      <span className="l" />
      <span className="r" />
      <ToastMarker />
    </div>
  );
}

export default App;
