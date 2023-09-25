import React from "react";
import Sidebar from "./SIdebar";
const MainLayout = (props) => {
  const { children } = props;

  return (
    <>
      <main className="myreal-container">
        <aside className="sidebar d-none d-md-none d-lg-flex p-3">
          <Sidebar />
        </aside>

        <section className="main-content">
          <section>{children}</section>
        </section>
      </main>
    </>
  );
};

export default MainLayout;
