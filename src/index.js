import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "App";
import reportWebVitals from "./reportWebVitals";

// Global style
import "styles/app.scss";

// React-query
import { QueryClient, QueryClientProvider } from "react-query";

const reactQueryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <QueryClientProvider client={reactQueryClient}>
    <App />
  </QueryClientProvider>
);

reportWebVitals();
