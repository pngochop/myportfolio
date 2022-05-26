import React, {Component} from 'react';

export default class DataControl extends React.PureComponent {
    constructor(props){
        super(props);
        this.state = {
            member: null
        }       
    }

    componentDidMount() {
        // POST request using fetch with set headers
        const requestOptions = {
            // mode: 'no-cors',
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ memberid: 72 })
        };//https://safe-forest-70294.herokuapp.com/https://hopp-lab4-backend.herokuapp.com/contacts?memberid=72
        fetch('https://safe-forest-70294.herokuapp.com/https://hopp-lab4-backend.herokuapp.com/contacts?memberid=72', requestOptions)
            .then(response => response.json())
            .then(dataRP => {
                this.setState({ member: dataRP.data })
                console.log(dataRP.data[0].memberid)
            });
    }

    render(){
        return (<div>
            {this.state.member === null ? 
                <div>Loading ???</div>
            :
                <div><ul>{this.state.member.map((d => <li key={d.memberid}>{d.memberid} - {d.firstname}</li>))}</ul></div>
            }
        </div>);
    }
}

  class FishInSea extends Component{
       constructor(props){
            super(props);
            this.state = {
                 fishInSea: 100
            }
       }
       componentDidMount(){
             this.setState({fishInSea: 100});
       }
       render(){
           const { fishInSea } = this.state;
                return(
                   <div>Fish in the sea: 
                         <FishInOcean fishInSea={fishInSea} />
                   </div>
            );
        }
   }



    class FishInOcean extends Component{
         constructor(props){
             super(props);
             this.state = {fishInOcean: 1000}
         }
         componentDidMount(){
             this.setState({fishInOcean: 1000});
          }
        render(){
           const { fishInOcean} = this.state;
           const { fishInSea } = this.props;
           return(
               <div>Fish in the ocean: {fishInOcean}
                    {fishInSea}
               </div>
           );
       }
   }

