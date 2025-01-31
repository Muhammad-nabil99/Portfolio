import React from "react";
const ScaleLoader = React.lazy(() => import('react-spinners').then((module)=> ({default : module.ScaleLoader})))


function Spinner() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
     <ScaleLoader color="#faad1b"/>
    </div>
  );
}
export default Spinner;
