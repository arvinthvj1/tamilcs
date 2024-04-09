import Image from "next/image";
 
export default function ThumbCard() {
  return (
    <div className="rounded-lg overflow-hidden shadow-[0_15px_55px_rgba(34,34,34,0.1)] bg-white group mb-[30px]">
        <a href="/christian-songs/tamil-christian-songs/1" className="block">
            <Image
                src="https://i.ytimg.com/vi/eTVpI2-FTC4/hqdefault.jpg"
                alt="Tamil Christian songs"
                className="dark:invert"
                width={480}
                height={200}
                priority
            />
        </a>
        <div className="content p-3 relative">
            <h2 className="text-md font-bold"><a href="#">Paradise Taste of Dishes</a></h2>
        </div>
    </div>
  )
}
