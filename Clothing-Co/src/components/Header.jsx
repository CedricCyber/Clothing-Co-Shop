import { Link } from "react-router-dom";
import App from "../App";

export default function Header(props) {
  return (
    <div className=" w-11/12  flex lg:justify-around items-center lg:flex-row flex-col">
      <Link to={App}>
        <div className="flex py-6 mx-0 lg:mx-28">
          <img
            className="w-32 cursor-pointer"
            id="logo"
            src="./images/humanslogo.png"
          />
          <p className="font-pasifico text-6xl drop-shadow-xl text-white flex items-center cursor-pointer">
            Clothing Co.
          </p>
        </div>
      </Link>
      {props.windowSize < 1150 && (
        <div className="flex justify-center ml-14 md:ml-0 mb-14 md:mb-0">
          <div>
            <div className="dropdown relative">
              <a
                className="
         dropdown-toggle
         py-5 
         px-10 
         bg-blue-400
         text-white
         font-medium
         text-xs
         leading-tight
         uppercase
         rounded-full
         shadow-lg
         hover:bg-blue-300
         transition
         duration-400
         ease-in-out
         flex
         items-center
         whitespace-nowrap
       "
                href="#"
                type="button"
                id="dropdownMenuButton2"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Menu
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="caret-down"
                  className="w-2 ml-2"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                >
                  <path
                    fill="currentColor"
                    d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                  ></path>
                </svg>
              </a>
              <ul
                className="
         dropdown-menu
         min-w-max
         absolute
         bg-blue-400
         text-base
         z-50
         float-left
         py-2
         list-none
         text-left
         rounded-xl
         shadow-lg
         hidden
         m-0
         bg-clip-padding
         border-none

       "
                aria-labelledby="dropdownMenuButton2"
              >
                <li>
                  <a
                    className="
             dropdown-item
             text-sm
             py-2
             px-4
             font-normal
             block
             w-full
             whitespace-nowrap
             bg-transparent
             text-white
             hover:bg-blue-300
           "
                    href="#"
                  >
                    Womans Clothes
                  </a>
                </li>
                <li>
                  <a
                    className="
             dropdown-item
             text-sm
             py-2
             px-4
             font-normal
             block
             w-full
             whitespace-nowrap
             bg-transparent
             text-white
             hover:bg-blue-300
           "
                    href="#"
                  >
                    Mens Clothes
                  </a>
                </li>
                <li>
                  <a
                    className="
             dropdown-item
             text-sm
             py-2
             px-4
             font-normal
             block
             w-full
             whitespace-nowrap
             bg-transparent
             text-white
             hover:bg-blue-300
           "
                    href="#"
                  >
                    Shopping Cart
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {props.windowSize >= 1150 && (
        <div className="flex items-center justify-around text-white">
          <Link to="WomansStyle">
            <button className="bg-blue-400 drop-shadow-lg  transition duration-500 hover:bg-blue-300 py-2 px-10 rounded-full ">
              <span>Womans</span>
              <br></br>
              <span>Style</span>
            </button>
          </Link>
          <Link to="MensStyle">
            <button className="mx-20 bg-blue-400 drop-shadow-lg transition duration-500 hover:bg-blue-300 py-2 px-12 rounded-full ">
              <span>Mens</span>
              <br></br>
              <span>Style</span>
            </button>
          </Link>
          <Link to="ShoppingCart">
            <button className="bg-blue-400 drop-shadow-lg transition duration-500 hover:bg-blue-300 py-2 px-10 rounded-full flex justify-center items-center">
              <div>
                <span>Shopping</span>
                <br></br>
                <span>Bag</span>
              </div>
              <img className=" ml-4 w-6" src="./images/whitebag.png" />
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}
