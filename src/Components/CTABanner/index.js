const CTABanner = () => {
  return (
    <div className="lg:px-36 md:px-12 sm:px-8 px-4 py-6 ">
      <div className="bg-blue-900 rounded-lg flex flex-col items-center justify-center text-center p-16">
        <p className="text-white text-4xl font-bold my-4">
          Sewa Mobil di (Lokasimu) Sekarang
        </p>
        <p className="text-white my-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-44 my-4">
          Mulai Sewa Mobil
        </button>
      </div>
    </div>
  );
};

export default CTABanner;
