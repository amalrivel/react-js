const CardResult = (props) => {
  return (
    <div className="lg:px-36 md:px-12 sm:px-8 px-4 py-6">
      <div className="grid gap-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 grid-flow-row">
        {props.result.map((item) => (
          <div className="border rounded-lg p-4 flex flex-col justify-around h-full">
            <img className="p-4" src={item.image} alt={item.image} />
            <p>{item.name}</p>
            <p>{item.price}</p>{" "}
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardResult;
