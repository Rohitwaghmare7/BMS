import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Alert from "./Alert";
import "../login&signup.css";

function Login() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  let navigate = useNavigate();

  const [signInEmail, setSignInEmail] = useState("");
  const [signInPassword, setSignInPassword] = useState("");

  const handleSignIn = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: signInEmail, password: signInPassword }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      localStorage.setItem("token", json.authToken);
      showAlert("Logged in Successfully", "success");
      navigate("/home");
    } else {
      showAlert(json.error, "danger");
    }
  };

  return (
    <>
      <div className="gradient-background flex justify-start items-center min-h-screen">
        <Alert alert={alert} />
        <div className="flex flex-col justify-center px-6 py-12 lg:px-8 w-full max-w-screen-xl mx-auto">
        <div className="sm:w-full sm:max-w-sm">
            <h1 className="text-5xl font-bold text-center text-gradient">
              BMS
            </h1>

            <h2 className="mt-2 text-center text-2xl font-bold leading-9 tracking-tight text-white">
              Create your account
            </h2>
          </div>

          <div className="mt-10 sm:w-full sm:max-w-sm">
            <form className="space-y-6" onSubmit={handleSignIn}>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-white"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={signInEmail}
                    onChange={(e) => setSignInEmail(e.target.value)}
                    className="block w-full rounded-md border-0 py-2 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="mt-4">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-white"
                  >
                    Password
                  </label>
                  <div className="text-sm">
                    <a
                      href="#"
                      className="font-semibold text-indigo-600 hover:text-indigo-500"
                    >
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    value={signInPassword}
                    onChange={(e) => setSignInPassword(e.target.value)}
                    className="block w-full rounded-md border-0 py-2 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="mt-6">
              <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-gradient-custom px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gradient-custom focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign in
                </button>
              </div>
            </form>

            <p className="mt-8 text-center text-sm text-gray-500">
              Not a member?{" "}
              <Link
                to="/signUp"
                className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
              >
                Create your account.
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
