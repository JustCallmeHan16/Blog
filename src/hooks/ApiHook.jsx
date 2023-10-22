import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { storeUsers } from "../services/UserSlice";

const ApiHook = (url) => {
  const [details, setDetails] = useState([]);
  const users = useSelector((state) => state.user.users);
  const dispatch = useDispatch();

  const dataFetch = async () => {
    const { data } = await axios.get(url);
    setDetails(data);
  };

  useEffect(() => {
    dataFetch();
  }, []);

  const newArray = details?.map((data) => {
    const newData = {
      id: Date.now(),
      ...data,
    };
    return newData;
  });

  useEffect(() => {
    dispatch(storeUsers(newArray));
  }, [details]);

  return { users };
};

export default ApiHook;
