import React from "react";
import ReactDOM from "react-dom"
import './index.css'

const Person = ({img,name,job,children}) =>{
const url =`https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;
  return (
      <article className={"person"}>
        <img src={url}
        />
        <h4>{name}</h4>
          <h4>{job}</h4>
          {children}
      </article>
  )
};

const PersonList = () =>{
  return (
      <section className={"person-list"}><Person img={"34"} name={"john"} job={"developer"} />
          <Person img={"23"} name={"Mike"} job={"Operations"} />
          <Person img={"44"} name={"Harry"} job={"IT"} />
          <Person img={"21"} name={"Paul"} job={"Legal"}><p>Lorem</p></Person>
      </section>
  )
}


ReactDOM.render(<PersonList/>,document.getElementById("root"));