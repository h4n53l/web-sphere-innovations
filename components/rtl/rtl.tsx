import { useEffect, useState } from "react";

const rtl = () => {
  const [rtlPathName, setRtlPathName] = useState("");
  useEffect(() => {
    const path = window.location.pathname;
    if (path.includes("rtl")) {
      setRtlPathName("/rtl/");
    } else {
      setRtlPathName("/");
    }
  }, []);
  return rtlPathName;
};

export default rtl;
