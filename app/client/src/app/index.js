import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Layout } from "antd";
import NavBar from './containers/NavBar';
import business from "./routes/business";

const { Content } = Layout;

export default function App(){
    return (
        <Router>
            <NavBar><Route path="business" component={business}/>
            </NavBar>
        </Router>
    )
}