import StarIcon from "@mui/icons-material/Star";
import Photo from "../../Assets/img_photo.png";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";

const Testimony = (props) => {
  return (
    <div className="lg:mx-36 md:mx-12 sm:mx-8 mx-4 py-6" id="Testimonial">
      <div>
        <p className="font-bold text-2xl my-2 text-center">Testimonial</p>
        <p className="font-bold my-4 text-center">
          Berbagai review positif dari para pelanggan kami
        </p>
      </div>
      <div className="lg:-mx-36 md:-mx-12">
        <div className="">
          <ul className="overflow-hidden flex justify-center ">
            {[1, 2, 3].map((item) => (
              <div
                className={`transition duration-700 delay-100 translate-x-[${props.currentIndex.toString()}%]`}
              >
                <div className="mx-2">
                  <div className="flex md:flex-nowrap flex-wrap justify-center bg-blue-100 rounded-md md:w-[640px] sm:w-[87vw] w-[92vw] p-12">
                    <img className="object-none p-4" src={Photo} alt={Photo} />
                    <div className="flex flex-col p-4">
                      <div className="flex md:justify-start justify-center">
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                      </div>
                      <p className="font-bold py-4">
                        “Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed do eiusmod lorem ipsum
                        dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod”
                      </p>
                      <p className="text-sm">John Dee 32, Bromo</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </ul>
        </div>

        <div className="flex justify-center items-center">
          <button className="m-2" onClick={props.handleOnPrevClick}>
            <ArrowCircleLeftIcon />
          </button>
          <button className="m-2" onClick={props.handleOnNextClick}>
            <ArrowCircleRightIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimony;
