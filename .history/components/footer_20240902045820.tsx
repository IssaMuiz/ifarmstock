import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bottom-0 left-0 right-0">
      <div>
        <div className="bg-[#2e2e2e] h-20">
          <div>
            <svg
              fill="#FFFFFF"
              version="1.1"
              baseProfile="basic"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 30 30"
              xml:space="preserve"
            >
              <g id="Layer_10"></g>
              <g id="win10"></g>
              <g id="ssm"></g>
              <g id="mat_2"></g>
              <g id="ios"></g>
              <g id="fluent">
                <path
                  d="M26.37,26l-8.795-12.822l0.015,0.012L25.52,4h-2.65l-6.46,7.48L11.28,4H4.33l8.211,11.971L12.54,15.97L3.88,26h2.65
		l7.182-8.322L19.42,26H26.37z M10.23,6l12.34,18h-2.1L8.12,6H10.23z"
                />
              </g>
            </svg>
          </div>
          <Image
            className="fill-yellow-400"
            src="/assets/icons/icons8-instagram.svg"
            alt=""
            width={20}
            height={20}
          />
          <p>Email Support</p>
        </div>
      </div>
      <div className="bg-[#0c0c0c] h-96 "></div>
    </footer>
  );
};

export default Footer;
