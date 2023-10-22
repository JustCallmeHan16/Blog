import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { hideToggle } from "../services/RouterSlice";
import { useEffect } from "react";

const DashboardLayout = () => {

  const hide = useSelector((state) => state.router.hide);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(hideToggle(!hide));
  }, []);

  return (
    <div>
      <Outlet />
    </div>
  );
};

export default DashboardLayout;
