import React, {Component} from 'react';
import Team from '../Teams';

class Form extends Component {

  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({start_date: event.target.value});
  }

  handleSubmit(event) {
    this.setState({start_date: event.target.value});
    event.preventDefault();
    this.getTeams();
  }

  getTeams(event) {
    fetch(`http://nflarrest.com/api/v1/team?start_date=${this.state.start_date}&end_date=${this.state.end_date}`)
      .then(res => res.json())
      .then((result) => {
        this.setState(state => ({teams: result }))
        }
        )
  }

  state = {
    teams: [],
    start_date: '2014-01-31',
    end_date: '2016-01-31',
  }

  componentDidMount() {
    this.getTeams();
    }

 render() {
   return (
     <div>

     <form onSubmit={this.handleSubmit}>
       <label>
         Select Start Date:
         </label>
         <select value={this.state.start_date} onChange={this.handleChange}>
           <option value="2000-01-31">2000-01-31</option>
           <option value="2001-01-31">2001-01-31</option>
           <option value="2013-01-31">2013-01-31</option>
           <option value="2014-01-31">2014-01-31</option>
         </select>
       <input type="submit" value="Submit" />
     </form>

     <div className="teamsWrapper">
       {this.state.teams.map((team, i) => <Team key={i} color="#30423B" name={team.Team_preffered_name} arrest={team.arrest_count}/>)}
     </div>

     </div>
   );
 }
}

export default Form;
