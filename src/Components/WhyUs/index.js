import Complete from "../../Assets/icon_complete.png";
import Price from "../../Assets/icon_price.png";
import Hrs from "../../Assets/icon_24hrs.png";
import Professional from "../../Assets/icon_professional.png";

const WhyUs = (props) => {
  const content = [
    {
      img: Complete,
      name: "Mobil Lengkap",
      desc: "Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat"
    },
    {
      img: Price,
      name: "Harga Murah",
      desc: "Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain"
    },
    {
      img: Hrs,
      name: "Layanan 24 Jam",
      desc: "Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu"
    },
    {
      img: Professional,
      name: "Sopir Profesional",
      desc: "Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu"
    },
  ];

  return (
    <div className="lg:px-36 md:px-12 sm:px-8 px-4 py-6">
      <p className="font-bold text-2xl my-2">Why Us?</p>
      <p className="font-bold my-4">Mengapa harus pilih Binar Car Rental?</p>
      <div className="grid gap-4 lg:grid-cols-4 md:grid-cols-2 grid-cols-1 grid-flow-row">
        {content.map((item) => (
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
