const maturedBroiler = () => {
  return (
    <section className="flex gap-3">
      <div>
        <div className="flex flex-col gap-2">
          <h1 className="text-xl font-semibold">Brand</h1>
          <div className="flex gap-2">
            <input type="radio" />
            <p>Local farmers</p>
          </div>
          <div className="flex gap-2">
            <input type="radio" />
            <p>Agrited</p>
          </div>
          <div className="flex gap-2">
            <input type="radio" />
            <p>Chi</p>
          </div>
          <div className="flex gap-2">
            <input type="radio" />
            <p>Obasanjo</p>
          </div>
          <div className="flex gap-2">
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
