import React from "react"
import Table from "./Table"
import Todo from "./Todo"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import axios from "axios"
import image from "./img/a.gif"


/*const addTodo = item =>{
    console.log(item);
}*/

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            tasks:[],
            loading: false
        };
    }
    componentDidMount = () =>{
        
        this.setState({
            loading: true
        })
        
        axios
        .get("http://localhost:8080/todo")
        .then(            
            response=>{
                this.setState({
                    tasks: response.data,
                    loading:false
                });
            })
        .catch(error=>{
            console.log("Error",error);
        })
    }
    addTodo = (item,element) =>{
        console.log(item);
        const id= this.state.tasks.length +1;
        const record ={ id:id, title: item};
        axios
        .post("http://localhost:8080/todo",record)
        .then(this.componentDidMount())
        .catch(error=>console.log("Error",error))

        // axios
        // /*this.setState({
        //     tasks : [...this.state.tasks ,record]
        // })*/
        // .get("http://localhost:8080/todo")
        // .then(            
        //     response=>{
        //         this.setState({
        //             tasks: response.data
                    
        //         });
        //     })
        // .catch(error=>{
        //     console.log("Error",error);
        // })
        element.value=""    
    }
    
    delete = buttonId =>{
        if(window.confirm("Confirm to delete!!!")){
            axios
            .delete(`http://localhost:8080/todo/${buttonId}`)
            .then(this.componentDidMount())
            .catch(error=>console.log("Error",error))
            // axios
            // .get("http://localhost:8080/todo")
            // .then(            
            //     response=>{
            //         this.setState({
            //             tasks: response.data
                        
            //         });
            //     })
            // .catch(error=>{
            //     console.log("Error",error);
            // })
            /*this.setState({
                tasks: this.state.tasks.filter(i=>i.id !=buttonId)
            })*/
        }        
    }


    render(){
        if(this.state.loading==true){
            return <div className="text-center"><h1>Loading..... Please Wait...!</h1><img src={image}></img></div>;
        }
        return(
            
            <div className="container">
            <div className="row">
                <div className="col-lg-2"></div>
                <div className="col-lg-8">
                    <h3>Todo Input</h3><br></br>                    
                    <Todo addTodo={this.addTodo} /><br></br>                    
                    <Table tasks={this.state.tasks} deleteTasks={this.delete}/>                    
                </div>
                <div className="col-lg-2"></div>
            </div>
        </div> 
        )
    }
    
}

/*const App = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-4"></div>
                <div className="col-lg-4">
                    <h3>Todo Input</h3><br></br>
                    
                    <Todo addTodo={addTodo} />
                    
                    <Table tasks={tasks}/>
                </div>
                <div className="col-lg-4"></div>
            </div>
        </div>
    )
}*/
export default App;