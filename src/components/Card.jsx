
import { Link as Anchor } from "react-router-dom"


export default function Card({src, alt, text, id}) {
  return (
    <Anchor to={'/city/' + id}  className='w-2/5 flex flex-col items-center p-2 n-2 space-x-1 rounded-sm border-gray-700'>
      <img src={src} alt={alt} />
      <p>{text} </p>
    </Anchor>
  );
}
