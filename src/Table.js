import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
class Table extends React.Component {
  
  constructor(props) {
    super(props);
    
  }

  strikeTasks = e => {
      e.target.style.textDecoration = "line-through";   
  }
  render() {
    return (
      <div className="row">
        <table className="table coloring">
          <thead className="text-center">
            <tr>
              <th>Sl.No</th>
              <th>Incomplete Tasks</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
          {this.props.tasks.map(task => {
            return (
              <tr>
                <td className="text-center">{task.id}</td>
                <td onClick={this.strikeTasks}>{task.title}</td>
                <td className="text-center">
                  <button
                    className="btn btn-danger"
                    id={task.id}
                    onClick={this.props.deleteTasks.bind(this, task.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
