import Image from "next/image";

import { footerLinks, socialMedia } from "../../../constants";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="max-container  bg-black padding-x padding-t pb-8 text-white">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <Link href="/" legacyBehavior>
            <Image
              src={"/confident.png"}
              alt="logo"
              width={170}
              height={49}
              className="m-0 h-32 rounded-full"
            />
          </Link>
          <p className="mt-6 text-base leading-7 font-montserrat text-white-400  sm:max-w-sm">
            Get shoes ready for the new term at your nearest store. Find Your
            perfect Size In Store. Get Rewards
          </p>
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((icon) => (
              <div
                className="flex justify-center items-center w-12 h-12 bg-white rounded-full"
                key={icon.alt}
              >
                <Image src={icon.src} alt={icon.alt} width={24} height={24} />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="font-montserrat text-2xl leading-normal font-medium mb-6 text-white ">
                {section.title}
              </h4>
              <ul>
                {section.links.map((link) => (
                  <li
                    className="mt-3 font-montserrat text-base leading-normal  hover:text-slate-gray"
                    key={link.name}
                  >
                    <Link href={link.link} legacyBehavior>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between  mt-24 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
          <Image
            src={"/copyrightsign.svg"}
            alt="copyright sign"
            width={20}
            height={20}
            className="rounded-full m-0"
          />
          <p>Copyright. All rights reserved.</p>
        </div>
        <p className="font-montserrat cursor-pointer">Terms & Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
