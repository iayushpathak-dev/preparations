import { useEffect } from "react";

export default function WithLogger(WrappedComponent) {
  console.log(WrappedComponent, "props>>>>>>>>>>>>>>>>>>>>>>>>>>");
  let count = 0;

  return (props) => {
    useEffect(() => {
      console.log("Mount Component Name", props.name);
      console.log(count++, "counter>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
    }, [props]);
    return <WrappedComponent {...props} props/>;
  };
}
