import React from "react";

class Navbar extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <ul className="left hide-on-med-and-down">
            <li><a href="sass.html">Sass</a></li>
            <li><a href="badges.html">Components</a></li>
          </ul>
        </div>
      </nav>
    )
  }

}
export default Navbar;
