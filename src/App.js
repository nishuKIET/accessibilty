import React from 'react';
import logo from './assets/tricon-logo.png';
import btm from './assets/bottom_first_img.PNG';

import './App.css';
import About from './About/about';
import HomeImages from './Home/home_images';

class App extends React.Component {
  render() {
    return (
      <div className="row Main-container">
        <div className="col-md-3 logo-space">
          <img src={logo} className="Tricon-logo" alt="logo" />
        </div>
        <div className = "col-md-1"></div>
        <div className="col-md-8 App">

          <ul className="NavigationList">

            <li>About</li>
            <li>Services</li>
            <li>Products</li>
            <li>Blog</li>
            <li>Contact us</li>
          </ul>
          {/* {this.props.children} */}
        </div>
        <div className="Carousel-images"><HomeImages/></div>

  

        <img src={btm} className="btm-img" alt="logo" />
        <div className = "second_page"><About /></div>
      </div>


    )

  }
}


// function App() {
//   return (
//     <div>
//     <ul>

//     <li>About</li>
//     <li>Services</li>
//     <li>Products</li>
//     <li>Blog</li>
//     <li>Contact us</li>
//     </ul>
//     {this.props.children}
//  </div>
//   );
// }


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
