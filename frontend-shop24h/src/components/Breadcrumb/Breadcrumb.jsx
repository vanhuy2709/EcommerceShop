import { Breadcrumbs } from "@mui/material";
import { Link } from "react-router-dom";
import { MdOutlineNavigateNext } from "react-icons/md";

const Breadcrumb = ({ crumbs }) => {
  const isLast = (index) => {
    return index === crumbs.length - 1;
  };

  return (
    <div className="bg-[url('/src/assets/images/breadcrumb/breadcrumb.jpg')] bg-no-repeat bg-cover bg-center">
      <div className="max-w-screen-xl mx-auto px-4 py-12">

        <Breadcrumbs
          aria-label="breadcrumb"
          separator={<MdOutlineNavigateNext className="text-gray-500" />}
        >
          {crumbs &&
            crumbs.map((crumb, index) => {
              const disabledColor = isLast(index)
                ? "text-[#00B207]"
                : "text-[#808080] hover:underline";

              return (
                <Link
                  key={index}
                  className={`${disabledColor} font-[Poppins]`}
                  to={crumb.url}
                >
                  {crumb.name}
                </Link>
              );
            })}
        </Breadcrumbs>

      </div>
    </div>
  );
};

export default Breadcrumb;