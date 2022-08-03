import {Link } from "react-router-dom";
const Footer = (props) => {
  return (
    <div className="lg:px-36 md:px-12 sm:px-8 px-4 py-6">
      <div className="grid gap-4 md:grid-cols-11 sm:grid-cols-2 grid-cols-1 grid-flow-row">
        <div className="md:col-span-4">
          <p className="my-2 font-bold">
            Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000
          </p>
          <p className="my-2 font-bold">binarcarrental@gmail.com</p>
          <p className="my-2 font-bold">081-233-334-808</p>
        </div>
        <div className="md:col-span-2 flex flex-col">
          {props.navList.map((item) => (
            // <p>{item}</p>
            <a href={"#" + item} className="my-2">
              {item}
            </a>
          ))}
        </div>
        <div className="md:col-span-3">
          <p className="my-2 font-bold">Connect with us</p>
          {props.icon.map((icon) => (
            <img src={icon} alt={icon} className="inline-block m-1" />
          ))}
        </div>
        <div className="md:col-span-2">
          <p className="my-2 font-bold">Copyright Binar 2022</p>
          <Link to={`/react-js/`}><img src={props.logo} alt={props.logo} /></Link>
          
        </div>
      </div>
    </div>
  );
};

export default Footer;
