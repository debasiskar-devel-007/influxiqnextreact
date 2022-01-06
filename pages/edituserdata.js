// export const getStaticPaths = async () => {
//     const res = await fetch('https://wfr9bu9th2.execute-api.us-east-1.amazonaws.com/dev/api3/getnextuserslist');
//     const data = await res.json();

//     // map data to an array of path objects with params (id)
//     const paths = data.map(ninja => {
//         return {
//             params: { id: ninja.id.toString() }
//         }
//     })

//     return {
//         paths,
//         fallback: false
//     }
// }

// export const getStaticProps = async (context) => {
//     const id = context.params.id;
//     const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
//     const data = await res.json();

//     return {
//         props: { ninja: data }
//     }
// }

// const Details = ({ ninja }) => {
//     return (
//         <div>
//             <h1>{ninja.name}</h1>
//             <p>{ninja.email}</p>
//             <p>{ninja.website}</p>
//             <p>{ninja.address.city}</p>
//         </div>
//     );
// }

// export default Details;






const Edituserdata = () => {
    return (
        <div>
            <h4>Hello User..Edit Your Data</h4>
        </div>
    );
}

export default Edituserdata;