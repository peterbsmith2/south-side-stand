import React from "react";
import { Link } from "gatsby";
import '../styles/global.css';
import Layout from '../components/layout';
import Navigation from '../components/Navigation';
import Header from '../components/Header';
import Footer from '../components/Footer';

class Index extends React.Component{
  render() { 
    return (

// export default () => (
  <div style={{ color: `purple` }}>
    <li><Link to="/index/">Home</Link></li>
    <li><Link to="/aboutstaff/">About Staff</Link></li>
    <li><Link to="/ad/">Ad</Link></li>
    <li><Link to="/article/">Article</Link></li>
    <li><Link to="/calendar/">Calendar</Link></li>
    <li><Link to="/contact/">Contact Us</Link></li>
    <li><Link to="/donation/">Donation</Link></li>
    <li><Link to="/getinvoloved/">Get Involved</Link></li>
    <li><Link to="/opportunities/">Opportunties</Link></li>
    <li><Link to="/printlocations/">Print Locations</Link></li>
    <li><Link to="/vertical/">Vertical</Link></li>
    <li><Link to="/aboutstaff/">About Staff</Link></li>
    <Header headerText="Hello Gatsby!" />
    <p>What a world.</p>
    <img src="https://source.unsplash.com/random/400x200" alt="" />
  </div>
   )
  }
}

export default Index;