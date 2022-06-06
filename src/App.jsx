import React from "react";

import { appRoutes } from "lib/routes";
import { RouterComponent } from "components/router";

export const App = () => {
  return <RouterComponent routes={appRoutes} />;
};
