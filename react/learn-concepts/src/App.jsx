import Testing from "./hoc/Testing";
import WithLogger from "./hoc/WithLogger";

const App = (props) => {
  return (
    <>
      <div>start from here.</div>
      <Testing name="testing from app" />
    </>
  );
};

export default WithLogger(App);
