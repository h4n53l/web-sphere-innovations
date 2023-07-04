import { Fragment } from "react";

const CopyRight = () => {
  return (
    <Fragment>
      Copyright @{new Date().getFullYear()} <a href="#">Qolle</a> All Right
      Reserve
    </Fragment>
  );
};
export default CopyRight;
