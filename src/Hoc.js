import React, { Component } from 'react';

const Hoc = (WrappedComponent, entity) => {
  return class extends Component {
    state = {
      data: [],
      query: ""
    }

    componentDidMount() {
      const fetchData = async () => {
        try {
          const response = await fetch(`https://jsonplaceholder.typicode.com/${entity}`);
          const json = await response.json();
          this.setState({ data: json });
        } catch (error) {
          console.log(error);
        }
      }
      fetchData();
    }

    render() {
      let { data, query } = this.state;
      const filteredData = data.filter(el => {
        if (entity === "users") {
          return el.name.toLowerCase().indexOf(query.toLowerCase()) >= 0;
        }
        if (entity === "todos") {
          return el.title.toLowerCase().indexOf(query.toLowerCase()) >= 0;
        }
        return false;
      });

      return (
        <div>
          <input 
            type="text" 
            value={query} 
            onChange={(e) => this.setState({ query: e.target.value })} 
          />
          <WrappedComponent data={filteredData} />
        </div>
      );
    }
  }
}

export default Hoc;