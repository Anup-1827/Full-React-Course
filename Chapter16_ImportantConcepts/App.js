import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { HOCRoute, LazyLoadRoute, UseCallbackRoute, UseMemoRoute, UseReducerRoute } from "./route";

function App() {
  const { pathname } = useLocation()

  return (
    <div>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {[
          { path: "/", name: "Home" },
          { path: HOCRoute, name: "Higher Order Comp" },
          { path: UseMemoRoute, name: "Use Memo" },
          { path: UseCallbackRoute, name: "Use Callback" },
          { path: LazyLoadRoute, name: "Lazy Load" },
          { path: UseReducerRoute, name: "Use Reducer" },
        ].map((route, _idx) => {
          return <Link key={_idx} to={route.path}>{route.name}</Link>;
        })}
      </div>

      {
        pathname === "/"?
        <div>Home</div>
        :
        <Outlet/>
      }
    </div>
  );
}

export default App;
