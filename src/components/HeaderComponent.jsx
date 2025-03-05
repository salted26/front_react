import React from 'react';

const HeaderComponent = () => {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="/">Board App</a>
        <div>
          <a className="navbar-menu" href="/login">로그인 | </a>
        </div>
      </nav>
    </div>
  );
};

export default HeaderComponent;