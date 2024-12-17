import Link from "next/link"
export default async function Home (){
  const Url = await fetch("https://jsonplaceholder.typicode.com/todos")
  const Res = await Url.json()
  console.log(Res)
return (
  <main>
<h1 className="text-center text-7xl font-semibold text-orange-800">FIRST ALL DATA BELOW</h1>
<div>{JSON.stringify(Res)}</div>
<h1 className="text-center text-7xl font-semibold text-orange-800">NOW TODOS TITLE AND USERIDs BELOW</h1>
<h1 className="text-center text-4xl font-semibold text-orange-800">Also linked with Dynamic Route too</h1>
{
  Res.map((todo:any) => (
    <div>
   <Link href={`${todo.id}`}> <h1 className="text-center p-3 text-4xl text-black">
      {todo.title} &nbsp; &nbsp;
      {todo.userId}
    </h1></Link></div>
  ))
}
  </main>
)
}