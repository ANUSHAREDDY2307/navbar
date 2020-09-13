import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.jpg';
class Community extends Component{
    render(){
        return(
            <div>
                <div class="splitscreen">
                    <img class="image" src={logo} />
                    <div class="text">
                       Tempor enim irure exercitation non magna adipisicing adipisicing aliquip laborum consequat amet Lorem enim veniam. Laborum est nulla ullamco mollit pariatur id. Culpa velit occaecat fugiat cupidatat. Nisi aute fugiat cillum nisi labore aliquip qui eu fugiat ex. Nisi et excepteur incididunt minim cupidatat consequat ea sunt enim reprehenderit excepteur aute duis.
                    </div>
                </div>
                  <button>Click to Join</button>
            </div>


        );
    }
}
export default Community;