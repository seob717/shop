import React from "react";
import { Aside } from "../components/index";

const Home = () => {
  return (
    <div style={{ display: "flex" }}>
      <aside>
        <Aside />
      </aside>
      <section>home</section>
    </div>
  );
};

export default Home;
