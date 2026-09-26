import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const Bag = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default Bag;
