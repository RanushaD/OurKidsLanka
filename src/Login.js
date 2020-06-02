import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import { Form, Input } from 'antd';


class NormalLoginForm extends React.Component {

  handleSubmit = e => {
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
    e.preventDefault();
  };

  render() {
    let errorMessage = null;
    if(this.props.error){
      errorMessage =(
      <p>{this.props.error.message}</p>
      )
    }
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
          <p>fsdfsdsfdfsdfs</p>
          <p>fsdfsdsfdfsdfs</p>
          <p>fsdfsdsfdfsdfs</p>
          <p>fsdfsdsfdfsdfs</p>
          <p>fsdfsdsfdfsdfs</p>
          <p>fsdfsdsfdfsdfs</p>
          <p>fsdfsdsfdfsdfs</p>
          <p>fsdfsdsfdfsdfs</p>
          <p>fsdfsdsfdfsdfs</p>
          <p>fsdfsdsfdfsdfs</p>
        {errorMessage}
        {
          this.props.loading ?
          <div className="spinner-border text-warning" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        :
        <MDBContainer>
          <MDBRow>
            <MDBCol md="6">
              <form onSubmit={this.handleSubmit} className="login-form">
                <p className="h4 text-center mb-4">Sign in</p>
                <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
                  Your email
                </label>
                {getFieldDecorator('email', {
                  rules: [{required: true, message: "Please input your email"}],
                })(
                  <Input
                  type="email"
                  id="defaultFormLoginEmailEx"
                  className="form-control"
                  />
                )}
                <br />
                <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
                  Your password
                </label>
                {getFieldDecorator('password', {
                  rules: [{required: true, message: "Please input your password"}],
                })(
                <Input
                  type="password"
                  id="defaultFormLoginPasswordEx"
                  className="form-control"
                />
                )}
                <div className="text-center mt-4">
                  <MDBBtn color="indigo" type="submit">Login</MDBBtn>
                  Or 
                  <NavLink style={{marginRight: '10px'}} 
                    to='/signup'> Sign Up
                  </NavLink>
                </div>
              </form>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        }
      </div>

    );
  }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    error: state.error

  }
}


export default connect(mapStateToProps)(WrappedNormalLoginForm)