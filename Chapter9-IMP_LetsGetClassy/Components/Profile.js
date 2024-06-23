import React from "react";
import ProfileClassComp from "./ProfileClass";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent ComponentDidMount");
  }

  render() {
    console.log("Parent Render");
    return (
      <div>
        <div>Profile Components</div>
        <div>Profile Class Components</div>
        <div>
          <ProfileClassComp name="Chid1" />
          <ProfileClassComp name="Chid2" />
        </div>
      </div>
    );
  }
}

export default Profile;
