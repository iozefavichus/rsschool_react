import { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <form>
        <input
          className="input-search"
          placeholder="Enter text ..."
          type="search"
        ></input>
        <button className="button" type="submit">
          Search
        </button>
      </form>
    );
  }
}

export default Header;
