
import React from 'react';
import Tile from '../components/Tile';
import Info from '../components/Info';
const Home = () => {
  return (
    <div>
        <Info>Common Actions</Info>
        <div className="row">
        <Tile title="Do Not Hack" link="/labels/dnh">
            <div class="btn btn-primary">Print a DNH label</div>
        </Tile>

        <Tile title="Buy treats!" link="/snackspace">
            <div class="btn btn-primary">Snackspace</div>
        </Tile>

        </div>
    </div>   
  );
};

export default Home;
