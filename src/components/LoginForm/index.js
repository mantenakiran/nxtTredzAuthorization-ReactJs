// Write your JS code here
import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', showErrorMessage: false, errorMsg: ''}

  redirectToHome = () => {
    const {history} = this.props

    history.replace('/')
  }

  onErrorMessage = errorMsg => {
    this.setState({showErrorMessage: true, errorMsg})
  }

  submitDetails = async event => {
    event.preventDefault()

    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok === true) {
      this.redirectToHome()
    } else {
      this.onErrorMessage(data.error_msg)
    }
  }

  userNameValue = event => {
    this.setState({username: event.target.value})
  }

  passwordValue = event => {
    this.setState({password: event.target.value})
  }

  userNameInputEl = () => {
    const {username} = this.state
    return (
      <>
        <label htmlFor="userName" className="username-label">
          USERNAME
        </label>
        <input
          value={username}
          onChange={this.userNameValue}
          placeholder="Username"
          id="userName"
          className="user-input"
          type="text"
        />
      </>
    )
  }

  passwordInputEl = () => {
    const {password} = this.state

    return (
      <>
        <label htmlFor="password" className="username-label">
          PASSWORD
        </label>
        <input
          type="password"
          value={password}
          onChange={this.passwordValue}
          placeholder="Password"
          id="password"
          className="user-input"
        />
      </>
    )
  }

  render() {
    const {showErrorMessage, errorMsg} = this.state

    return (
      <div className="login-form-bg-container">
        <img
          alt="website logo"
          className="website-image"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        />
        <img
          alt="website login"
          className="website-login-image"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
        />

        <form onSubmit={this.submitDetails} className="form-container">
          <img
            className="website-image-desktop"
            alt="website logo"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          />
          <div className="input-bg-container">{this.userNameInputEl()}</div>

          <div className="input-bg-container">{this.passwordInputEl()}</div>
          <button type="submit" className="login-button">
            Login
          </button>
          {showErrorMessage && <p className="error-message">*{errorMsg}</p>}
        </form>
      </div>
    )
  }
}

export default LoginForm
