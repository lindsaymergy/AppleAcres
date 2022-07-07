import './App.scss';
import React from 'react';
import ProductList from './components/Product/List';
import strings from './strings';

function App() {
  const phone = `tel:${strings.brandPhoneNumber}`;

  return (
    <div>
      <header className="header">
        <h1>&#127822;{strings.brandTitle}</h1>
        <h2>{strings.brandSubTitle} <a href={phone}></a>{strings.brandPhoneNumber}</h2>
      </header>
      <div className="flex">
        <ProductList />
      </div>
      <footer>
        <h2>{strings.brandFooterText}</h2>
      </footer>
    </div>
  );
}

export default App;