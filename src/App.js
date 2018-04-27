import React from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ShareButton from './ShareButton';


const App = () => (
    <MuiThemeProvider>
    <ShareButton/>
    </MuiThemeProvider>
)


export default App;
