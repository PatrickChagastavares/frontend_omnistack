/*necessario fazer a importação do arquivo react-router-dom
para usar navegação em paginas na web, diferente do mobille
*/
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Main from "./pages/main";
import Box from "./pages/Box";

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/boxes/:id" component={Box} />
        </Switch>
    </BrowserRouter>
);

export default Routes;