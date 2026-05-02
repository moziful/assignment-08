import React from "react";

const NotFoundPage = () => {
  return (
    <div className="h-[90vh] flex flex-col justify-center items-center gap-4 font-bold">
      <p className="text-purple-800 tracking-widest text-8xl">404</p>
      <p className="text-black text-2xl">
        The page you are looking for does not exist.
      </p>
    </div>
  );
};

export default NotFoundPage;
