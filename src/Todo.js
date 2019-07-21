import React from "react";
class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: "" };
  }

  handleChange = event => {
    this.setState({
      input: event.target.value,
      element : event.target
    });
    //console.log(event.target.value);
  };

  render() {
    return (
      <div className="row ">
        <div className="col-lg-12">
          <div className="row">
            <div className="col-lg-8">
              <input
                type="text"
                className="form-control"
                onChange={this.handleChange}
              />
            </div>
            <div className="col-lg-4">
              <button className="btn btn-primary" onClick={this.props.addTodo.bind(this,this.state.input,this.state.element)}>Add Todo</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
/*const Todo = () => {
    return (
        <form>
            <div className="row">
                <div className="col-lg-8"><input type="text" className="form-control"></input></div>
                <div className="col-lg-4"><button className="btn btn-primary">Add Todo</button></div>
            </div>
        </form>
    )
}*/

export default Todo;
