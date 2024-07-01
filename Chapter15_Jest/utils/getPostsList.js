export async function GetPostList(){
    const list = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await list.json();

    return data
}