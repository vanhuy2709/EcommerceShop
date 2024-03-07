import { NavLink, useNavigate } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import { IoHomeOutline } from "react-icons/io5";
import { useState } from "react";
import { loginUserAction } from '../../store/actions/user/apiRequest.action';
import { useDispatch } from "react-redux";

// Breadcrumb Variable
const listCrumbs = [
  { name: <IoHomeOutline className='text-[20px]' />, url: '/' },
  { name: 'Account', url: '/account' },
  { name: 'Login', url: '/login' },
]

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = (e) => {
    e.preventDefault();

    const user = {
      email: email.trim(),
      password: password.trim()
    }

    dispatch(loginUserAction(user, navigate));
  }

  return (
    <>
      <Breadcrumb crumbs={listCrumbs} />

      <div className="max-w-screen-xl mx-auto px-4">
        <form
          className="bg-white px-6 pt-6 pb-8 rounded-lg shadow-lg flex flex-col gap-5 max-w-lg mx-auto my-20"
          onSubmit={handleSignIn}
        >
          <h2 className="text-gray-900 text-[32px] font-semibold leading-[39px] text-center">Sign In</h2>
          <div>
            <input
              type="text"
              placeholder="Email"
              className="leading-[21px] px-4 py-[14px] border rounded-md w-full outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              autoComplete="on"
              className="leading-[21px] px-4 py-[14px] border rounded-md w-full outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="flex flex-col md:flex-row justify-between gap-y-3 items-center">
            {/* Remember Me */}
            <div className="flex items-center gap-[6px]">
              <input type="checkbox" />
              <p className="text-gray-600 text-[14px] leading-[21px]">Remember me</p>
            </div>

            {/* Forgor Link */}
            <a href="/forgot" className="text-gray-600 text-[14px] leading-[21px]">Forget Password</a>
          </div>

          <button className="text-white bg-[#00B207] text-[14px] font-semibold leading-4 py-[14px] rounded-full">Login</button>

          <p className="text-gray-600 text-[14px] leading-[21px] text-center">
            Don't have account?
            <NavLink to="/signup" className="text-gray-900 font-medium"> Register</NavLink>
          </p>
        </form>
      </div>
    </>
  );
};

export default LoginPage;