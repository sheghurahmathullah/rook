import Link from "next/link";
import LogoWhite2 from "../../../public/assets/imgs/rook/Rook-Fellows-Domains-White.webp";
import LogoBlack from "../../../public/assets/imgs/rook/Rook-Fellows-Domains-Black.webp";
import Image from "next/image";

const logoSize = 40

export default function LogoItem1() {
  return (
    <>
      <div className="header__logo-2">
        <Link href={"/domains"} className="logo-dark">
          <Image
            priority
            // width={136}
            height={logoSize}
            src={LogoBlack}
            alt="Site Logo"
          />
        </Link>
        <Link href={"/domains"} className="logo-light">
          <Image
            priority
            // width={100}
            height={logoSize}
            src={LogoWhite2}
            alt="Site Logo"
          />
        </Link>
      </div>
    </>
  );
}
