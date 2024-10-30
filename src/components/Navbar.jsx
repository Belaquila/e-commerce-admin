import logo from "/src/assets/logo_Ecommerce.svg";

function Navbar() {
  return (

    <div className="navbar">
      <img className="h-20 w-auto border-solid rounded-3xl p-1" src={logo} />
      <p className="flex columns-4 bg-center centered-text"> e-commerce manager </p>
    </div>
  );
}
export default Navbar