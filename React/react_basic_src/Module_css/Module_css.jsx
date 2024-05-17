/*
CSS Modules
Another way of adding styles to your application is to use CSS Modules.
CSS Modules are convenient for components that are placed in separate files.

Create the CSS module with the .module.css extension, example: my-style.module.css.


mport the stylesheet in your component:

import styles from './my-style.module.css'; 
import styles1 from './my-style1.module.css'; 

*/


import React from 'react'

//import './style.css'; //simple css import

import A from './style1.module.css';
import B from './style2.module.css';

function Module_css() {
  return (
    <div>
        <h1>Module_css</h1>
        <h1 className={A.bigblue}>Hi i am module css from style1</h1>
        <h1 className={B.bigblue}>Hi i am module css from style2</h1>
    </div>
  )
}

export default Module_css