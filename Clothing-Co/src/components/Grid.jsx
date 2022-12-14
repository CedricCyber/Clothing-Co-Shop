export default function Grid(props) {
  return (
    <div className=" grid grid-cols-2 md:grid-cols-4 grid-rows-3 gap-5 md:gap-10 mx-5 md:mx-10 lg:mx-16 font-varela text-white font-bold pb-20">
      <div className=" bg-wImage7 bg-cover rounded-3xl cursor-pointer md:col-span-2 md:row-span-2 duration-700 opacity-90 hover:opacity-100 hover:m-3">
        <div className="flex justify-between mx-2">
          <p
            id={35}
            className="mt-5 mb-2 ml-2 py-1 w-20 text-center rounded-2xl bg-black"
          >
            35$
          </p>
          <img
            className="w-10 mr-2 mt-5 active:animate-ping"
            id="bg-wImage7 bg-cover w-48 h-72 rounded-2xl cursor-pointer"
            onClick={props.addToCart}
            src="./images/whitebag.png"
          />
        </div>
      </div>
      <div className=" bg-mImage4 bg-cover rounded-3xl md:col-span-2 cursor-pointer duration-700 opacity-90 hover:opacity-100 hover:m-3 ">
        <div className="flex justify-between mx-2">
          <p
            id={20}
            className="mt-5 mb-2 ml-2 py-1 w-20 text-center rounded-2xl bg-black "
          >
            20$
          </p>
          <img
            id="bg-mImage4 bg-cover w-48 h-72 rounded-2xl cursor-pointer"
            onClick={props.addToCart}
            className="w-10 mr-2 mt-5 active:animate-ping"
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
      <div className=" bg-wImage9 bg-cover rounded-3xl cursor-pointer duration-700 opacity-90 hover:opacity-100 hover:m-3">
        <div className="flex justify-between mx-2">
          <p
            id={30}
            className="mt-5 mb-2 ml-2 py-1 w-20 text-center rounded-2xl z-10 bg-black"
          >
            30$
          </p>
          <img
            id="bg-wImage9 bg-cover w-48 h-72 rounded-2xl cursor-pointer"
            onClick={props.addToCart}
            className="w-10 mr-2 mt-5 active:animate-ping"
            src="./images/whitebag.png"
          />
        </div>
      </div>
      <div className=" bg-mImage3 bg-cover rounded-3xl cursor-pointer duration-700 opacity-90 hover:opacity-100  md:col-span-2 hover:m-3">
        <div className="flex justify-between mx-2">
          <p
            id={75}
            className=" mt-5 mb-2 ml-2 py-1 w-20 text-center rounded-2xl bg-black"
          >
            75$
          </p>
          <img
            id="bg-mImage3 bg-cover w-48 h-72 rounded-2xl cursor-pointer"
            onClick={props.addToCart}
            className="w-10 mr-2 mt-5 active:animate-ping"
            src="./images/whitebag.png"
          />
        </div>
      </div>
      <div className=" bg-wImage4 bg-cover rounded-3xl cursor-pointer duration-700 opacity-90 hover:opacity-100  md:col-span-2 md:row-span-2 hover:m-3">
        <div className="flex justify-between mx-2">
          <p
            id={120}
            className=" mt-5 mb-2 ml-2 py-1 w-20 text-center rounded-2xl bg-black"
          >
            120$
          </p>
          <img
            id="bg-wImage4 bg-cover w-48 h-72 rounded-2xl cursor-pointer"
            onClick={props.addToCart}
            className="w-10 mr-2 mt-5 active:animate-ping"
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
      <div className=" bg-mImage6 bg-cover rounded-3xl cursor-pointer duration-700 opacity-90 hover:opacity-100 hover:m-3">
        <div className="flex justify-between mx-2">
          <p
            id={45}
            className=" mt-5 mb-2 ml-2 py-1 w-20 text-center rounded-2xl bg-black"
          >
            45$
          </p>
          <img
            id="bg-mImage6 bg-cover w-48 h-72 rounded-2xl cursor-pointer"
            onClick={props.addToCart}
            className="w-10 mr-2 mt-5 active:animate-ping"
            src="./images/whitebag.png"
          />
        </div>
      </div>
    </div>
  );
}
