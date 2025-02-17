import { Link } from "react-router-dom";

export const Button = ({
  to,
  path
}) => {
  return (
    
    <Link to = {to}>
      <svg className=" h-7 w-7 text-gray-800 dark:text-blue-700 border border-blue-700 rounded-md  hover:dark:text-blue-900 hover:border-blue-900 bg-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
        <path d={path} fillRule="evenodd" clipRule="evenodd"/>
      </svg>
    </Link>
    
  )
}


