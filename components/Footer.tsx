import Image from "next/image";
import Link from "next/link";

const Footer = () => (
  <section className="flexStart footer">
      <div className="flex flex-col gap-12 w-full">
          <div className="flex items-start flex-col">
              <Image src="/logo-purple.svg" width={116} height={38} alt="logo" />

              <p className="text-start text-sm font-normal mt-5 max-w-xs">
                  Flexibble is the world&apos;s leading community for creatives to share, grow, and get hired.
              </p>
          </div>
         
      </div>

      
  </section>
  );

  export default Footer;
