const maturedBroiler = () => {
  return (
    <section className="flex gap-3 mx-7 mt-20 h-screen">
      <div className="bg-white p-3 w-72">
        <div className="flex flex-col gap-2 border-b border-gray-400">
          <h1 className="text-xl font-semibold">Brand</h1>
          <label htmlFor="">
            <input type="radio" name="Local farmer" value={1} />
          </label>
        </div>
      </div>
      <div>product</div>
    </section>
  );
};

export default maturedBroiler;
