import PeopleAltIcon from "@mui/icons-material/PeopleAlt";

const CarDetail = (props) => {
  console.log(props.spesificData);
  return (
    <div className="lg:px-36 md:px-12 sm:px-8 px-4 py-6">
        {props.spesificData !== null ? (
          <div className="grid gap-4 sm:grid-cols-5 grid-cols-1 grid-flow-row">
            <div className="border rounded-lg p-4 flex flex-col justify-around sm:col-span-3 col-span-1 sm:order-first order-last auto-cols-min">
              <p className="font-bold py-2">Tentang Paket</p>
              <p className="font-bold py-1">Include</p>
              <ul className="list-disc list-outside ml-8">
                <li>
                  Apa saja yang termasuk dalam paket misal durasi max 12 jam
                </li>
                <li>Sudah termasuk bensin selama 12 jam</li>
                <li>Sudah termasuk Tiket Wisata</li>
                <li>Sudah termasuk pajak</li>
              </ul>
              <p className="font-bold py-1">Exclude</p>
              <ul className="list-disc list-outside ml-8">
                <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                <li>
                  Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                  20.000/jam
                </li>
                <li>Tidak termasuk akomodasi penginapan</li>
              </ul>
              <p className="font-bold py-1">Refund, Reschedule, Overtime</p>
              <ul className="list-disc list-outside ml-8">
                <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                <li>
                  Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                  20.000/jam
                </li>
                <li>Tidak termasuk akomodasi penginapan</li>
                <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                <li>
                  Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                  20.000/jam
                </li>
                <li>Tidak termasuk akomodasi penginapan</li>
                <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                <li>
                  Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                  20.000/jam
                </li>
                <li>Tidak termasuk akomodasi penginapan</li>
              </ul>
            </div>
            <div className="sm:col-span-2 col-span-1">
              <div className="border rounded-lg p-4 ">
                <img
                  className="p-4"
                  src={props.spesificData.image}
                  alt={props.spesificData.image}
                />
                <p className="font-bold">{props.spesificData.name}</p>
                <p>
                  <PeopleAltIcon /> {props.spesificData.category}
                </p>
                <div className="flex flex-row justify-between my-4">
                  <p className="font-bold">Total</p>
                  <p className="font-bold">
                    {Intl.NumberFormat("de-DE", {
                      style: "currency",
                      currency: "IDR",
                    }).format(props.spesificData.price)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div> <p className="font-bold text-center">Car not found</p></div>
        )}
    </div>
  );
};

export default CarDetail;
