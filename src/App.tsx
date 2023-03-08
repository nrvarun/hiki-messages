import "@fontsource/mulish/300.css";
import "@fontsource/mulish/400.css";
import "@fontsource/mulish/500.css";
import "@fontsource/mulish/600.css";
import "@fontsource/mulish/700.css";

import "./index.scss";

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import Dashboard from "Modules/Dashboard";
import AppLayout from "Layout/AppLayout";
import Messages from "Modules/Messages";
import MessageDetails from "Modules/MessageDetails";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<AppLayout fluidHeader firstTimeUser={false} />}
      errorElement={
        <AppLayout fluidHeader firstTimeUser={false}>
          <p>Error Not Found!</p>
        </AppLayout>
      }
    >
      <Route index element={<Dashboard />} />
      <Route path="messages" element={<Messages />}>
        <Route path=":msgId" element={<MessageDetails />} />
      </Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
