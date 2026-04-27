import logo from "../assets/images/Background.png";
import adminicon from "../assets/icons/Icon.png";
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
          <div className={`${style.admin} ${style.forms} col-4`}>
            <label htmlFor="auth">
              <img src={adminicon} alt="" />
              Administrator login
            </label>
            <hr />
            <form>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" class="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Password
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div class="mb-3 form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="exampleCheck1"
                />
                <label class="form-check-label" for="exampleCheck1">
                  Check me out
                </label>
              </div>
              <button type="submit" class={` btn ${style.btn}`}>
                Login
              </button>
            </form>
          </div>
          <div className={`${style.pinaccess} ${style.forms} col-4`}>
            <div className="container text-center">
              <div className="row">
                <div className="col"><button className = {`${style.btnn}`}>1</button></div>
                <div className="col">Column</div>
                <div className="col">Column</div>
              </div>
              <div className="row">
                <div className="col">Column</div>
                <div className="col">Column</div>
                <div className="col">Column</div>
              </div>
              <div className="row">
                <div className="col">Column</div>
                <div className="col">Column</div>
                <div className="col">Column</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
