import React, { Component } from "react";

class ErrorBoundary extends Component {
  state = {
    hasError: false,
    error: "",
    errorInfo: "",
  };

  componentDidCatch(error, errorInfo) {
    this.setState({
      hasError: true,
      error,
      errorInfo,
    });
  }

  render() {
    if (this.state.hasError) {
      return <div>{this.props.renderItem()}</div>;
    }
    return <div>{this.props.children}</div>;
  }
}

export default ErrorBoundary;
