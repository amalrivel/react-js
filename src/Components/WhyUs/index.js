const WhyUs = (props) => {
  return (
    <div className="lg:px-36 md:px-12 sm:px-8 px-4 py-6" id="Why Us">
      <p className="font-bold text-2xl my-2">Why Us?</p>
      <p className="font-bold my-4">Mengapa harus pilih Binar Car Rental?</p>
      <div className="grid gap-4 lg:grid-cols-4 md:grid-cols-2 grid-cols-1 grid-flow-row">
        {props.content.map((item) => (
          <div className="border rounded-md">
            <div className="p-6">
              <img className="mb-2" src={item.img} alt={item.img} />
              <p className="font-bold my-2 text-lg">{item.name}</p>
              <p>
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyUs;
