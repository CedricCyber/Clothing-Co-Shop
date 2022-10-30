export default function WomansGrid(props) {
  return (
    <div className=" grid grid-cols-2 md:grid-cols-4 grid-rows-3 gap-5 md:gap-10 mx-5 md:mx-10 lg:mx-16 font-varela text-white font-bold pb-20 mt-20 md:mt-36 lg:mt-20 ">
      <div className=" bg-wImage3 bg-cover rounded-3xl cursor-pointer md:col-span-2 md:row-span-2 duration-700 opacity-90 hover:opacity-100 hover:m-3">
        <div className="flex justify-between">
          <p
            id={33}
            className="mt-5 mb-2 ml-2 py-1 w-20 text-center rounded-2xl bg-black"
          >
            33$
          </p>
          <img
            id="bg-wImage3 bg-cover w-48 h-72 rounded-2xl cursor-pointer"
            onClick={props.addToCart}
            className="w-10 mr-2 mt-5"
            src="./images/whitebag.png"
          />
        </div>
      </div>
      <div className=" bg-wImage7 bg-cover rounded-3xl cursor-pointer duration-700 opacity-90 hover:opacity-100 hover:m-3 ">
        <div className="flex justify-between">
          <p
            id={21}
            className="mt-5 mb-2 ml-2 py-1 w-20 text-center rounded-2xl bg-black "
          >
            21$
          </p>
          <img
            id="bg-wImage7 bg-cover w-48 h-72 rounded-2xl cursor-pointer"
            onClick={props.addToCart}
            className="w-10 mr-2 mt-5"
            src="./images/whitebag.png"
          />
        </div>
      </div>
      <div className=" bg-wImage5 bg-cover rounded-3xl cursor-pointer duration-700 opacity-90 hover:opacity-100 hover:m-3">
        <div className="flex justify-between">
          <p
            id={37}
            className="mt-5 mb-2 ml-2 py-1 w-20 text-center rounded-2xl z-10 bg-black"
          >
            37$
          </p>
          <img
            id="bg-wImage5 bg-cover w-48 h-72 rounded-2xl cursor-pointer"
            onClick={props.addToCart}
            className="w-10 mr-2 mt-5"
            src="./images/whitebag.png"
          />
        </div>
      </div>
      <div className="relative">
        <img
          className=" rounded-3xl opacity-90 hover:opacity-100 duration-700 cursor-pointer "
          src="./images/blackoutfit.jpg"
        ></img>
        <p className="absolute top-5 left-3 py-1 px-2   bg-black rounded-2xl text-white">
          SOLD OUT
        </p>
      </div>
      <div className=" bg-wImage1 bg-cover rounded-3xl cursor-pointer duration-700 opacity-90 hover:opacity-100 hover:m-3">
        <div className="flex justify-between">
          <p
            id={39}
            className="mt-5 mb-2 ml-2 py-1 w-20 text-center rounded-2xl z-10 bg-black"
          >
            39$
          </p>
          <img
            id="bg-wImage1 bg-cover w-48 h-72 rounded-2xl cursor-pointer"
            onClick={props.addToCart}
            className="w-10 mr-2 mt-5"
            src="./images/whitebag.png"
          />
        </div>
      </div>
      <div className=" bg-wImage6 bg-cover rounded-3xl cursor-pointer duration-700 opacity-90 hover:opacity-100   hover:m-3">
        <div className="flex justify-between">
          <p
            id={73}
            className=" mt-5 mb-2 ml-2 py-1 w-20 text-center rounded-2xl bg-black"
          >
            73$
          </p>
          <img
            id="bg-wImage6 bg-cover w-48 h-72 rounded-2xl cursor-pointer"
            onClick={props.addToCart}
            className="w-10 mr-2 mt-5"
            src="./images/whitebag.png"
          />
        </div>
      </div>
      <div className="relative  ">
        <img
          className=" rounded-3xl cursor-pointer duration-700 opacity-90 hover:opacity-100"
          src="./images/stripedblazer.jpg"
        ></img>
        <p className="absolute top-5 left-3 py-1 px-2   bg-black rounded-2xl text-white">
          SOLD OUT
        </p>
      </div>
      <div className=" bg-wImage4 bg-cover rounded-3xl cursor-pointer duration-700 opacity-90 hover:opacity-100 hover:m-3">
        <div className="flex justify-between">
          <p
            id={127}
            className=" mt-5 mb-2 ml-2 py-1 w-20 text-center rounded-2xl bg-black"
          >
            127$
          </p>
          <img
            id="bg-wImage4 bg-cover w-48 h-72 rounded-2xl cursor-pointer"
            onClick={props.addToCart}
            className="w-10 mr-2 mt-5"
            src="./images/whitebag.png"
          />
        </div>
      </div>
      <div className=" bg-wImage8 bg-cover rounded-3xl cursor-pointer duration-700 opacity-90 hover:opacity-100 hover:m-3">
        <div className="flex justify-between">
          <p
            id={43}
            className=" mt-5 mb-2 ml-2 py-1 w-20 text-center rounded-2xl bg-black"
          >
            43$
          </p>
          <img
            id="bg-wImage8 bg-cover w-48 h-72 rounded-2xl cursor-pointer"
            onClick={props.addToCart}
            className="w-10 mr-2 mt-5"
            src="./images/whitebag.png"
          />
        </div>
      </div>
    </div>
  );
}
