import Header from '../Header/Header';
import Data from '../../data/API';
import { Component } from 'react';

type MyProps = {
  search: string;
};

type MyState = {
  search: string;
};

class Home extends Component<MyState> {
  constructor(props: MyProps) {
    super(props);
    this.state = {
      search: localStorage.getItem('search') || '',
    };
    this.handleChangeSearch = this.handleChangeSearch.bind(this);
  }

  handleChangeSearch(search: string) {
    this.setState({ search: search });
  }

  render(): JSX.Element {
    return (
      <div>
        <Header
          search={this.state.search}
          onChangeSearch={this.handleChangeSearch}
        ></Header>
        <Data search={this.state.search}></Data>
      </div>
    );
  }
}

export default Home;
