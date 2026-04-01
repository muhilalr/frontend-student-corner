import { ChevronDown } from "lucide-react";

const Dropdown = ({ label, menu }) => {
  return (
    <div className="dropdown dropdown-hover">
      <div
        tabIndex={0}
        role="button"
        className="bg-white flex items-center gap-1 pl-4 pr-2 py-2 text-base text-slate-700 font-medium rounded-md hover:cursor-pointer hover:bg-gray-100"
      >
        {label}
        <ChevronDown className="h-4 w-4 relative top-0.5" />
      </div>
      <ul
        tabIndex="-1"
        className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
      >
        {menu?.map((item, index) => (
          <li key={index}>
            <a>{item}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
