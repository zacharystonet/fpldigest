import React, { Component, useEffect, useState } from "react";
import { PlusIcon } from '@heroicons/react/solid'
import getManagerInfo from "../../utils/data/getManagerInfo";
import Cookies from 'universal-cookie';

class TeamForm extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        alert('Team ID: ' + this.state.value);
        event.preventDefault();
      }

      //remove team here?

      async getTeamName() {
          try {
            const [data] = await Promise.all([
                getManagerInfo(this.state.value, 29)
            ]);
            
              var name = data.name;
              const cookies = new Cookies();
              var date = new Date;
              date.setDate(date.getDate() + 364);
              cookies.set(this.state.value, data.name, {
                path: "/",
                expires: date
                });
          } catch (error) {
                // do something here lol
          }
      }


  render() {
    return (
      <div className="flex items-center py-3">
        <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" 
               type="text" placeholder="Team ID" value={this.state.value} onChange={this.handleChange} />
        <button className="flex items-center space-x-2 hover:text-gray">
            <PlusIcon className="h-5 w-5" onClick={() => this.getTeamName()}/>
        </button>
      </div>

    );
 }
}

export default TeamForm;