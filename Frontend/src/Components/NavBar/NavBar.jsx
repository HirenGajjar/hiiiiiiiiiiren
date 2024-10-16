import React from "react";
import FlipLink from "../../AnimationComponents/FlipLink/FlipLink";

const DURATION = 0.25;
const STAGGER = 0.025;

function NavBar({ color }) {
  return (
    <nav className="fixed bottom-[7%] right-[5%] z-[999]">
      <ul>
        {["About", "Work", "Contact"].map((item, index) => (
          <li key={`link-${index}`}>
            <div className="text-right">
              <FlipLink href={`#${item}`} key={index}>
                {item}
              </FlipLink>
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
