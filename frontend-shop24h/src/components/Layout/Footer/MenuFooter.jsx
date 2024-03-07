import { NavLink } from "react-router-dom";

const MenuFooter = ({ listMenu }) => {
  return (
    <ul>
      {listMenu.map(item => (
        <li key={item.id}>
          <NavLink to={item.path} className='text-gray-400 text-[14px] leading-[21px] hover:text-white'>{item.name}</NavLink>
        </li>
      ))}
    </ul>
  );
};

export default MenuFooter;