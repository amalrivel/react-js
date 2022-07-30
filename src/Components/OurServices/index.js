import Check from "../../Assets/check.png";

const OurServices = (props) => {
  return (
    <div className="lg:px-36 md:px-12 sm:px-8 px-4 py-6">
      <div className="grid gap-4 md:grid-cols-2 grid-cols-1 grid-flow-row">
        <div className="flex items-center md:p-0 p-9">
          <img src={props.service} alt={props.service} />
        </div>
        <div className="flex flex-col justify-center h-full">
          <p className="font-bold text-2xl my-2">
            Best Car Rental for any kind of trip in (Lokasimu)!
          </p>
          <p className="font-bold my-2">
            Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga
            lebih murah dibandingkan yang lain, kondisi mobil baru, serta
            kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding,
            meeting, dll.
          </p>
          <ul>
            {props.OurService.map((item) => (
              <li className="py-2 flex flex-row">
                <img className="object-none" src={Check} alt={Check}/>
                <p className="font-bold px-2">{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* <div className="basis-full md:basis-1/2 px-24">
        <div className="flex flex-col justify-center h-full">
          <img src={props.service} alt={props.service} />
        </div>
      </div>
      <div className="basis-full md:basis-1/2 pr-24">
        <div className="flex flex-col justify-center h-full">
          <p className="font-bold text-4xl my-2">
            Best Car Rental for any kind of trip in (Lokasimu)!
          </p>
          <p className="font-bold my-2">
            Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga
            lebih murah dibandingkan yang lain, kondisi mobil baru, serta
            kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding,
            meeting, dll.
          </p>
          <ul>
            {props.OurService.map((item) => (
              <li className="py-2 flex flex-row">
                <CheckCircleOutlineIcon />
                <p className="font-bold px-2">{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </div> */}
    </div>
  );
};

export default OurServices;
