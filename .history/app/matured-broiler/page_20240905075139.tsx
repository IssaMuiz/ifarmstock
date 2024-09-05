const maturedBroiler = () => {
  return (
    <section className="flex gap-3 mx-7">
      <div className="bg-white p-3 w-80">
        <div className="flex flex-col gap-2 border-b border-gray-400">
          <h1 className="text-xl font-semibold">Brand</h1>
          <div className="flex gap-2 text-xl items-center">
            <input type="radio" />
            <p>Local farmers</p>
          </div>
          <div className="flex gap-2 text-xl items-center">
            <input type="radio" />
            <p>Agrited</p>
          </div>
          <div className="flex gap-2 text-xl items-center">
            <input type="radio" />
            <p>Chi</p>
          </div>
          <div className="flex gap-2 text-xl items-center">
            <input type="radio" />
            <p>Obasanjo</p>
          </div>
          <div className="flex gap-2 text-xl items-center">
            <input type="radio" />
            <p>Zartech</p>
          </div>
        </div>
      </div>
      <div>product</div>
    </section>
  );
};

export default maturedBroiler;
