import React, { Component } from 'react';

// This is all about Code Splitting in React.js with Router
const asyncComponent = importComponent => {
  // importComponent is function reference
  return class extends Component {
    state = {
      Component: null,
    };

    componentDidMount() {
      importComponent().then(cmp => {
        // This is because exporting is using export default
        this.setState({ Component: cmp.default });
      });
    }

    render() {
      const { Component } = this.state;
      return Component ? <Component {...this.props} /> : null;
    }
  };
};

export default asyncComponent;
