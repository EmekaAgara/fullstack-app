import React, { useState } from "react";
import PasswordInput from "../../components/PasswordInput";
import { validateEmail } from "../../utils/helper";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError("Email Address is required");
      return;
    }

    if (!password) {
      setError("Please enter your Password");
      return;
    }

    setError("");
  };

  return (
    <div>
      <section
        id="background"
        class="py-16 h-screen bg-[#062863] bg-[url('/bg.JPG')]"
      >
        <div class="container mx-auto w-[30rem]">
          <div class="bg-white p-10 m-6 rounded-lg">
            <div class="flex pb-16 justify-center">
              <img src="/mono.svg" alt="" />
            </div>
            <h1 class="text-3xl font-medium mb-4 text-center">Sign in</h1>
            <p class="text-center text-md pb-6 text-gray-600 mb-7">
              Sign in to continue to your Dashboard
            </p>
            <form
              name="loginForm"
              onSubmit={handleLogin}
              action="#"
              class="max-w-lg mx-auto"
            >
              <div class="mb-4">
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  name="email"
                  class="w-full rounded-md p-5 border border-gray-200"
                />
              </div>

              <PasswordInput
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              {error && <p className="text-red-500 text-xs pb-1">{error}</p>}

              <p class="text-xs text-[#0d60d8] mb-7">
                Reset Password
                <span class="material-symbols-outlined text-xs">
                  north_east
                </span>
              </p>

              <button
                onclick=""
                id="mybutton"
                class="w-full p-5 bg-[#0d60d8] text-white rounded-md hover:bg-blue-600"
              >
                Sign in
              </button>
              <p id="result"></p>
              <p class="error" id="error-message"></p>
              <p class="text-center text-sm text-black pt-10">
                New to MONO?
                <a href="/signup">
                  <span class="text-[#0d60d8]">
                    Create account
                    <span class="text-xs material-symbols-outlined">
                      arrow_forward
                    </span>
                  </span>
                </a>
              </p>
            </form>
          </div>

          <div class="flex-shrink-0 py-10 text-xs text-center">
            <span class="text-white">© Mono</span>
            <span class="px-2.5 lg:px-3 text-white">•</span>
            <span class="text-white">Contact Us</span>
            <span class="px-2.5 lg:px-3 text-white">•</span>
            <span class="text-white">API Docs</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
