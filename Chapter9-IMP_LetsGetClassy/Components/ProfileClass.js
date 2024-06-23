import React from "react";

class ProfileClassComp extends React.Component {
//   constructor(props) {
//     super(props);
//   }
    constructor(props){
        super(props)
        console.log(props.name + " Constructor");
    }
    
    componentDidMount(){
        console.log(this.props.name + " ComponentDidMount");
    }
    
    render() {
      console.log(this.props.name + " Render");
    return <div>Hello this is profile class component {this.props.name} </div>;
  }
}

export default ProfileClassComp;
