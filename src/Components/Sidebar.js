import React from "react";
import "../styles.css";
import { SidebarData } from "./SidebarData";

export default function Sidebar() {
  return (
    <section className="Sidebar">
      <ul className="SidebarList">
        {SidebarData.map((value, key) => {
          return (
            <li
              key={key}
              id={window.location.pathname === value.link ? "active" : ""}
              className="row"
              onClick={() => {
                window.location.pathname = value.link;
              }}
            >
              <span id="icon"> {value.icon} </span>
              <span id="title"> {value.title} </span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
