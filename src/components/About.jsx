import React, { useEffect, useState } from 'react';
import '../assets/styles/about.scss';

const getBios = () => {
  return [
    "Famous developer, a good person with kind heart",
    "A not so good person, but still an amazing director (we cannot say anything bad about this man)",
    "Meezove",
    "This one is a criminal mastermind",
    "Studied at BTU, is an amazing tester",
    "We don't know about this one, how he got here is a mystery"
  ];
}

const About = () => {

  const [users, setUsers] = useState([]);
  const [bios, setBios] = useState(() => getBios())

  useEffect(() => {
    fetch("https://reqres.in/api/users").then(res => res.json()).then(users => { console.log(users.data); setUsers(users.data) });
  }, []);


  return <>
    <div className='about'>
      <span></span>
      <div className="container">
        <h1>About Us</h1>
      </div>
    </div>
    <div className="aboutUs">
      <div className="container">
        <h3>About Us</h3>
        <div className="text">
          <p>Business and Technology University was founded on September 16, 2016. BTU is the first private high – technology center in Georgia which unites regional technological hub, business accelerator, research center, artificial intelligence lab, block-chain lab, cyber security lab, retraining center, renewable energy lab, Android and iOS lab, industry 4.0 lab and other in one area.</p>
          <p>We are completely different educational area in Georgia corresponding to western values with the help of unique educational programs, supporting innovations, formulating entrepreneurial ecosystem and integrating modern digital technologies in learning process. </p>
          <p>We have the ambition and all the necessary recourses in order to motivate and enable the students to become competitive force not only at local, but also at international market.</p>
        </div>
        <div className="team">
          {users.map((
            (user, index) => (
            <div className="teammate" key={user.id}>
              <div className="userImage" >
                <img src={user.avatar} />
              </div>
              <div className="userName">
                <p>{user.first_name + " " + user.last_name}</p>
                <p>{bios[index % users.length]}</p>
              </div>
            </div>
            )
          ))}
        </div>
      </div>
    </div>
  </>
};

export default About;