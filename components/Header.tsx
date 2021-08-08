import Image from "next/image";

export default function Header() {
  return (
    <header>
      <div className="container">
        <div className="inner">
          <Image
            src="/pattern_bg.jpg"
            layout="fill"
            objectFit="cover"
            alt=""
            className="header-bg"
          />

          <div className="profile-picture">
            <Image
              src="/subham.png"
              width={160}
              height={160}
              alt="Subham Bhattacharya"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
