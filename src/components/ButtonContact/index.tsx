import Link from "next/link"

type ButtonContactProps = {
  secondary?: boolean,
  text: string,
  show?: boolean 
}
export function ButtonContact({secondary, text, show}:ButtonContactProps) {

  return (
   <Link
   href={'/contact'}
   className={`linkContact 
   ${secondary ? 
    'border border-white hover:bg-button-primary bg-none' : 
    'bg-bg-primary hover:bg-button-primary block self-start'} transition-all w-full sm:w-fit duration-300 text-white uppercase mt-4
    ${show && 'hover:bg-transparent bg-button-primary border border-transparent hover:border-white'}
    `}
   > 
   {text}
   </Link>
 )
}
