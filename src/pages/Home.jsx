import React, { useState } from 'react';
import SneakersGrid from './SneakersGrid';

function Home() {

  
  const [customer] = useState(1);


  return (
    <div>

<SneakersGrid customer={customer}/>
    </div>
  );
}

export default Home