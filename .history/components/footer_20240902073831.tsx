import Link from "next/link";

const Footer = () => {
  return (
    <footer className="text">
      <div className="bg-[#2e2e2e] flex justify-between gap-4 h-20 items-center px-5">
        <div className="flex gap-3 items-center">
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
          <div className="flex gap-3 items-center">
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
        <div className="flex gap-3 items-center">
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
          <p>Subscribe to our newsletter</p>
          <div className="flex items-center gap-1">
            <input
              className="p-2 rounded-sm"
              type="text"
              placeholder="Email address"
            />
            <button
              type="submit"
              className="bgColor p-2 font-semibold rounded-sm
            "
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="bg-[#0c0c0c] h-80 p-4 flex items-center gap-10">
        <div className="flex flex-col gap-5">
          <h2 className="text-xl text-[#8a8888]">ABOUT US</h2>
          <div className="text-base flex flex-col gap-2">
            <Link href="/">About us</Link>
            <Link href="/">Contact us</Link>
            <Link href="/">Blog</Link>
            <Link href="/">Career</Link>
            <Link href="/">Forum</Link>
            <Link href="/">Terms and Conditions</Link>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <h2 className="text-xl text-[#8a8888]">ABOUT US</h2>
          <div className="text-base flex flex-col gap-2">
            <Link href="/">About us</Link>
            <Link href="/">Contact us</Link>
            <Link href="/">Blog</Link>
            <Link href="/">Career</Link>
            <Link href="/">Forum</Link>
            <Link href="/">Terms and Conditions</Link>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <h2 className="text-xl text-[#8a8888]">ABOUT US</h2>
          <div className="text-base flex flex-col gap-2">
            <Link href="/">About us</Link>
            <Link href="/">Contact us</Link>
            <Link href="/">Blog</Link>
            <Link href="/">Career</Link>
            <Link href="/">Forum</Link>
            <Link href="/">Terms and Conditions</Link>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <h2 className="text-xl text-[#8a8888]">ABOUT US</h2>
          <div className="text-base flex flex-col gap-2">
            <Link href="/">About us</Link>
            <Link href="/">Contact us</Link>
            <Link href="/">Blog</Link>
            <Link href="/">Career</Link>
            <Link href="/">Forum</Link>
            <Link href="/">Terms and Conditions</Link>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <h2 className="text-xl text-[#8a8888]">ABOUT US</h2>
          <div className="text-base flex flex-col gap-2">
            <Link href="/">About us</Link>
            <Link href="/">Contact us</Link>
            <Link href="/">Blog</Link>
            <Link href="/">Career</Link>
            <Link href="/">Forum</Link>
            <Link href="/">Terms and Conditions</Link>
          </div>
        </div>
        <div>
          <div className="bg-black">
            <div>
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
              >
                <path d="M54.166,19.783c-0.258,0.162-6.401,3.571-6.401,11.13c0.29,8.621,7.752,11.644,7.88,11.644 c-0.128,0.162-1.127,4.119-4.085,8.267C49.213,54.398,46.607,58,42.65,58c-3.764,0-5.115-2.381-9.458-2.381 c-4.664,0-5.984,2.381-9.555,2.381c-3.957,0-6.756-3.795-9.232-7.335c-3.216-4.633-5.95-11.903-6.047-18.883 c-0.065-3.699,0.644-7.335,2.444-10.423c2.541-4.312,7.077-7.238,12.031-7.335c3.795-0.128,7.173,2.606,9.49,2.606 c2.22,0,6.37-2.606,11.065-2.606C45.415,14.026,50.82,14.636,54.166,19.783z M32.002,13.285c-0.676-3.378,1.19-6.756,2.927-8.911 C37.149,1.769,40.655,0,43.678,0c0.193,3.378-1.03,6.691-3.216,9.104C38.5,11.71,35.122,13.671,32.002,13.285z" />
              </svg>
              <p>Download on</p>
              <p>App Store</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
