import "./settings.css";
import Sidebar from "../../components/sidebar/Sidebar";

export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle">Delete Account</span>
        </div>
      <form className="settingsForm">
        <label>Profile Picture</label>
        <div className="settingsPP">
          <img 
            src="./images/topImg.jpg" 
            alt=""
          />
          <label htmlFor="fileInput">
            <i className="settingsPPIcon fa-solid fa-circle-user"></i>
          </label>
          <input 
            type="file" 
            id="fileInput" 
            style={{ display: "none" }}
            className="settingsPPInput" 
          />
        </div>
        <label>Username</label>
        <input type="text" placeholder="Ása" name="name" /> 
        <label>Email</label>
        <input type="email" placeholder="asaasgeirs@gmail.com" name="name" />
        <label>Password</label>
        <input type="password" placeholder="Password" name="password" />
        <button className="settingsSubmit">
          Update
        </button>
      </form>
      </div>
      <Sidebar />
    </div>
  );
}
