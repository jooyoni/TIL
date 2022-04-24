import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider,ReactQueryDevTools } from 'react-query';
import { RecoilRoot } from 'recoil';
import App from './App';



const client=new QueryClient();
ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
    <App />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root'));