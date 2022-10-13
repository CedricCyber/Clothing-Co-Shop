export default function Grid() {
  return (
    <div className=" grid grid-cols-2 md:grid-cols-4 grid-rows-3 gap-5 md:gap-10 mx-5 md:mx-10 lg:mx-16 font-varela text-white font-bold pb-20">
      <div className=" bg-image1 bg-cover rounded-3xl cursor-pointer md:col-span-2 md:row-span-2 duration-700 opacity-90 hover:opacity-100 hover:m-3">
        <p className="mt-5 ml-2 py-1 w-20 text-center rounded-2xl bg-black">
          30$
        </p>
      </div>
      <div className=" bg-image2 bg-cover rounded-3xl md:col-span-2 cursor-pointer duration-700 opacity-90 hover:opacity-100 hover:m-3 ">
        <p className="mt-5 ml-2 py-1 w-20 text-center rounded-2xl bg-black ">
          30$
        </p>
      </div>
      <div className="relative">
        <img
          className=" rounded-3xl opacity-90 hover:opacity-100 duration-700 cursor-pointer "
          src="./images/tl-m-blk.jpg"
        ></img>
        <p className="absolute top-5 left-3 py-1 px-2   bg-black rounded-2xl text-white">
          SOLD OUT
        </p>
      </div>
      <div className=" bg-image4 bg-cover rounded-3xl cursor-pointer duration-700 opacity-90 hover:opacity-100 hover:m-3">
        <p className="mt-5 ml-2 py-1 w-20 text-center rounded-2xl z-10 bg-black">
          30$
        </p>
      </div>
      <div className=" bg-image2 bg-cover rounded-3xl cursor-pointer duration-700 opacity-90 hover:opacity-100  md:col-span-2 hover:m-3">
        <p className=" mt-5 ml-2 py-1 w-20 text-center rounded-2xl bg-black">
          30$
        </p>
      </div>
      <div className=" bg-image6 bg-cover rounded-3xl cursor-pointer duration-700 opacity-90 hover:opacity-100  md:col-span-2 md:row-span-2 hover:m-3">
        <p className=" mt-5 ml-2 py-1 w-20 text-center rounded-2xl bg-black">
          30$
        </p>
      </div>
      <div className="relative  ">
        <img
          className=" rounded-3xl cursor-pointer duration-700 opacity-90 hover:opacity-100"
          src="./images/tl-m-blk.jpg"
        ></img>
        <p className="absolute top-5 left-3 py-1 px-2   bg-black rounded-2xl text-white">
          SOLD OUT
        </p>
      </div>
      <div className=" bg-image8 bg-cover rounded-3xl cursor-pointer duration-700 opacity-90 hover:opacity-100 hover:m-3">
        <p className=" mt-5 ml-2 py-1 w-20 text-center rounded-2xl bg-black">
          30$
        </p>
      </div>
    </div>
  );
}
