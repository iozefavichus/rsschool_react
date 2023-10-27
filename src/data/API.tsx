import { Component } from 'react';
import { Card } from '../components/Card';

type MyProps = {
  searchValue: string;
};

class Data extends Component {
  constructor(props: MyProps) {
    super(props);
    const search = localStorage.getItem('search')?.slice(1, -1);
    this.state = {
      isLoaded: false,
      apiInfo: [],
      searchValue: search ? search : '',
    };
  }

  componentDidMount() {
    fetch(
      `https://rickandmortyapi.com/api/character/?name=${this.state.searchValue}`
    )
      .then((response) => response.json())
      .then(
        (response) => {
          this.setState({
            apiInfo: response.results,
            isLoaded: true,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    const { apiInfo } = this.state;
    return (
      <div>
        {apiInfo.map((el, index) => (
          <Card key={index} {...el} />
        ))}
      </div>
    );
  }
}

export default Data;
