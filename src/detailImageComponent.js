import React, { Component } from "react";
import { Dialog } from "@material-ui/core";
import VisibilityIcon from "@material-ui/icons/Visibility";

export default class Image extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openDialog: false
    };
  }
  handleClickOpen = () => {
    this.setState({
      openDialog: true
    });
  };

  handleClose = () => {
    this.setState({
      openDialog: false
    });
  };
  render() {
    return (
      <div className="image">
        <img src={this.props.thumbnail} width="20%" />
        <div className="overlay" onClick={this.handleClickOpen}>
          <VisibilityIcon className="icon" />
        </div>
        <Dialog
          maxWidth={"lg"}
          open={this.state.openDialog}
          onClose={this.handleClose}
        >
          <img src={this.props.standard} width="300px" />
        </Dialog>
      </div>
    );
  }
}
