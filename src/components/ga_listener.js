import React from 'react';
import propTypes from 'prop-types';
import ReactGA from 'react-ga';

ReactGA.initialize('UA-34155793-1');

class GAListener extends React.Component {
  static contextTypes = {
    router: propTypes.object
  };

  componentDidMount() {
    this.sendPageView(this.context.router.history.location);
    this.context.router.history.listen(this.sendPageView);
  }

  sendPageView(location) {
    ReactGA.set({ page: location.pathname });
    ReactGA.pageview(location.pathname);
  }

  render() {
    return this.props.children;
  }
}

export default GAListener;
