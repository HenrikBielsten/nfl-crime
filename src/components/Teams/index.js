import React, {Component} from 'react';

class Team extends Component {
 state = {
   on: true,
 };

 click = () => {
   this.clicked();
 }

 clicked = () => {

   this.setState({
     on: !this.state.on,
   })
 }


 render() {
   return (
     <div>

       <div
        className={this.state.on ? 'on' : 'off'}
         onClick={this.click}
          >
         <span>{this.props.name}</span>
       </div>

       <div
        className="info"
        style={{backgroundColor: this.props.color}}>
        <span>Total arrests: {this.props.arrest}</span>
       </div>

     </div>
   );
 }
}

export default Team;
