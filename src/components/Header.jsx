
import React from 'react';
import {siteTitle, menuItems} from '../config';
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <nav className="navbar navbar-expand-md bg-dark">
      <h1>{siteTitle}</h1>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul className="navbar-nav mr-auto">
          
          {menuItems.map((item, i) => {
            return (
              <li className="nav-item active" key={i}>
                <Link className="nav-link" to={item.url}>
                  {item.name} 
                </Link>
              </li>
            )
          })}
          

        </ul>
        
      </div>
    </nav>
  );
};

export default Header;
