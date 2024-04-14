import Image from "next/image";

export default function ThumbCardRel(props) {
  const slugify = (text) => {
    return text.toString().toLowerCase()
      .replace(/\s+/g, '-')           // Replace spaces with -
      .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
      .replace(/\-\-+/g, '-')         // Replace multiple - with single -
      .replace(/^-+/, '')             // Trim - from start of text
      .replace(/-+$/, '');            // Trim - from end of text
  };
  const slug = slugify(props.video.img_desc);
  return (
    <div>
      <a href={`/christian-songs/${slug}/${props.video.id}`} className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 ">
        <Image
          src={`https://i.ytimg.com/vi/${props.video.video}/hqdefault.jpg`}
          alt={props.video.img_desc}
          className="object-cover w-full rounded-t-lg h-48 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
          width={200}
          height={200}
          priority
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-md font-bold tracking-tight text-gray-900 "><a href={`/christian-songs/${slug}/${props.video.id}`}>{props.video.img_desc}</a></h5>
        </div>
      </a>
    </div>
  )
}
