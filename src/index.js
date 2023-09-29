import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { FreelanceProvider} from './context/job.context'
import { EmploymentProvider } from './context/job.context';
import { BrowserRouter } from 'react-router-dom'


ReactDOM.render(
    <BrowserRouter>
      <FreelanceProvider>
        <EmploymentProvider>
        <App />
        </EmploymentProvider>
        </FreelanceProvider>
        </BrowserRouter>,
  document.getElementById('root')
);

