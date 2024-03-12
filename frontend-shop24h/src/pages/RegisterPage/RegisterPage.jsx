import { IoHomeOutline } from "react-icons/io5";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { notification } from 'antd';
import { useDispatch } from "react-redux";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import { validateEmail, validatePhone } from '../../utils/validate';
import { registerUserAction } from '../../store/actions/user/apiRequest.action';

// Breadcrumb Variable
const listCrumbs = [
  { name: <IoHomeOutline className='text-[20px]' />, url: '/' },
  { name: 'Account', url: '/account' },
  { name: 'Create Account', url: '/signup' },
]

const RegisterPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  // const [address, setAddress] = useState('');
  // const [city, setCity] = useState('');
  // const [country, setCountry] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();

    const newUser = {
      name: name.trim(),
      email: email.trim(),
      password: password.trim(),
      phone: phone.trim(),
      // address: address.trim(),
      // city: city.trim(),
      // country: country.trim(),
    }

    if (!validateEmail(newUser.email)) {
      return notification.error({
        message: 'Error',
        description: 'Email is not valid'
      })
    }
    if (!validatePhone(newUser.phone)) {
      return notification.error({
        message: 'Error',
        description: 'Phone Number is not valid'
      })
    }

    dispatch(registerUserAction(newUser, navigate))
  }

  return (
    <>
      <Breadcrumb crumbs={listCrumbs} />

      <div className="max-w-screen-xl mx-auto px-4">
        <form
          className="bg-white px-6 pt-6 pb-8 rounded-lg shadow-lg flex flex-col gap-5 max-w-2xl mx-auto my-20"
          onSubmit={handleRegister}
        >
          <h2 className="text-gray-900 text-[32px] font-semibold leading-[39px] text-center">Create Account</h2>
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Full Name"
              className="leading-[21px] px-4 py-[14px] border rounded-md w-full outline-none"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
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
          <div>
            <input
              type="text"
              placeholder="Phone Number"
              className="leading-[21px] px-4 py-[14px] border rounded-md w-full outline-none"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          {/* <div>
            <input
              type="text"
              placeholder="Address"
              className="leading-[21px] px-4 py-[14px] border rounded-md w-full outline-none"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div> */}
          {/* <div className="flex gap-4">
            <input
              type="text"
              placeholder="City"
              className="leading-[21px] px-4 py-[14px] border rounded-md w-full outline-none"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <input
              type="text"
              placeholder="Country"
              className="leading-[21px] px-4 py-[14px] border rounded-md w-full outline-none"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
          </div> */}

          <button className="text-white bg-[#00B207] text-[14px] font-semibold leading-4 py-[14px] rounded-full">Create Account</button>

          <p className="text-gray-600 text-[14px] leading-[21px] text-center">
            Already have account?
            <NavLink to="/login" className="text-gray-900 font-medium">  Login</NavLink>
          </p>
        </form>
      </div>
    </>
  );
};

export default RegisterPage;