import React from 'react';
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";

import NavBar from 'containers/NavBar';

import Homepage from "./routes/Homepage";
import Business from "./routes/Business";
import Settings from "./routes/Settings";
import Login from "./routes/Login";

import { Store } from "store";
import { Container, Content, Header, Panel } from 'rsuite';

const App = ({match}) =>{
    return (
        <Provider store={Store}>
            <Router>
                <Container className="frame">
                    <NavBar />
                    <Container>
                        <Content>
                            <Panel>
                            <Header>
                                <h2>Page Title</h2>
                            </Header>
                                <Switch>
                                    <Route exact path={`${match.url}`} component={Homepage}/>
                                    <Route exact path={`${match.url}business`} component={Business}/>
                                    <Route exact path={`${match.url}settings`} component={Settings}/>
                                    <Route exact path={`${match.url}login`} component={Login}/>
                                </Switch>
                            </Panel>
                        </Content>
                    </Container>
                </Container>
            </Router>
        </Provider>
    )
}

export default App;