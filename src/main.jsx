import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import "./config"; // must come before @carbon/ibm-products... imports
import App from './App'
import './index.css'
import WithSidePanel from './WithSidePanel';
import Navigation from './Navigation';
import { CustomizeColumnsExample } from './CustomizeColumnsExample';
import { ExpandableRowsExample } from './ExpandableRowsExample';
import { InlineEditExample } from './InlineEditExample';

const rootNode = document.getElementById('root');
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route element={<Navigation />}>
        <Route index element={<App />} />
        <Route path="with-side-panel" element={<WithSidePanel />} />
        <Route path="with-side-panel-slide-in" element={<WithSidePanel slideIn />} />
        <Route path="with-customize-columns" element={<CustomizeColumnsExample />} />
        <Route path="with-expandable-rows" element={<ExpandableRowsExample />} />
        <Route path="with-inline-edit" element={<InlineEditExample />} />
      </Route>
    </Routes>
  </BrowserRouter>
  , rootNode);
