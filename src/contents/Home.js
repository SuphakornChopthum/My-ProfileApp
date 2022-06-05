import React, { Component } from "react";
import Social from "../components/Social";
// import profilepic from '../img/profile.jpg'
import ReactTypingeEffict from "react-typing-effect";

class Home extends Component {
  render() {
    return (
      <div className="condiv home">
        <img
          src="https://scontent.fbkk22-3.fna.fbcdn.net/v/t1.6435-9/124426755_3465363840215689_2883057850406533006_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeERil435uh4DGYQUQXCf-1wZO6F7u0D16Vk7oXu7QPXpcvhHHB3nHrgPfBi8dwKAufkVBgF35CMdZLecyGUvHjE&_nc_ohc=aGt8iQsSj4sAX__5BTD&tn=fkCeaGPxoqI-_4Hy&_nc_ht=scontent.fbkk22-3.fna&oh=00_AT-_EJkSM67EXI6WIsG-xMOpqWjfacsoLwBz5o7vMOWE0Q&oe=62C0B9F9"
          alt="profile"
          className="profilepic"
        />
        <ReactTypingeEffict
          text={["I am Suphakorn", "I am  a Wab Developer"]}
          speed={80}
          eraseDelay={200}
          className="typingeffect"
        ></ReactTypingeEffict>
        <Social />
      </div>
    );
  }
}

export default Home;
