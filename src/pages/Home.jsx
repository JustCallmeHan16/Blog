import { useCreateUserMutation, useGetUsersQuery } from "../api/userApi";
import { storeUsers } from "../services/UserSlice";

const Home = () => {

  const { data } = useGetUsersQuery("users");

  const [createUser] = useCreateUserMutation();

  const createNewUser = () => {
    const userData = {
      id: Date.now(),
      name: "Luigi",
      age: 26,
      job: "plumber",
      income: 70,
    };
    createUser(userData);
    
  };

  console.log(data);

  return (
    <div className="h-[80vh] w-full flex justify-center">
      <div>
        <h3>Home</h3>
        <button
          onClick={createNewUser}
          className="px-2 py-1 text-[18px] text-white font-medium text-center bg-blue-400 rounded"
        >
          Create
        </button>
      </div>
    </div>
  );
};

export default Home;
