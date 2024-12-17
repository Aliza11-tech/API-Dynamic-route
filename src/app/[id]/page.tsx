const DynamicTodo = async (props:any) => {
console.log(props)
const Urll =await fetch(`https://jsonplaceholder.typicode.com/todos/${props.params.id}`)
const res = await Urll.json()
console.log("singletodo", res)
    return(
        <div>
            <h1 className="text-center text-4xl pt-12 pb-12 ml-40 mr-40 text-orange-500 border-4 border-black ">
                Yahoo!  :) dynamic route successful
            </h1>
            <h1 className="text-center text-3xl p-2 pt-6">Title of single todo below by dynamic route</h1>
            <h1 className="text-center text-3xl text-blue-600 p-2">{res.title}</h1>
            <h1 className="text-center text-3xl p-2">ID of single todo below by dynamic route</h1>
            <h1 className="text-center text-5xl text-blue-600">{res.id}</h1>
            <h1 className="text-center text-3xl">User Id of single todo below by dynamic route</h1>
            <h1 className="text-center text-5xl text-blue-600">{res.userId}</h1>
        </div>
    )
}
export default DynamicTodo