
import React from 'react';
import {siteTitle, menuItems} from '../config';
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <nav class="navbar navbar-expand-md bg-dark">
      <h1>{siteTitle}</h1>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul class="navbar-nav mr-auto">
          
          {menuItems.map(item => {
            return (
              <li className="nav-item active">
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
