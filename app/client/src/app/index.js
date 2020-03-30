import React from 'react';
import { Switch, NavLink, BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";

import NavBar from 'containers/NavBar';

import Homepage from "./routes/Homepage";
import BusinessSearch from "./routes/Business/Search";
import BusinessAdd from "./routes/Business/Add";
import Settings from "./routes/Settings";
import Login from "./routes/Login";
import Test from "./routes/Test";

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
                            <Header style={{marginBottom: 30}}>
                                <h2>{'EasyPCTO'}</h2>
                            </Header>
                                {/*<NavLink exact to="/" activeClassName="selected">Mah</NavLink>
                                <NavLink exact to="/business" activeClassName="selected">Ciao come va</NavLink>*/}
                                <Switch>
                                    <Route exact path={`${match.url}`} component={Homepage}/>
                                    <Route exact path={`${match.url}test`} component={Test}/>
                                    <Route exact path={`${match.url}business/search`} component={BusinessSearch}/>
                                    <Route exact path={`${match.url}business/add`} component={BusinessAdd}/>
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