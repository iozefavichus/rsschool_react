import { Component, ChangeEvent } from 'react';

class Header extends Component<Record<string, never>, { value: string }> {
  constructor(props: Record<string, never>) {
    super(props);

    this.state = {
      value: this.props.search,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillUnmount(): void {
    localStorage.setItem('search', this.state.value);
  }

  handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target) {
      this.setState({
        value: event.target.value,
      });
    }
  };

  handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault;
    this.props.onChangeSearch(this.state.value);
    localStorage.setItem('search', this.state.value);
  };

  render() {
    return (
      <div>
        <input
          onChange={this.handleChange}
          className="input-search"
          placeholder="Enter text ..."
          type="text"
          id="search"
          value={this.state.value}
        ></input>
        <button className="button" onClick={this.handleClick}>
          Search
        </button>
      </div>
    );
  }
}

export default Header;
