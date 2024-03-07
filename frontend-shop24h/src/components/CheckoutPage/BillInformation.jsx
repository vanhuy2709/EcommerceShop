import { useDispatch, useSelector } from "react-redux";
import {
  handleChangeAddressAction,
  handleChangeCityAction,
  handleChangeCountryAction,
  handleChangePhoneAction
} from '../../store/actions/user/order.action';

const BillInformation = () => {
  const dispatch = useDispatch();
  const { orderUser } = useSelector(reduxData => reduxData.orderReducer);
  const { address, city, country, phone } = orderUser;

  // Handle Change Info Order
  const handleChangeAddress = (e) => {
    dispatch(handleChangeAddressAction(e.target.value));
  }
  const handleChangeCountry = (e) => {
    dispatch(handleChangeCountryAction(e.target.value));
  }
  const handleChangeCity = (e) => {
    dispatch(handleChangeCityAction(e.target.value));
  }
  const handleChangePhone = (e) => {
    dispatch(handleChangePhoneAction(e.target.value));
  }

  return (
    <div className="flex-[2]">
      <form>
        <h2 className="text-gray-900 text-[24px] font-medium leading-9 mb-5">Billing Information</h2>

        <div className="flex flex-col gap-2 mb-4">
          <label className="text-gray-900 text-[14px]">Street Address</label>
          <input
            type="text"
            placeholder="Street Address"
            className="px-4 py-[14px] border rounded-md w-full outline-none"
            value={address}
            onChange={handleChangeAddress}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {/* Country */}
          <div className="flex flex-col gap-2">
            <label className="text-gray-900 text-[14px]">Country / Region</label>
            <input
              type="text"
              placeholder="Country"
              className="px-4 py-[14px] border rounded-md w-full outline-none"
              value={country}
              onChange={handleChangeCountry}
            />
          </div>

          {/* City */}
          <div className="flex flex-col gap-2">
            <label className="text-gray-900 text-[14px]">City</label>
            <input
              type="text"
              placeholder="City"
              className="px-4 py-[14px] border rounded-md w-full outline-none"
              value={city}
              onChange={handleChangeCity}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-gray-900 text-[14px]">Phone</label>
            <input
              type="text"
              placeholder="Phone number"
              className="px-4 py-[14px] border rounded-md w-full outline-none"
              value={phone}
              onChange={handleChangePhone}
            />
          </div>
        </div>

        {/* <hr className="my-8" />

        <h2 className="text-gray-900 text-[24px] font-medium leading-9 mb-5">Additional Info</h2>
        <div className="flex flex-col gap-2">
          <label className="text-gray-900 text-[14px]">Order Notes (Optional)</label>
          <textarea
            placeholder="Notes about your order, e.g. special notes for delivery"
            className="px-4 py-[14px] border rounded-md w-full outline-none h-[100px]"
          ></textarea>
        </div> */}
      </form>
    </div>
  );
};

export default BillInformation;