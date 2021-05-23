import React from "react";

import { Route, Switch } from "react-router-dom";
import Search from './Search';
import SelectedImage from './SelectedImage';

const RouteConfig = () => {
  return (
    <Switch>
      <Route path="/" exact component={Search} />
      <Route path='/image/:id' component={SelectedImage}/>
    </Switch>
  );
};

export default RouteConfig;
