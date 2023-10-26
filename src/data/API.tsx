import { Component } from 'react';
import { Card } from '../components/Card';

type MyProps = {
  name: string;
};

class Data extends Component {
  constructor(props: MyProps) {
    super(props);
    this.state = {
      isLoaded: false,
      apiInfo: [],
    };
  }

  componentDidMount() {
    fetch('https://rickandmortyapi.com/api/character')
      .then((response) => response.json())
      .then((response) =>
        this.setState({
          apiInfo: response.results,
          isLoaded: true,
        })
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
