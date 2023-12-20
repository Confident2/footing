const Loader = () => {
  return (
    <div className="flex h-24 items-center justify-center" role="progressbar">
      <div className="border-natural h-10 w-10 animate-spin rounded-full border-t-4 border-solid"></div>
    </div>
  );
};

export default Loader;
