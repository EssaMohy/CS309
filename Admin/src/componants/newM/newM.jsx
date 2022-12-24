import React from 'react';
import './newM.css';
function newM() {
  return (
    <div className="newM">
    <span className="newMTitle">New Join Members</span>
    <ul className="widgetSmList">
      <li className="person">
        <img
          src="https://th.bing.com/th/id/OIP.jUaMm3-9515rJxVjRfd8rgHaHa?pid=ImgDet&w=599&h=600&rs=1"
          alt=""
          className="Img"
        />
        <div className="newmUser">
          <span className="name">john hany</span>
          <span className="Title">full-stack developer</span>
        </div>
        <button className="Button">
          Display
        </button>
      </li>
      <li className="person">
        <img
          src="https://th.bing.com/th/id/OIP.Uzgx4yiz__aMjBZjSFNeAAAAAA?pid=ImgDet&w=300&h=300&rs=1"
          alt=""
          className="Img"
        />
        <div className="newmUser">
          <span className="name">Anna mousa</span>
          <span className="Title">Software Engineer</span>
        </div>
        <button className="Button">
          Display
        </button>
      </li>
      <li className="person">
        <img
          src="https://th.bing.com/th/id/OIP.7454d5vOnm0mOPrx6jy-6QHaHa?pid=ImgDet&w=599&h=600&rs=1"
          alt=""
          className="Img"
        />
        <div className="newmUser">
          <span className="name">soultan eltayb</span>
          <span className="Title">back end developer</span>
        </div>
        <button className="Button">
          Display
        </button>
      </li>
      <li className="person">
        <img
          src="https://th.bing.com/th/id/R.60353996df6966a9512201883dc22dfc?rik=PH8YEVyhFtRJ6g&riu=http%3a%2f%2fst3.depositphotos.com%2f1156168%2f13513%2fv%2f450%2fdepositphotos_135130242-stock-illustration-avatar-with-facial-expression.jpg&ehk=VxhiYGEyrhYc6c%2bcrje9%2bEJI6ucOO%2bDYNHEP59khzhU%3d&risl=&pid=ImgRaw&r=0"
          alt=""
          className="Img"
        />
        <div className="newmUser">
          <span className="name">merna jouhn</span>
          <span className="Title">front end developer</span>
        </div>
        <button className="Button">
          Display
        </button>
      </li>
    </ul>
  </div>
  );
}
export default newM;
