import Link from 'next/link'

const Back = ({ link }) => {
   return (
      <div>
         <Link href={link}>
            <button>Back</button>
         </Link>
      </div>
   )
}

export default Back;