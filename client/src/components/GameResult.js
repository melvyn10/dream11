import React, { Component } from "react";
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
//import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import "./GameResult.css";
import API from "../utils/API";

class EmployeeContainer extends Component {
  state = {
    searchName: "",
    employee: [],
    filteredEmployee: [],
    columns: [ 
      {
        dataField: 'id',
        text: 'Id',
        style: {'white-space' : 'wrap'},
        sort: true
      },
      {
        dataField: 'first_name',
        text: 'First Name',
        style: {'white-space' : 'wrap'},
        sort: true
      },
      {
        dataField: 'last_name',
        text: 'Last Name',
        style: {'white-space' : 'wrap'},
        sort: true
      },
      {
        dataField: 'user_name',
        text: 'User Name',
        style: {'white-space' : 'wrap'},
        sort: false
      },
      {
        dataField: 'city',
        text: 'City',
        style: {'white-space' : 'wrap'},
        sort: true
      },
      {
        dataField: 'country',
        text: 'Country',
        style: {'white-space' : 'wrap'},
        sort: true
      },
      {
        dataField: 'title',
        text: 'Title',
        style: {'white-space' : 'wrap'},
        sort: true
      },
      {
        dataField: 'gender',
        text: 'Gender',
        style: {'white-space' : 'wrap' },
        sort: true
      }
    ]
  
  };

  async componentDidMount() {
    await API.getData()
    .then(res => {
        this.setState({employee: JSON.parse(JSON.stringify(res.data))});
        this.setState({filteredEmployee: JSON.parse(JSON.stringify(res.data))});
        console.log ("got employee",this.state.employee);
      })
    .catch(err => console.log(err));
  }

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
    this.searchEmployee(this.state.searchName);
  };

  // When the form is submitted, search the employee table
  handleFormSubmit = event => {
      event.preventDefault();
      this.searchEmployee(this.state.searchName);
  };

  searchEmployee = query => {
    const filteredList = this.state.employee.filter((item) => {
      let temp = item.first_name.toLowerCase() + item.last_name.toLowerCase()+item.user_name.toLowerCase();
      return temp.indexOf(query.toLowerCase()) !== -1;
    })
    console.log ("filteredList ", filteredList );
    this.setState({
      filteredEmployee: filteredList
    });

  };

  render() {
    return (
      <div className="container">
      <div class="row" className="hdr">
      <form class="form">
          <input
            value={this.state.searchName}
            name="searchName"
            type="text"
            placeholder="First Name, Last Name, or User Name"
            onChange={event => this.handleInputChange (event)}
          />
        <button class="searchButton" onClick={this.handleFormSubmit}>Search</button>
      </form>
      </div>
      
      <div class="row" className="body">
      <div class = "EmployeeTable">  
      <BootstrapTable 
      bootstrap4  
      striped  
      hover  
      keyField='id'
      data = { this.state.filteredEmployee }
      columns={ this.state.columns } 
      />  
      </div>
      </div>
      </div>
    );
  }
}

export default EmployeeContainer;
