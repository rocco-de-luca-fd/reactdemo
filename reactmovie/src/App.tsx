import React, { useState } from 'react';

import { TVMazeResults } from './components/TVMazeResults';
import { TVMazeSearch } from './components/TVMazeSearch';
import { TVMazeShowDetails } from './components/TVMazeShowDetails';
import { UseTVMaze } from './hooks/useTVMaze';


export const App = () => {
  const { series, details, search, itemClick, closeDetails } = UseTVMaze();
  return (
    <div>
      <TVMazeSearch
        search={search}
      />
      <TVMazeResults
        
        result={series}
        itemClick={itemClick}
      />
      <TVMazeShowDetails show={details} onClose={closeDetails} />
    </div>
  );
}
export default App;

