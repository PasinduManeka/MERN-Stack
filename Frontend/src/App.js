//import logo from './logo.svg';
import './App.css';
import Header from './Components/header.js';
import AddStudents from './Components/AddStudents';
import {BrowserRouter as Router, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="">
        <Header />
        <Route path="/addStudent" exact component={AddStudents}/>
    </div>
    </Router>
  );
}

export default App;
