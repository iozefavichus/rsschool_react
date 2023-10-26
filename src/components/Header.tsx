import { ChangeEvent, Component } from 'react';

type MyProps = Record<string, never>;
type MyState = { value: string };

class Header extends Component<MyProps, MyState> {
  constructor(props: MyProps) {
    super(props);
    const LsSearch = localStorage.getItem('search');
    this.state = {
      value: LsSearch ? JSON.parse(LsSearch) : '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault;
    this.setState({
      value: this.state.value,
    });
    localStorage.setItem('search', JSON.stringify(this.state.value));
  };

  handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target) {
      this.setState({
        value: event.target.value,
      });
    }
  };

  render() {
    return (
      <div>
        <input
          className="input-search"
          placeholder="Enter text ..."
          type="text"
          id="search"
          onChange={this.handleChange}
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
