import { useEffect, useState } from "react";

const PreLoader = () => {
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    window.addEventListener("load", () => {
      setLoading(false);
    });
  }, []);

  return (
    <div id="preloader" style={{ display: loading ? "flex" : "none" }}>
      <div id="loading-center">
        <div id="object" />
      </div>
    </div>
  );
};
export default PreLoader;
