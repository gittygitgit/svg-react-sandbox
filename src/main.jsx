"use strict"

import ReactDOM from 'react-dom';
import React from 'react';
//import SymbolGridTest from './symbolGridTest/SymbolGridTest';
import ViewportTest from './viewPort/ViewportTest';

console.log("rendering application");
ReactDOM.render(
//  <Chart>Testing</Chart>,
  <ViewportTest/>,
  document.getElementById('app'));

