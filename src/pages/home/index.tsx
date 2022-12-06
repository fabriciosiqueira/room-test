import AvatarComponent from "../../components/Avatar";
import ButtonTask from "../../components/ButtonTask";

const Home = () => {
  return (
    <div className="bg-primary w-full h-screen">
      <div className="flex flex-col justify-center">
        <div className="mx-auto mt-8">
          <AvatarComponent />
        </div>
        <h1 className="text-center font-bold text-[35px] mt-6">
          Room of Thoughts
        </h1>
        <p className="text-center font-normal">
          Don't think, throw in the room
        </p>
      </div>
      <div className="mx-auto mt-10">
        <ButtonTask />
      </div>
    </div>
  );
};

export default Home;
