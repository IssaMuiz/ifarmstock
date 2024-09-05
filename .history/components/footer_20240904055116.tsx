import Link from "next/link";

const Footer = () => {
  return (
    <footer className="h-auto">
      <div className=" mobile:hidden tablet:flex flex-col text w-full">
        <div className=" bg-[#2e2e2e] flex justify-between gap-4 h-20 items-center px-5 w-full">
          <div className="flex gap-3 items-center cursor-pointer hover:text-[#8a8888] font-semibold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 42 42"
            >
              <g id="PhoneIcon" transform="translate(-1235 -471)">
                <circle
                  id="Ellipse_9"
                  data-name="Ellipse 9"
                  cx="21"
                  cy="21"
                  r="21"
                  transform="translate(1235 471)"
                  fill="#f6f7f8"
                />
                <path
                  id="call_FILL0_wght300_GRAD0_opsz24"
                  d="M158.754-800a15.86,15.86,0,0,1-6.682-1.546,21.268,21.268,0,0,1-6.167-4.363,21.421,21.421,0,0,1-4.357-6.167A15.823,15.823,0,0,1,140-818.752a1.214,1.214,0,0,1,.353-.89,1.192,1.192,0,0,1,.882-.356h3.837a1.175,1.175,0,0,1,.786.291,1.279,1.279,0,0,1,.433.718l.674,3.462a1.978,1.978,0,0,1-.029.828,1.231,1.231,0,0,1-.357.581l-2.717,2.645a16.322,16.322,0,0,0,1.5,2.273,22.419,22.419,0,0,0,1.825,2.046,20.311,20.311,0,0,0,2.059,1.8,20.68,20.68,0,0,0,2.355,1.545l2.64-2.663a1.494,1.494,0,0,1,.669-.4,1.922,1.922,0,0,1,.816-.057l3.267.665a1.382,1.382,0,0,1,.727.455,1.16,1.16,0,0,1,.282.765v3.814a1.191,1.191,0,0,1-.356.882A1.214,1.214,0,0,1,158.754-800Zm-15.726-13.145,2.1-2.009a.21.21,0,0,0,.074-.124.275.275,0,0,0-.006-.147l-.511-2.629a.242.242,0,0,0-.079-.136.228.228,0,0,0-.147-.045h-2.516a.154.154,0,0,0-.113.045.153.153,0,0,0-.045.113,15.049,15.049,0,0,0,.395,2.45A14.978,14.978,0,0,0,143.028-813.144Zm10.235,10.167a12.1,12.1,0,0,0,2.44.834,13.842,13.842,0,0,0,2.374.343.153.153,0,0,0,.113-.045.153.153,0,0,0,.045-.113v-2.475a.228.228,0,0,0-.045-.147.242.242,0,0,0-.136-.079l-2.471-.5a.186.186,0,0,0-.119-.006.289.289,0,0,0-.107.074ZM143.028-813.144ZM153.263-802.976Z"
                  transform="translate(1105.999 1301.999)"
                  fill="#072635"
                />
              </g>
            </svg>
            <div>
              <p>PHONE CALL</p>
              <p>09017522651</p>
            </div>
          </div>
          <div>
            <div className="flex gap-3 items-center cursor-pointer hover:text-[#8a8888] font-semibold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
                width="30"
                height="30"
                className="fill-white"
              >
                <path d="M25,2C12.318,2,2,12.318,2,25c0,3.96,1.023,7.854,2.963,11.29L2.037,46.73c-0.096,0.343-0.003,0.711,0.245,0.966 C2.473,47.893,2.733,48,3,48c0.08,0,0.161-0.01,0.24-0.029l10.896-2.699C17.463,47.058,21.21,48,25,48c12.682,0,23-10.318,23-23 S37.682,2,25,2z M36.57,33.116c-0.492,1.362-2.852,2.605-3.986,2.772c-1.018,0.149-2.306,0.213-3.72-0.231 c-0.857-0.27-1.957-0.628-3.366-1.229c-5.923-2.526-9.791-8.415-10.087-8.804C15.116,25.235,13,22.463,13,19.594 s1.525-4.28,2.067-4.864c0.542-0.584,1.181-0.73,1.575-0.73s0.787,0.005,1.132,0.021c0.363,0.018,0.85-0.137,1.329,1.001 c0.492,1.168,1.673,4.037,1.819,4.33c0.148,0.292,0.246,0.633,0.05,1.022c-0.196,0.389-0.294,0.632-0.59,0.973 s-0.62,0.76-0.886,1.022c-0.296,0.291-0.603,0.606-0.259,1.19c0.344,0.584,1.529,2.493,3.285,4.039 c2.255,1.986,4.158,2.602,4.748,2.894c0.59,0.292,0.935,0.243,1.279-0.146c0.344-0.39,1.476-1.703,1.869-2.286 s0.787-0.487,1.329-0.292c0.542,0.194,3.445,1.604,4.035,1.896c0.59,0.292,0.984,0.438,1.132,0.681 C37.062,30.587,37.062,31.755,36.57,33.116z" />
              </svg>
              <div>
                <p>WHATSAPP</p>
                <p>09099196305</p>
              </div>
            </div>
          </div>
          <div className="flex gap-3 items-center cursor-pointer hover:text-[#8a8888] font-semibold">
            <svg
              className="fill-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 128 96"
              id="email"
              height="25"
              width="25"
            >
              <g>
                <path d="M0 11.283V8a8 8 0 0 1 8-8h112a8 8 0 0 1 8 8v3.283l-64 40zm66.12 48.11a4.004 4.004 0 0 1-4.24 0L0 20.717V88a8 8 0 0 0 8 8h112a8 8 0 0 0 8-8V20.717z"></path>
              </g>
            </svg>
            <div>
              <p>EMAIL US</p>
              <p>muizbabatunde@gmail.com</p>
            </div>
          </div>
          <div>
            <p>Subscribe to our newsletter here</p>
            <div className="flex items-center gap-1">
              <input
                className="p-2 rounded-sm text-black outline-none"
                type="text"
                placeholder="Email address"
              />
              <button
                type="submit"
                className="bgColor p-2 hover:bg-[#015722] font-semibold rounded-sm
            "
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="bg-[#0c0c0c] h-80 p-4 flex items-start gap-10 w-full">
          <div className="flex flex-col gap-5">
            <h2 className="text-sm text-[#8a8888]">ABOUT US</h2>
            <div className="text-xs flex flex-col gap-2">
              <Link className="hover:underline" href="/">
                About us
              </Link>
              <Link className="hover:underline" href="/">
                Contact us
              </Link>
              <Link className="hover:underline" href="/">
                Blog
              </Link>
              <Link className="hover:underline" href="/">
                Career
              </Link>
              <Link className="hover:underline" href="/">
                Forum
              </Link>
              <Link className="hover:underline" href="/">
                Terms and Conditions
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <h2 className="text-sm text-[#8a8888]">PAYMENT METHOD</h2>
            <div className="text-xs flex flex-col gap-2">
              <Link className="hover:underline" href="/">
                Mastercard
              </Link>
              <Link className="hover:underline" href="/">
                Verve
              </Link>
              <Link className="hover:underline" href="/">
                Visa
              </Link>
              <Link className="hover:underline" href="/">
                Wallet
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <h2 className="text-sm text-[#8a8888]">SERVICES</h2>
            <div className="text-xs flex flex-col gap-2">
              <Link className="hover:underline" href="/">
                Poultry health
              </Link>
              <Link className="hover:underline" href="/">
                Water maintainance
              </Link>
              <Link className="hover:underline" href="/">
                Bio security
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <h2 className="text-sm text-[#8a8888]">OTHER LINKS</h2>
            <div className="text-xs flex flex-col gap-2">
              <Link className="hover:underline" href="/">
                FAQ
              </Link>
              <Link className="hover:underline" href="/">
                Complaint
              </Link>
              <Link className="hover:underline" href="/">
                Delivery
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <h2 className="text-sm text-[#8a8888]">MAKE MONEY WITH US</h2>
            <div className="text-xs flex flex-col gap-2">
              <Link className="hover:underline" href="/">
                Become a sales consultant
              </Link>
              <Link className="hover:underline" href="/">
                Join our farm consultant team
              </Link>
            </div>
          </div>
          <div>
            <div className="flex gap-2">
              <div className="bg-black rounded-sm flex items-center p-2 w-40 gap-2 cursor-pointer">
                <svg
                  fill="#FFFFFF"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 64 64"
                  xmlSpace="preserve"
                  height="30px"
                  width="30px"
                >
                  <path d="M54.166,19.783c-0.258,0.162-6.401,3.571-6.401,11.13c0.29,8.621,7.752,11.644,7.88,11.644 c-0.128,0.162-1.127,4.119-4.085,8.267C49.213,54.398,46.607,58,42.65,58c-3.764,0-5.115-2.381-9.458-2.381 c-4.664,0-5.984,2.381-9.555,2.381c-3.957,0-6.756-3.795-9.232-7.335c-3.216-4.633-5.95-11.903-6.047-18.883 c-0.065-3.699,0.644-7.335,2.444-10.423c2.541-4.312,7.077-7.238,12.031-7.335c3.795-0.128,7.173,2.606,9.49,2.606 c2.22,0,6.37-2.606,11.065-2.606C45.415,14.026,50.82,14.636,54.166,19.783z M32.002,13.285c-0.676-3.378,1.19-6.756,2.927-8.911 C37.149,1.769,40.655,0,43.678,0c0.193,3.378-1.03,6.691-3.216,9.104C38.5,11.71,35.122,13.671,32.002,13.285z" />
                </svg>
                <div>
                  <p>Download on</p>
                  <p>App Store</p>
                </div>
              </div>
              <div className="bg-black rounded-sm flex items-center p-2 w-40 gap-2 cursor-pointer">
                <svg
                  fill="#FFFFFF"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 50 50"
                  width="28px"
                  height="28px"
                >
                  <path d="M30.718,6.156c-0.192,0-0.387-0.055-0.559-0.171c-0.458-0.309-0.578-0.931-0.27-1.389l2.805-4.156c0.31-0.458,0.93-0.579,1.389-0.27c0.458,0.309,0.578,0.931,0.27,1.389l-2.805,4.156C31.354,6.002,31.039,6.156,30.718,6.156z" />
                  <path d="M19.282,6.156c-0.321,0-0.637-0.154-0.83-0.441l-2.804-4.156c-0.309-0.458-0.188-1.079,0.27-1.388c0.458-0.31,1.08-0.188,1.388,0.27l2.804,4.156c0.309,0.458,0.188,1.079-0.27,1.388C19.669,6.101,19.475,6.156,19.282,6.156z" />
                  <path d="M25,3c-6.724,0-12.492,4.244-13.816,10h27.633C37.492,7.244,31.724,3,25,3z M19.503,11C18.67,11,18,10.33,18,9.498C18,8.67,18.67,8,19.503,8C20.33,8,21,8.67,21,9.498C21,10.33,20.33,11,19.503,11z M30.497,11C29.67,11,29,10.33,29,9.498C29,8.67,29.67,8,30.497,8C31.33,8,32,8.67,32,9.498C32,10.33,31.33,11,30.497,11z" />
                  <path d="M11,15v22c0,1.654,1.346,3,3,3h22c1.654,0,3-1.346,3-3V15H11z" />
                  <path d="M15,42v4c0,2.206,1.794,4,4,4s4-1.794,4-4v-4H15z" />
                  <path d="M27,42v4c0,2.206,1.794,4,4,4s4-1.794,4-4v-4H27z" />
                  <path d="M42,15c-0.353,0-0.686,0.072-1,0.184v19.633C41.314,34.928,41.647,35,42,35c1.657,0,3-1.343,3-3c0-0.432,0-13.569,0-14C45,16.343,43.657,15,42,15z" />
                  <path d="M9,15.184C8.686,15.072,8.353,15,8,15c-1.657,0-3,1.343-3,3c0,0.431,0,13.568,0,14c0,1.657,1.343,3,3,3c0.353,0,0.686-0.072,1-0.184V15.184z" />
                </svg>
                <div>
                  <p>Download on</p>
                  <p>Play Store</p>
                </div>
              </div>
            </div>
            <div className="mt-10">
              <p>JOIN US</p>
              <div className="flex gap-3">
                <svg
                  className="hover:fill-green-600 cursor-pointer"
                  fill="#FFFFFF"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 50 50"
                  width="30px"
                  height="30px"
                >
                  <g>
                    <path d="M44.9,14.5c-0.4-2.2-2.3-3.8-4.5-4.3C37.1,9.5,31,9,24.4,9c-6.6,0-12.8,0.5-16.1,1.2c-2.2,0.5-4.1,2-4.5,4.3C3.4,17,3,20.5,3,25s0.4,8,0.9,10.5c0.4,2.2,2.3,3.8,4.5,4.3c3.5,0.7,9.5,1.2,16.1,1.2s12.6-0.5,16.1-1.2c2.2-0.5,4.1-2,4.5-4.3c0.4-2.5,0.9-6.1,1-10.5C45.9,20.5,45.4,17,44.9,14.5z M19,32V18l12.2,7L19,32z" />
                  </g>
                </svg>

                <svg
                  className="hover:fill-green-600 cursor-pointer"
                  fill="#FFFFFF"
                  version="1.1"
                  baseProfile="basic"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 30 30"
                  xmlSpace="preserve"
                  width="30px"
                  height="30px"
                >
                  <g id="Layer_10"></g>
                  <g id="win10"></g>
                  <g id="ssm"></g>
                  <g id="mat_2"></g>
                  <g id="ios"></g>
                  <g id="fluent">
                    <path d="M26.37,26l-8.795-12.822l0.015,0.012L25.52,4h-2.65l-6.46,7.48L11.28,4H4.33l8.211,11.971L12.54,15.97L3.88,26h2.65l7.182-8.322L19.42,26H26.37z M10.23,6l12.34,18h-2.1L8.12,6H10.23z" />
                  </g>
                </svg>

                <svg
                  className="fill-white hover:fill-green-600 cursor-pointer"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 100 100"
                  xmlSpace="preserve"
                  width="30px"
                  height="30px"
                >
                  <path d="M55,33c0-4.418,3.582-8,8-8s7,0,7,0V14c0,0-5-1-11-1c-9.941,0-18,8.059-18,18v9H30v14h11v33h14V54h13l2-14H55C55,40,55,33.718,55,33z" />
                  <path d="M45.5,53.5v29 M65.5,17.884C63.725,17.682,61.444,17.5,59,17.5c-7.444,0-13.5,6.056-13.5,13.5v0.5" />
                  <line x1="45.5" y1="40.5" x2="45.5" y2="39.5" />
                  <line x1="45.5" y1="37.5" x2="45.5" y2="34.5" />
                </svg>

                <svg
                  className="hover:fill-green-600 cursor-pointer"
                  fill="#FFFFFF"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 64 64"
                  xmlSpace="preserve"
                  width="30px"
                  height="30px"
                >
                  <path d="M32,23c-4.971,0-9,4.029-9,9s4.029,9,9,9s9-4.029,9-9S36.971,23,32,23z" />
                  <path d="M42.415,7H21.581C13.542,7,7,13.544,7,21.585v20.833C7,50.458,13.544,57,21.585,57h20.833C50.458,57,57,50.456,57,42.415V21.581C57,13.542,50.456,7,42.415,7z M32,45c-7.17,0-13-5.831-13-13s5.83-13,13-13s13,5.83,13,13S39.169,45,32,45z M47,19c-1.104,0-2-0.896-2-2s0.896-2,2-2s2,0.896,2,2S48.104,19,47,19z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mobile:flex tablet:hidden w-full text h-40 flex-col">
        <div className="bg-[#2e2e2e] h-10 text-center">
          <p className="pt-2">BACK TO TOP</p>
        </div>
        <div className="h-32 flex flex-col items-center gap-2 bg-[#0c0c0c] p-4 text-[12px]">
          <div className="flex gap-2">
            <Link className="active:underline" href="/">
              HELP CENTER
            </Link>
            <Link className="active:underline" href="/">
              CONTACT US
            </Link>
            <Link className="active:underline" href="/">
              LODGE A COMPLAIN
            </Link>
          </div>
          <div className="flex gap-2">
            <Link className="active:underline" href="/">
              JOIN OUR TEAM
            </Link>
            <Link className="active:underline" href="/">
              TERMS AND CONDITION
            </Link>
            <Link className="active:underline" href="/">
              PRIVATE NOTICE
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
