// // Server Side Rendering(SSR) in NextJS(React Framework for Production)
// // Javascript code initially can take a long time to load on a browser(WE DONT LIKE LOADING also THE UX SUCKS)
// // Page Splitting by Default
// // The Page is Rendered on the Server PRE Request
// // Server(VERCEL) have Great Internet & Fast CPU
// // Pages Load Faster & Time to Interact is Less also BETTER UX
// // Better SEO Performance

// // import React, { useState, useEffect } from "react";

// const Home = ({ todos }) => {
//   // const [todos, setTodos] = useState([]);

//   // useEffect(() => {
//   //   const fetchTodos = async () => {
//   //     const response = await fetch(
//   //       `https://jsonplaceholder.typicode.com/todos`
//   //     );
//   //     const todoData = await response.json();

//   //     setTodos(todoData);
//   //   };
//   //   fetchTodos();
//   // }, []);

//   return (
//     <>
//       {todos?.length === 0 ? (
//         <>
//           <div>Loading...</div>
//         </>
//       ) : (
//         <>
//           {todos?.map((todo) => (
//             <div key={todo.id}>
//               {todo.id}: {todo.title}
//             </div>
//           ))}
//         </>
//       )}
//     </>
//   );
// };

// export const getServerSideProps = async () => {
//   const response = await fetch(`https://jsonplaceholder.typicode.com/todos`);
//   const todoData = await response.json();

//   return {
//     props: {
//       todos: todoData,
//     },
//   };
// };

// export default Home;
