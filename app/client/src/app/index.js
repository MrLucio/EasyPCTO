import React from 'react';
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";

import { Layout } from "antd";
import NavBar from './containers/NavBar';

import Homepage from "./routes/Homepage";
import Business from "./routes/Business";
import Settings from "./routes/Settings";
import Login from "./routes/Login";

import { Store } from "./store";

const { Content } = Layout;

const App = ({match}) =>{
    return (
        <Provider store={Store}>
            <Router>
                <Layout style={{ minHeight: '100vh' }}>
                    <NavBar/>
                    <Layout>
                        {/*<Header style={{ background: '#fff', padding: 0 }} />*/}
                        <Content style={{ margin: '24px 16px 0' }}>
                            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                                <Switch>
                                    <Route exact path={`${match.url}`} component={Homepage}/>
                                    <Route exact path={`${match.url}business`} component={Business}/>
                                    <Route exact path={`${match.url}settings`} component={Settings}/>
                                    <Route exact path={`${match.url}login`} component={Login}/>
                                </Switch>
                            </div>
                        </Content>
                    </Layout>
                </Layout>
            </Router>
        </Provider>
    )
}

export default App;