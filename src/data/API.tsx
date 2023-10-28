import { Component } from 'react';
import { Card } from '../components/Card/Card';

type MyProps = {
  search: string;
};

class Data extends Component {
  constructor(props: MyProps) {
    super(props);
    this.state = {
      isLoaded: false,
      apiInfo: [],
      search: this.props.search,
    };
  }

  componentDidMount() {
    console.log('API loaded...');
    this.setState({ search: this.props.search });
    fetch(
      `https://rickandmortyapi.com/api/character/?name=${this.props.search}`
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
    const { error, isLoaded, apiInfo } = this.state;
    if (error) {
      return <p>Error {error.message}</p>;
    } else if (!isLoaded) {
      return <p>Loading...</p>;
    }
    return (
      <div>
        {apiInfo.map((el, index: number) => (
          <Card key={index} {...el} />
        ))}
      </div>
    );
  }
}

export default Data;
