import logo from "../assets/react.svg";

function Navbar() {
  return (
    <div className="bg-blue-600 text-white shadow-md fixed top-0 left-0 w-full z-50 flex columns-1">
      <img className="h-10 w-auto border-solid border border-white rounded-3xl p-1" src={logo} />
      <p className="flex columns-4">e-commerce admin</p>
    </div>
  );
}
export default Navbar