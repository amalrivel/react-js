const Hero = (props) => {
  return (
    <div className="flex flex-row pt-10 flex-wrap bg-blue-50">
      <div className="basis-full md:basis-1/2 pl-10">
        <div className="flex flex-col justify-center h-full">
          <p className="font-bold text-4xl my-2">Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</p>
          <p className="font-bold my-2">
            Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas
            terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu
            untuk sewa mobil selama 24 jam.
          </p>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-44 my-2">Mulai Sewa Mobil</button>
        </div>
      </div>
      <div className="basis-full md:basis-1/2 pl-10">
        <img src={props.car} alt={props.car} />
      </div>
    </div>
  );
};

export default Hero;
