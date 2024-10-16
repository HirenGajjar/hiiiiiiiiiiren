import { useEffect, useState } from "react";
import MainComponent from "./Components/MainComponent/MainComponent";

import FullScreenLoader from "./Components/FullScreenLoader.jsx/FullScreenLoader";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="w-full h-screen">
        {loading ? (
          <FullScreenLoader />
        ) : (
          <>
            <MainComponent />
          </>
        )}
      </div>
    </>
  );
};

export default App;
