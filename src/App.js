import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import Amplify, { Storage } from 'aws-amplify/core';

function App() {
  useEffect(() => {
      Amplify.configure({
        Auth: {
            identityPoolId: 'us-east-1:6909dba9-ccd7-444c-bbe5-5afc85e29232',
            region: 'us-east-1'
        },
        Storage: {
          AWSS3: {

          }
        }
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1> AWS Storage Demo</h1>
      </header>
    </div>
  );
}

export default App;
