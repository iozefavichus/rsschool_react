import Header from '../Header/Header';
// import Catalog from '../Catalog';
import Data from '../../data/API';

import { Component } from 'react';

class Home extends Component<Record<string, never>, { search: string }> {
  constructor(props: Record<string, never>) {
    super(props);

    this.state = {
      search: localStorage.getItem('search') || '',
    };
    this.handleChangeSearch = this.handleChangeSearch.bind(this);
  }

  handleChangeSearch(search: string) {
    this.setState({ search: search });
    console.log('hhhh');
  }

  handleChange() {
    this.setState({ search: this.props.search });
    console.log('fff');
  }

  render(): JSX.Element {
    return (
      <div>
        <Header
          search={this.state.search}
          onChangeSearch={this.handleChangeSearch}
        ></Header>
        <Data search={this.state.search} onChange={this.handleChange}></Data>
      </div>
    );
  }
}

export default Home;
