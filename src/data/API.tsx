import { Component } from 'react';

type MyProps = {
  name: string;
};

class Data extends Component {
  constructor(props: MyProps) {
    super(props);
    this.state = {
      isLoaded: false,
      apiInfo: 'default',
    };
  }

  componentDidMount() {
    fetch('https://rickandmortyapi.com/api/character')
      .then(function (response) {
        return response.json();
      })
      .then(function (jsonData) {
        return JSON.stringify(jsonData);
      })
      .then((jsonStr) => {
        this.setState({
          isLoaded: true,
          apiInfo: jsonStr,
        });
        // console.log(jsonStr);
      });
  }

  render() {
    const { apiInfo } = this.state;
    return (
      <tr>
        <td>{apiInfo}</td>
      </tr>
    );
  }
}

export default Data;
