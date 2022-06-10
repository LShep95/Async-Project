import Image from "next/image";
import HeaderItem from "./HeaderItem";
import {
  HomeIcon,
  CollectionIcon,
  HeartIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";

function Header() {
  return (
    <header className="flex flex-col sm:flex-row justify-between items-center h-auto">
      <div className="flex flex-grow justify-evenly max-w-2xl m-4">
        <HeaderItem title="HOME" Icon={HomeIcon} />
        <HeaderItem title="POPULAR" Icon={LightningBoltIcon} />
        <HeaderItem title="FAVORITES" Icon={HeartIcon} />
        <HeaderItem title="COLLECTIONS" Icon={CollectionIcon} />
        <HeaderItem title="SEARCH" Icon={SearchIcon} />
        <HeaderItem title="ACCOUNT" Icon={UserIcon} />
      </div>
      <Image
        alt=""
        className="object-contain"
        // src="https://links.papareact.com/ua6"
        // src="https://logodix.com/logo/78933.jpg"
        src="https://freepngimg.com/thumb/netflix/97235-and-chill-netflix-free-download-png-hd.png"
        // src="https://flyclipart.com/chill-png-png-image-chill-png-623698"
        width={"200"}
        height={100}
      />
    </header>
  );
}
export default Header;
