import React from 'react';
import { Switch, Route } from 'react-router-dom';

export default () => {
    Return (
        <Switch>
            <Route exact path="/">
                Página Inicial
            </Route>
            <Route exact path="/">
                Página configurações
            </Route>
            <Route exact path="/">
                Sobre
            </Route>
        </Switch>
    );
}