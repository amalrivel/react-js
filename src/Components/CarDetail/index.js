const CarDetail = (props) => {
  return (
    <div className="lg:px-36 md:px-12 sm:px-8 px-4 py-6">
      <div className="grid gap-4 sm:grid-cols-5 grid-cols-1 grid-flow-row">
        <div className="border rounded-lg p-4 flex flex-col justify-around sm:col-span-3 col-span-1 sm:order-first order-last">
          <p>Tentang Paket</p>
          <p>Include</p>
          <ul className="list-disc list-outside ml-6">
            <li>Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
            <li>Sudah termasuk bensin selama 12 jam</li>
            <li>Sudah termasuk Tiket Wisata</li>
            <li>Sudah termasuk pajak</li>
          </ul>
        </div>
        <div className="border rounded-lg p-4 sm:col-span-2 col-span-1">
          <img
            className="p-4"
            src={props.spesificData.image}
            alt={props.spesificData.image}
          />
          <p>{props.spesificData.name}</p>
          <p>{props.spesificData.category}</p>
          <div className="flex flex-row justify-between">
            <p>Total</p>
            <p>
              {Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "IDR",
              }).format(props.spesificData.price)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetail;
