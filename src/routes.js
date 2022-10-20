import Public from "./layout/Public";
import Dashboard from "./pages/dashboard";
import Tours from "./pages/tours";
import Comments from "./pages/comments";
import Cruds from "./pages/cruds";
import Chats from "./pages/chats";
import Todo from "./pages/todo";

const routes = [
  {
    path: "/",
    element: <Public />,
    children: [
      {
        path: "/tours",
        element: <Tours />,
      },
      {
        path: "/chats",
        element: <Chats />,
      },
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/cruds", element: <Cruds /> },
      { path: "/comments", element: <Comments /> },
      { path: "/todo", element: <Todo /> },
    ],
  },
  // {
  //   path:"*",
  //   element:<Public/>,
  //   children:
  // }
];
export default routes;
