import React from "react"
import {Link} from "gatsby"
import Header from "../components/header"

export default function Home() {
  const mystring = "Hello Gatsby";
  return (
    <div style={{ color: `purple` }}>
      <Link to="/contact/">Contact</Link>
      <Header headerText={mystring}/>
      <h1>Hello Gatsby!</h1>
      <p>What a world.</p>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
    </div>
  );
}
