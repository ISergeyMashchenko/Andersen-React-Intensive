import React, { Component } from "react";
import Form from "./components/Form/Form";
import ShowProfile from "./components/ShowProfile/ShowProfile";

class App extends Component {
  state = {
    formReady: false,
    formData: [],
  };

  checkReadiness = (data) => {
    this.setState({
      formReady: true,
      formData: data,
    });
  };

  render() {
    const { formReady } = this.state;

    return (
      <>
        {formReady ? (
          <ShowProfile data={this.state.formData} />
        ) : (
          <Form onSubmit={this.checkReadiness} />
        )}
      </>
    );
  }
}

export default App;
