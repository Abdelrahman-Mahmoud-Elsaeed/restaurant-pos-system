import logo from "../assets/images/Background.png";
import adminicon from "../assets/icons/Icon.png";
import accessicon from "../assets/icons/pinIcon.png";
import xicon from "../assets/icons/xIcon.png";
import yicon from "../assets/icons/yIcon.png";
import loginicon from "../assets/icons/loginIcon.png";
import style from "./login.module.css";

export default function Login() {
  return (
    <div>
      <div className={style.loginall}>
        <div
          className={`d-flex flex-column align-items-center ${style.loginpart}`}
        >
          <div className={style.logo}>
            <img src={logo} alt="" />
          </div>
          <div className={style.title}>
            <h1>Kinetic Service</h1>
          </div>
          <p>Staff & Admin Access</p>
        </div>
        <div className={`row d-flex justify-content-center gap-1`}>
          <div className={`${style.admin} ${style.forms} col-4 `}>
            <label htmlFor="auth">
              <img src={adminicon} alt="" className="me-3" />
              <span>Administrator login</span>
            </label>
            <hr />
            <form className="mt-5">
              <div class="mb-3 ">
                <label for="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className={`form-control ${style.inputbg}`}
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className={`form-control ${style.inputbg}`}
                  id="exampleInputPassword1"
                />
              </div>
              <button type="submit" class={` btn ${style.btn}`}>
                Login <img src={loginicon} />
              </button>
            </form>
            <div className="d-flex flex-column align-items-center">
              <hr />
              <p className=" ">Need an account? Sign Up</p>
            </div>
          </div>
          <div className={`${style.pinaccess} ${style.forms} col-4`}>
            <div className="container text-center">
              <label htmlFor="auth">
                <img src={accessicon} alt="" className="me-3" />
                <span>Staff PIN access</span>
              </label>
              <hr />
              <input
                type="password"
                className={`${style.formcontrol} `}
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              ></input>
              <div className="row py-1">
                <div className="col p-0 ">
                  <button className={`${style.btnn} btn`}>1</button>
                </div>
                <div className="col p-0">
                  <button className={`${style.btnn}  btn`}>2</button>
                </div>
                <div className="col p-0">
                  <button className={`${style.btnn} btn`}>3</button>
                </div>
              </div>
              <div className="row py-1">
                <div className="col p-0">
                  <button className={`${style.btnn} btn`}>4</button>
                </div>
                <div className="col p-0">
                  <button className={`${style.btnn} btn`}>5</button>
                </div>
                <div className="col p-0">
                  <button className={`${style.btnn} btn`}>6</button>
                </div>
              </div>
              <div className="row py-1">
                <div className="col p-0">
                  <button className={`${style.btnn} btn`}>7</button>
                </div>
                <div className="col p-0">
                  <button className={`${style.btnn} btn`}>8</button>
                </div>
                <div className="col p-0">
                  <button className={`${style.btnn} btn`}>9</button>
                </div>
              </div>
              <div className="row py-1">
                <div className="col p-0">
                  <button className={`${style.btnn} btn ${style.bgdarker}`}>
                    <img src={xicon} alt="" />
                  </button>
                </div>
                <div className="col p-0">
                  <button className={`${style.btnn} btn `}>0</button>
                </div>
                <div className="col p-0">
                  <button className={`${style.btnn} btn ${style.bggreen}`}>
                    <img src={yicon} alt="" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
