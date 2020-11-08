import * as React from 'react';
import Login from './Login';
import { Content } from './Content';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


export function Home() {
    
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/" exact component={Login} />
                    <Route path="/content" component={Content} />
                </Switch>
            </div>
        </Router>
    );
}