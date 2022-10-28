export default function MensGrid(props) {
  return (
    <div className=" grid grid-cols-2 md:grid-cols-4 grid-rows-3 gap-5 md:gap-10 mx-5 md:mx-10 lg:mx-16 font-varela text-white font-bold pb-20 mt-20 md:mt-36 lg:mt-20">
      <div className=" bg-mImage8 bg-cover rounded-3xl cursor-pointer md:col-span-2 md:row-span-2 duration-700 opacity-90 hover:opacity-100 hover:m-3">
        <div className="flex justify-between">
          <p
            id={36}
            className="mt-5 mb-2 ml-2 py-1 w-20 text-center rounded-2xl bg-black"
          >
            36$
          </p>
          <img
            id="bg-mImage8 bg-cover w-48 h-72 rounded-2xl cursor-pointer"
            onClick={props.addToCart}
            className="w-10 mr-2 mt-5"
            src="./images/whitebag.png"
          />
        </div>
      </div>
      <div className=" bg-mImage5 bg-cover rounded-3xl cursor-pointer duration-700 opacity-90 hover:opacity-100 hover:m-3 ">
        <div className="flex justify-between">
          <p
            id={22}
            className="mt-5 mb-2 ml-2 py-1 w-20 text-center rounded-2xl bg-black "
          >
            22$
          </p>
          <img
            id="bg-mImage5 bg-cover w-48 h-72 rounded-2xl cursor-pointer"
            onClick={props.addToCart}
            className="w-10 mr-2 mt-5"
            src="./images/whitebag.png"
          />
        </div>
      </div>
      <div className=" bg-mImage7 bg-cover rounded-3xl cursor-pointer duration-700 opacity-90 hover:opacity-100 hover:m-3">
        <div className="flex justify-between">
          <p
            id={32}
            className="mt-5 mb-2 ml-2 py-1 w-20 text-center rounded-2xl z-10 bg-black"
          >
            32$
          </p>
          <img
            id="bg-mImage7 bg-cover w-48 h-72 rounded-2xl cursor-pointer"
            onClick={props.addToCart}
            className="w-10 mr-2 mt-5"
            src="./images/whitebag.png"
          />
        </div>
      </div>
      <div className="relative">
        <img
          className=" rounded-3xl opacity-90 hover:opacity-100 duration-700 cursor-pointer "
          src="./mensStyle/blackjacket.jpg"
        ></img>
        <p className="absolute top-5 left-3 py-1 px-2   bg-black rounded-2xl text-white">
          SOLD OUT
        </p>
      </div>
      <div className=" bg-mImage4 bg-cover rounded-3xl cursor-pointer duration-700 opacity-90 hover:opacity-100 hover:m-3">
        <div className="flex justify-between">
          <p
            id={38}
            className="mt-5 mb-2 ml-2 py-1 w-20 text-center rounded-2xl z-10 bg-black"
          >
            38$
          </p>
          <img
            id="bg-mImage4 bg-cover w-48 h-72 rounded-2xl cursor-pointer"
            onClick={props.addToCart}
            className="w-10 mr-2 mt-5"
            src="./images/whitebag.png"
          />
        </div>
      </div>
      <div className=" bg-mImage3 bg-cover rounded-3xl cursor-pointer duration-700 opacity-90 hover:opacity-100   hover:m-3">
        <div className="flex justify-between">
          <p
            id={74}
            className=" mt-5 mb-2 ml-2 py-1 w-20 text-center rounded-2xl bg-black"
          >
            74$
          </p>
          <img
            id="bg-mImage3 bg-cover w-48 h-72 rounded-2xl cursor-pointer"
            onClick={props.addToCart}
            className="w-10 mr-2 mt-5"
            src="./images/whitebag.png"
          />
        </div>
      </div>
      <div className="relative  ">
        <img
          className=" rounded-3xl cursor-pointer duration-700 opacity-90 hover:opacity-100"
          src="./mensStyle/browncoat.jpg"
        ></img>
        <p className="absolute top-5 left-3 py-1 px-2   bg-black rounded-2xl text-white">
          SOLD OUT
        </p>
      </div>
      <div className=" bg-mImage1 bg-cover rounded-3xl cursor-pointer duration-700 opacity-90 hover:opacity-100 hover:m-3">
        <div className="flex justify-between">
          <p
            id={122}
            className=" mt-5 mb-2 ml-2 py-1 w-20 text-center rounded-2xl bg-black"
          >
            122$
          </p>
          <img
            id="bg-mImage1 bg-cover w-48 h-72 rounded-2xl cursor-pointer"
            onClick={props.addToCart}
            className="w-10 mr-2 mt-5"
            src="./images/whitebag.png"
          />
        </div>
      </div>
      <div className=" bg-mImage6 bg-cover rounded-3xl cursor-pointer duration-700 opacity-90 hover:opacity-100 hover:m-3">
        <div className="flex justify-between">
          <p
            id={48}
            className=" mt-5 mb-2 ml-2 py-1 w-20 text-center rounded-2xl bg-black"
          >
            48$
          </p>
          <img
            id="bg-mImage6 bg-cover w-48 h-72 rounded-2xl cursor-pointer"
            onClick={props.addToCart}
            className="w-10 mr-2 mt-5"
            src="./images/whitebag.png"
          />
        </div>
      </div>
    </div>
  );
}
