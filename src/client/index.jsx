import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Header } from '../share/header';

window.addEventListener('load',()=>{
    ReactDOM.hydrate(<Header/>, document.getElementById('react_root'));
});

