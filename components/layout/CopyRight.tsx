import { Fragment } from "react";

const CopyRight = () => {
  return (
    <Fragment>
      Copyright @{new Date().getFullYear()} <a href="#">Web Sphere Innovations</a> All Right
      Reserved
    </Fragment>
  );
};
export default CopyRight;
