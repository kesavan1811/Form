import React,{Component} from 'react';
import { Card,Button} from 'react-bootstrap';
import { FaBeer } from 'react-icons/fa';
import { TiDelete } from "react-icons/ti";
import './App.css';
class App extends Component{

  constructor(props){
    super(props);
    this.state={
      act:0,
      index:'',
      datas:[]
    }
  }

  // componentDidMount(){
  //   // this.refs.name.focus();
  //   this.refs.email.focus();
  // }
fsubmit=(e)=>{
  e.preventDefault();
  let datas=this.state.datas;
  let email=this.refs.email.value;
  let name =this.refs.name.value;

  if(name!="" && email!=""){
    let data={
      name,
      email,
      }
      datas.push(data);
      console.log(data);
  
    this.setState({
      datas:datas,
    });
    this.refs.myform.reset();
    this.refs.name.focus();
  }else{
    alert("Plaase insert valid data")
  }


}

fRemove=(i)=>{
  let datas = this.state.datas
  datas.splice(i,1);
  this.setState({
    datas:datas
  });
  this.refs.myform.reset();
  this.refs.name.focus();
}

sDetails=(i)=>{
  let data = this.state.datas[i];
  this.refs.name.value=data.name;
  this.refs.email.value=data.email;
  this.refs.name.focus();

}

  render(){
    let datas=this.state.datas;
    return(
      <div className="App">
        <div className="dataField">
        <h2>User Details</h2>
        <form ref="myform" className="myform">
          <label style={{fontWeight:"bold",fontSize:"20px"}}>Name</label>
          <input type="text" ref="name" placeholder="name" className="formField"></input>
          <label style={{fontWeight:"bold",fontSize:"20px"}}>Email</label>
          <input type="text" ref="email" placeholder="email" className="formField"></input>
          <button onClick={this.fsubmit} className="myButton">Submit</button>
        </form>
        </div>
        <div style={{marginLeft:"20px",marginTop:"43px"}}>
        <pre>
          {datas.map((data,i)=>
              <Card className="card-data" key={i}> 
              <Card.Body  className="cardbdy" >
                <div style={{display:"flex",justifyContent:"space-between",marginTop:"0px"}}>
                <Card.Title style={{fontWeight:"bold",alignSelf:"center"}}>Detail </Card.Title>
                <TiDelete onClick={(e)=>this.fRemove(i)} color="red" size="50px" />
                </div>
                <Card.Text onClick={(e)=>this.sDetails(i)} style={{color:"black",fontSize:"16px"}}>
                 <p>Name: {data.name}</p>
                  <p>Email: {data.email}</p>
                </Card.Text>
              </Card.Body>  
              </Card> 
          )}
        </pre>
        </div>
      </div>
    )
  }
}

export default App;