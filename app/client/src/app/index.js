import React from 'react';
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import { Layout } from "antd";
import NavBar from './containers/NavBar';
import homepage from "./routes/Homepage";
import business from "./routes/Business";
import settings from "./routes/Settings";
import { Store } from "./store";

const { Content } = Layout;

const App = ({match}) =>{
    return (
        <Router>
            <Layout style={{ minHeight: '100vh' }}>
                <NavBar/>
                <Layout>
                    {/*<Header style={{ background: '#fff', padding: 0 }} />*/}
                    <Content style={{ margin: '24px 16px 0' }}>
                        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                            <Switch>
                                <Route exact path={`${match.url}`} component={homepage}/>
                                <Route exact path={`${match.url}business`} component={business}/>
                                <Route exact path={`${match.url}settings`} component={settings}/>
                            </Switch>
                        </div>
                    </Content>
                </Layout>
            </Layout>
        </Router>
    )
}

export default App;