import React from "react";

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log("props : ", this.props.id);
    return (
      <div className="alert alert-secondary alert-dismissible fade show">
        <button
          type="button"
          className="close"
          onClick={() => this.props.click(this.props.id)}
          data-dismiss="alert"
        >
          &times;
        </button>
        {this.props.value}
      </div>
    );
  }
}

export default TodoItem;
