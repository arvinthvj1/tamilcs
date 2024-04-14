import Image from "next/image";
 
export default function ThumbCard(props) {
  const slugify = (text) => {
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text
  };
  const firstRelatedData = props.video.related_data[0];
  const slug = slugify(props.video.title);
  return (
    <div className="rounded-lg overflow-hidden shadow-[0_15px_55px_rgba(34,34,34,0.1)] bg-white group mb-[30px]">
      <a href={`/christian-songs/${slug}/${props.video.id}`} className="block">
        <Image
            src={`https://i.ytimg.com/vi/${firstRelatedData.video}/hqdefault.jpg`}
            alt={props.video.title}
            className=""
            width={480}
            height={200}
            priority
        />
      </a>
      <div className="content p-3 relative">
        <h2 className="text-md font-bold capitalize"><a href={`/christian-songs/${slug}/${props.video.id}`}>{props.video.title}</a></h2>
      </div>
    </div>
  )
}
