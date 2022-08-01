const Hero = (props) => {
  return (
    <div className="lg:pl-36 md:pl-12 sm:pl-8 pl-4 pt-6 bg-blue-50">
      <div className="grid gap-4 md:grid-cols-2 grid-cols-1 grid-flow-row">
        <div className="lg:pr-0 md:pr-0 sm:pr-8 pr-4 flex flex-col justify-center mb-12">
          <p className="font-bold text-4xl my-2">
            Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)
          </p>
          <p className="font-bold my-2">
            Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas
            terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu
            untuk sewa mobil selama 24 jam.
          </p>
          {props.buttonMulaiSewa}
        </div>
        <div className="flex items-end justify-end">
          <img src={props.car} alt={props.car} />
        </div>
      </div>
      {/* <div className="basis-full md:basis-1/2 pl-10">
        <div className="flex flex-col justify-center h-full">
          <p className="font-bold text-4xl my-2">
            Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)
          </p>
          <p className="font-bold my-2">
            Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas
            terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu
            untuk sewa mobil selama 24 jam.
          </p>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-44 my-2">
            Mulai Sewa Mobil
          </button>
        </div>
      </div>
      <div className="basis-full md:basis-1/2 pl-10">
        <img src={props.car} alt={props.car} />
      </div> */}
    </div>
  );
};

export default Hero;
