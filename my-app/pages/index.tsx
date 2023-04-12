import { useEffect, useState } from "react";
import jwt from 'jsonwebtoken'
import Link from 'next/link'
import { useRouter } from "next/router";
import Image from "next/image";
import dynamic from "next/dynamic";

const DynamicH1 = dynamic(() => import('./DynamicH1'),{
  ssr: false,
  loading: () =><h1>...loading</h1>
})
import H1 from './DynamicH1'
export function getServerSideProps(context){
  console.log('check', process.env.SPECIFICITY_CHECK)
  console.log(context)

  // context.res.statusCode = 418
  // context.res.write(JSON.stringify({ something: 'cool '}))
  // context.res.end()

  // return {
  //   redirect: {
  //     destination: 'https://dhritibaruah.in',
  //     permanent: false
  //   }
  // }
  return{
    props: {"Hello": "word"}
  }
}

export default function Home() {
  console.log(
    'env value = ',
    process.env.SECRET_VARIABLE,
    process.env.NEXT_PUBLIC_MY_FIRST_BROWSERVARIABLE //if it is prefixed by NEXT_ it will available in the browser
  )
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const [message, setMessage] = useState<string>('U r not logged in')
  const [secret, setSecret] = useState<string>('')


  async function submitForm(){
    const res = await fetch('api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({username, password})
    }).then((t) => t.json())

    const token = res.token

    if(token){
      const json = jwt.decode(token) as { [key: string]: string }
      setMessage(`Welcome ${json.username} and you are ${json.admin ? 'an admin!': 'not an admin!'}`)

      const res = await fetch('api/secret', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ token })
      }).then((t) => t.json())

      if(res.secretAdminCode){
        setSecret(res.secretAdminCode)
      }else{
        setMessage('Nothing available')
      }

    }else{
      setMessage('Something went wrong')
    }
  }
  return(
    <div>
      <h1>{message}</h1>
      <h1>Secret: {secret}</h1>
      <form>
        <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
        <br />
        <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        <br />
        <input type="submit" value ="login" onClick={submitForm}/>
      </form>
      <p>
      <Link href="/myPage">
        <a>Link componenet</a>
      </Link>
      </p>
      <p>
      <Link href="/page1/nestedpage">
        <a>Nested Routes</a>
      </Link>
      </p>
      <p>
      <Link href="/page1/">
        <a>Index Nested Routes</a>
      </Link>
      </p>
      <Image src="/GANAPATI.jpg" alt="" width={1280} height={720} />
    </div>
  )
}

