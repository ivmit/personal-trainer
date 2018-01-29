import React from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Home = props => (
  <div>
	<h1>Home</h1>
	<p>Welcome home!</p>
	<button onClick={() => props.changePage()}>Go to About page via Redux</button>
  </div>
);

Home.propTypes = {
  changePage: PropTypes.func
};

const mapDispatchToProps = dispatch => bindActionCreators({
  changePage: () => push('/about-us')
}, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(Home)
