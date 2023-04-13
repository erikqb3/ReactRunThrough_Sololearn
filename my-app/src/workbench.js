import React from 'react';
// import ReactDOM from 'react-dom/client'; //guess I don't need the client part
import ReactDOM from 'react-dom';
import './index.css';
// import { useState } from 'react'; //This is declared somewhere in STUFF11 for explainational purposes, but put here and commented out cuz it should be near the top
// import App from './App'; //comment this out for momentary tinkering around
import reportWebVitals from './reportWebVitals';
import { useState } from 'react';


//STUFF1
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
//   // <h1>Hellow, React!</h1>
// );


//STUFF2-Adding_JavaScript_Expressions
// const name = "Erik";
// const el = <h1 id={name}>Hello, {name}!</h1>

// ReactDOM.render(
//   el,
//   document.getElementById('root')
// );


//STUF3-DOM_Manipulation
// let counter = 0;

// function show() {
//   counter++;
//   const el = <p>{counter}</p>;
//   ReactDOM.render(
//     el, document.getElementById('root')
//   );
// }
// setInterval(show, 1000); 


//STUFF4-Functional_Copmponents
// function Hello() { //Functional Component (starts with Caps, if not caps, isn't seen as a component, but an element)
//   return <h1>Hello world.</h1>;
// }

// const el = <Hello />;  //functional componnent needs to start with Caps
// ReactDOM.render(
//   el, 
//   document.getElementById('root')
// );


// //STUFF5-Class_Components
// class Hello extends React.Component { //you can probably add more onto the class, variable information and stuff
//   render() {
//     return <h1>Hello world.</h1>;
//   }
// } 

// const el = <Hello />; 
// ReactDOM.render(
//   el, 
//   document.getElementById('root')
// );


// //STUFF6-Props-Arguments_for_Functional_Components
// function Hello(props) {
//   return <p>Hello, {props.name}!</p>;
// }

// function Lots_of_Hello() { //Components can use other components to generate an output.
//   return <div>
//     <Hello name="David" />
//     <Hello name="James" />
//     <Hello name="Amy" />
//   </div>;
// }

// const el = <Lots_of_Hello/>; //it's like functional parameters and arguments
// ReactDOM.render(
//   el, 
//   document.getElementById('root')
// );

// //STUFF7-Props_in_Class_Components
// class Hello extends React.Component {
//   render() {
//     return <p>Hello, {this.props.name}!</p>; //functional props might be easier, but let's just wait and see
//   }
// } 

// const el = <Hello name="David" />; //An important thing to consider is that props are read-only, meaning components cannot modify their props.
// ReactDOM.render(
//   el, 
//   document.getElementById('root')
// );


// //STUFF8-Creating_Shopping_List
// function Item(props) {
//   return <div className="item">
//   <b>Name:</b> {props.name} <br />
//   <b>Species:</b> {props.species}
//   </div>;
// }

// function App() {
//   return <div>
//     <Item name="Honest" species="Rotom" />
//     <hr></hr>
//     <Item name="Loyal" species="Greninja" />
//     <hr></hr>
//     <Item name="Charity" species="Flygon" />
//     <hr></hr>
//     <Item name="Bold" species="Scizor" />
//     <hr></hr>
//     <Item name="Gratitude" species="Magcargo" />
//     <hr></hr>
//     <Item name="Kindness" species="Executor (Alolan)" />
//   </div>;
// }

// const el = <App />; 
// ReactDOM.render(
//   el, 
//   document.getElementById('root')
// );

// //STUFF9-States-Better_version_of_Props_but_only_for_Class_Components
// class Hello extends React.Component {
//   state = {
//     name: "James"
//   }
//   render() {
//     return <h1>Hello {this.state.name}.</h1>;    
//   }
// }

// const el = <Hello />; //You Don't have to worry about inputing stuff, cuz it should already be in the states (which can be edited from the DOM)
// ReactDOM.render(
//   el, 
//   document.getElementById('root')
// );


// //STUFF10-States_cont.
// class Counter extends React.Component {
//   state = {
//     counter: 0
//   }
//   increment = () => { //you can give Class Components other functions to use!!!
//     this.setState({  //setState is a built in method, "this" targets the object it's in
//      counter: this.state.counter+1});//setState requires new key-value pair to replace old
//   }
//   render() {
//     return <div>
//     <p>{this.state.counter}</p>
//     <button onClick={this.increment}>Increment</button>
//     </div>;
//   } //the onClick calls the increment function included in the object/this
// }

// const el = <Counter />; 
// ReactDOM.render(
//   el, 
//   document.getElementById('root')
// );

// // As a recap, here is a summary of the main differences between props and state:

// // - We use props to pass data to components.
// // - Components use state to manage their data.
// // - Props are read-only and cannot be modified.
// // - State can be modified by its component using the setState() method.
// // - The setState() method results in re-rendering the component affected.
// // - Components that have state are called stateful, while components that do not use state are called stateless.

// //NOTE: States can have props used in them


// //STUFF11-Hooks
// //Note: Hooks allow functional components to have states
// import { useState } from 'react'; //normally you'd put this at the top, but put this here for explainational purposes
// function Hello() {
//   const [name, setName] = useState("Erik"); //currently, name isn't a state variable and setName is a non-existant object-method (until we hit this line of code)
// //NOTE: setName is the basic equivalence of setState, but the functional component version and you can name it whatever
// //Use state allows the array destructuring to work [name, setName]
//   return <h1>Hello {name}.</h1>;
// }

// const el = <Hello />; 
// ReactDOM.render(
//   el, 
//   document.getElementById('root')
// );

// //STUFF12-Another_counter_functional_component_style
// //Compare with STUFF10
// function Counter() {
//   const [counter, setCounter] = useState(0);

//   function increment() {
//     setCounter(counter+1);
//   }
//   return <div>
//   <p>{counter}</p>
//   <button onClick={increment}>Increment</button>
//   </div>;
// }

// const el = <Counter />; 
// ReactDOM.render(
//   el, 
//   document.getElementById('root')
// );


//STUFF13-Lifecycle_Methods
// React provides special lifecycle methods for class components, which are called when components are mounted, updated or unmounted.

// Mounting is the process when a component is rendered on the page.
// Unmounting is the process when a component is removed from the page.

// The componentDidMount method is called when a component is rendered on the page and is used for populating the state inside of a component when it initially mounts to the DOM.
//Similarly, the componentWillUnmount() lifecycle method is called right before the component is removed from the DOM. It can be used to free up resources taken by the component.


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
