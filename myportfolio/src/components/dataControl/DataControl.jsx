import React                from 'react';

export default class DataControl extends React.PureComponent {
    constructor(props){
        super(props);
        this.state = {
            data: null
        }       
    }

    componentDidMount() {
        // POST request using fetch with set headers
        const requestOptions = {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IndpbmRvZmNoYXJpdGFibGVAZ21haWwuY29tIiwiaWF0IjoxNTcyMjAyODUyLCJleHAiOjE1NzIyODkyNTJ9.OIWsMnAcIotvJ3XJ3eFoFCet4Yu-JA5OwYBx2wMblvs'
                
            },
            body: JSON.stringify({ memberid: 72 })
        };
        fetch('https://hopp-lab4-backend.herokuapp.com/contacts', requestOptions)
            .then(response => response.json())
            .then(data => this.setState({ postId: data }));
    }

    render(){
        return (<div>
            {this.state.data === null ? 
                <div>Loading</div>
            :
                <div>{this.state.data}</div>
            }
        </div>);
    }
}