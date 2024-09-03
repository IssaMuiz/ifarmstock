import Image from "next/image";

const Footer = () => {
  return (
    <footer className="text">
      <div>
        <div className="bg-[#2e2e2e] flex gap-4 h-20">
          <div className="flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="42"
              height="42"
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
            <p>WHATSAPP</p>
          </div>
          <div>
            <p>EMAIL US</p>
          </div>
        </div>
      </div>
      <div className="bg-[#0c0c0c] h-96 "></div>
    </footer>
  );
};

export default Footer;
