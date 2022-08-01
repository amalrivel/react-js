import { Link } from "react-router-dom";

const CardResult = (props) => {
  return (
    <div className="lg:px-36 md:px-12 sm:px-8 px-4 py-6">
      <div className="grid gap-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 grid-flow-row">
        {props.result.map((item) => (
          <div className="border rounded-lg p-4 flex flex-col justify-around h-full">
            <img className="p-4" src={item.image} alt={item.image} />
            <p className="my-1 text-sm">{item.name}</p>
            <p className="my-1 font-bold">
              {Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "IDR",
              }).format(item.price)}
            </p>
            <p className="my-1 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            </p>
            <Link to={`/carimobil/${item.id}`}>
              <button
                type="submit"
                value="Submit"
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full my-2"
              >
                Pilih Mobil
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardResult;
