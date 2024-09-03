import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bottom-0 left-0 right-0">
      <div>
        <div className="bg-[#2e2e2e] h-20">
          <Image
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
