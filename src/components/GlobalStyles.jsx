// GlobalStyles.jsx
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    --text-primary-light: #000;
    --text-primary-dark: rgb(243, 239, 239);
    --bg-primary-dark: #000;
    --bg-primary-light: linear-gradient(     
132deg, 
rgba(37,85,83,1) 4%,
rgba(234,99,78,1) 12%, 
rgba(64,166,157,1) 20%, 
rgba(240,249,249,1) 40%, 
rgba(240,249,249,1) 76%, 
rgba(64,166,157,1) 85%, 
rgba(234,99,78,1) 90%, 
rgba(37,85,83,1) 99%);
--button-green: rgba(64, 166, 157, 1);
--button-orange: rgba(234, 99, 78, 1); 
    
  }

  .light-theme {
    --text-primary: var(--text-primary-light);
    --bg-primary: var(--bg-primary-light);
    
  }
  
  .dark-theme {
    --text-primary: var(--text-primary-dark);
    --bg-primary: var(--bg-primary-dark);
    
  }
  .App {
    margin: 0;
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    background: var(--bg-primary);
    color: var(--text-primary);
  }
  html {
        box-sizing: border-box;
        width: 100%;
       
      }
    
      *,
      *:before,
      *:after {
        box-sizing: inherit;
      }
    
      body {
        margin: 0;
        width: 100%;
        min-height: 100%;
        overflow-x: hidden;
        font-family: 'Nunito', sans-serif;
        
      }
      
      .dark-theme .navbar-nav .nav-link {
        color: white;
      }    

      .dark-theme .navbar-nav .nav-link.active,
      .dark-theme .navbar-nav .nav-link.show {
        border-bottom: 2px solid #fff; 
        
        
      }
      .light-theme .hr-wrapper {
        color:  #000; 
      }
    
      .dark-theme .hr-wrapper {
        color:  #fff; 
      }
      
`;

export default GlobalStyles;
