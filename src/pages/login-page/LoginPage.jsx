import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";

import Layout from "../../components/ui/layout/main-page-layout/MainPageLayout";
import Header from "../../components/ui/layout/header/Header";
import LoginForm from "../../components/auth/login-form/LoginForm";
import * as actions from "../../store/modules/auth/actions";

class LoginPage extends React.Component {
  onSubmit = ({ email, password }) => {
    this.props.login(email, password);
  };

  render() {
    if (this.props.authUser) {
      return <Redirect to="/" />;
    }

    return (
      <Layout
        header={<Header />}
        main={<LoginForm onSubmit={this.onSubmit} />}
      />
    );
  }
}

const mapStateToProps = state => ({
  authUser: state.auth.authUser
});

const mapDispatchToProps = dispatch => ({
  login: (email, password) => dispatch(actions.login(email, password))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
