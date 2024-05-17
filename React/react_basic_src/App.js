/*
What is JSX?
JSX stands for JavaScript XML.

JSX allows us to write HTML in React.

JSX makes it easier to write and add HTML in React.

*/


import Boostrap_basic from "./Boostrap/Boostrap_basic";
import Boostrap_comp from "./Boostrap/Boostrap_comp";
import Class_compo from "./Component/Class_compo";
import Func_compo from "./Component/Func_compo";
import Css_comp from "./Css/Css_comp";
import Jsx_comp from "./JSX/Jsx_comp";
import About from "./Layout/Pages/About";
import Blog from "./Layout/Pages/Blog";
import Contact from "./Layout/Pages/Contact";
import Index from "./Layout/Pages/Index";
import Life_class from "./LifeCycle/Class/Life_class";
import Func_life from "./LifeCycle/Function/Func_life";
import Mui_component from "./MUI/Mui_component";
import Module_css from "./Module_css/Module_css";
import Main_Props from "./Props/Main_Props";
import App_Routing from "./Src_Routing/App_Routing";
import Sass_css from "./Sass_css/Sass_css";
import Styled_component from "./Styled_component/Styled_component";
import State_class from "./state/Class/State_class";
import State_func from "./state/Function/State_func";
import Main_lazy from "./Lazy_suspense/Main_lazy";
import Props_drilling from "./Props_drilling/Props_drilling";
import UseContext from "./useContext/UseContext";
import UseReducer from "./useReducer/UseReducer";

function App() {
  return (
    <div className="container mt-5">
      {

        // component

        //<Func_compo/>
        //<Class_compo/>

        // jsx
        //<Jsx_comp/>


        //layout

        //<Index/>
        //<About/>
        //<Contact/>
        //<Blog/>


        // Normal css / Module css concept  / sass css
        //<Css_comp/>
        //<Module_css/>
        //<Sass_css/>


        // Bootstrap 

        //<Boostrap_basic/>
        //<Boostrap_comp/>
        
        // Props
        //<Main_Props/>

        //MUI
        //<Mui_component/>

        //Styled Component
        <Styled_component/>
      
        
        //lifecycle
        //<Life_class/>  
        //<Func_life/>  
      
        //state

        //<State_func/>
        //<State_class/>

        //Rounting
        //<App_Routing/>

        //Lazy Loading
        //<Main_lazy/>
        
        // Props Drilling && useContext

        //<Props_drilling/>
        //<UseContext/>

        // useReducer
        //<UseReducer/>

     }

      
    </div>
  );
}

export default App;
