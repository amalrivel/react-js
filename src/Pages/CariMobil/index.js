import * as React from "react";
import Navbar from "../../Components/Navbar";
import Hero from "../../Components/Hero";
import Search from "../../Components/Search";
import CardResult from "../../Components/CardResult";
import CarDetail from "../../Components/CarDetail";
import Logo from "../../Assets/logo.png";
import Car from "../../Assets/img_car.png";
import Facebook from "../../Assets/icon_facebook.svg";
import Mail from "../../Assets/icon_mail.svg";
import Instagram from "../../Assets/icon_instagram.svg";
import Twitch from "../../Assets/icon_twitch.svg";
import Twitter from "../../Assets/icon_twitter.svg";
import axios from "axios";
import { useParams } from "react-router-dom";
import Footer from "../../Components/Footer";

const CariMobil = () => {
  const id = useParams();

  // Navbar
  const logo = Logo;
  const navList = ["Our Services", "Why Us", "Testimonial", "FAQ"];
  const [toggleDrawer, setToggleDrawer] = React.useState(false);
  const toggleDrawerHandler = () => {
    setToggleDrawer(!toggleDrawer);
  };
  const propsNavbar = {
    logo,
    navList,
    toggleDrawer,
    toggleDrawerHandler,
  };

  // Hero
  const car = Car;
  const propsHero = {
    car,
  };

  // Search
  const [state, setState] = React.useState({
    namaMobil: "",
    kategori: "",
    harga: "",
    status: "",
  });

  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    axios
      .get("https://bootcamp-rent-car.herokuapp.com/admin/car")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    handleResult();
    event.preventDefault();
  };

  const searchItem = [
    {
      label: "Nama Mobil",
      name: "namaMobil",
      value: state.namaMobil,
    },
    {
      label: "Kategori",
      name: "kategori",
      value: state.kategori,
      option: [
        {
          value: "",
          content: "Masukan Kapasitas Mobil",
        },
        {
          value: "2 - 4 orang",
          content: "2 - 4 orang",
        },
        {
          value: "4 - 6 orang",
          content: "4 - 6 orang",
        },
        {
          value: "6 - 8 orang",
          content: "6 - 8 orang",
        },
      ],
    },
    {
      label: "Harga",
      name: "harga",
      value: state.harga,
      option: [
        {
          value: "",
          content: "Masukan Harga Sewa per Hari",
        },
        {
          value: "< Rp. 400.000",
          content: "< Rp. 400.000",
        },
        {
          value: "Rp. 400.000 - Rp. 600.000",
          content: "Rp. 400.000 - Rp. 600.000",
        },
        {
          value: "> Rp. 600.000",
          content: "> Rp. 600.000",
        },
      ],
    },
    {
      label: "Status",
      name: "status",
      value: state.status,
      option: [
        {
          value: "",
          content: "Status Mobil",
        },
        {
          value: "Siap untuk disewa",
          content: "Siap untuk disewa",
        },
        {
          value: "Sedang disewa",
          content: "Sedang disewa",
        },
      ],
    },
  ];
  const propsSearch = { handleSubmit, handleChange, state, searchItem, id };

  // Card Result
  const [result, setResult] = React.useState([]);
  const handleResult = () => {
    let result = data;
    result =
      state.namaMobil === ""
        ? result
        : data.filter((item) =>
            item.name.toLowerCase().search(state.namaMobil.toLowerCase()) === -1
              ? false
              : true
          );
    result =
      state.kategori === ""
        ? result
        : result.filter((item) => state.kategori === item.category);
    result =
      state.harga === ""
        ? result
        : state.harga === "< Rp. 400.000"
        ? result.filter((item) => item.price <= 400000)
        : state.harga === "Rp. 400.000 - Rp. 600.000"
        ? result.filter((item) => item.price > 400000 && item.price < 600000)
        : result.filter((item) => item.price > 600000);
    result =
      state.status === ""
        ? result
        : state.status === "Siap untuk disewa"
        ? result.filter((item) => item.status === false)
        : result.filter((item) => item.status === true);
    setResult(result);
  };
  const propsCardResult = { handleResult, result };
  
  // Car Detail
  const [spesificData, setSpesificData] = React.useState({});
  React.useEffect(() => {
    axios
      .get(`https://bootcamp-rent-car.herokuapp.com/admin/car/${id.id}`)
      .then((res) => setSpesificData(res.data))
      .catch((err) => console.log(err));
  }, [id.id]);

  const propsCarDetail = { spesificData };

  // Footer
  const facebook = Facebook;
  const instagram = Instagram;
  const mail = Mail;
  const twitter = Twitter;
  const twitch = Twitch;
  const icon = [ facebook, instagram, mail, twitter, twitch ];
  const propsFooter = { navList, logo, icon };

  return (
    <React.Fragment>
      <Navbar {...propsNavbar} />
      <Hero {...propsHero} />
      <Search {...propsSearch} />
      {Object.keys(id).length === 0 ? (
        <CardResult {...propsCardResult} />
      ) : (
        <CarDetail {...propsCarDetail} />
      )}
      <Footer {...propsFooter} />
    </React.Fragment>
  );
};

export default CariMobil;
