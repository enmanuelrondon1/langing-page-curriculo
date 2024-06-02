import Navlink from "../Navbar/NavLinnk";

export const MenuOverlay = ({ links }) => {
  return (
    <>
      <ul className="flex flex-col py-4 items-center">
        {links.map((link, id) => (
          <li key={id}>
            <Navlink href={link.path} title={link.title} />
          </li>
        ))}
      </ul>
    </>
  );
};
