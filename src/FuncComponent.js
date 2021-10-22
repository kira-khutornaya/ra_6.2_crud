// import React, { useEffect, useState } from 'react';
// import NotesContainer from './NotesContainer';

// function FuncComponent() {
//   const [error, setError] = useState(null);
//   const [isLoaded, setIsLoaded] = useState(false);
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetch('http://localhost:7777/notes')
//       .then((res) => res.json())
//       .then(
//         (json) => {
//           setIsLoaded(true);
//           setData(json);
//         },
//         (err) => {
//           setIsLoaded(true);
//           setError(err);
//         },
//       );
//   }, []); // <-- componentDidMount
//
//   if (error) {
//     return (
//       <div>
//         Ошибка:
//         {error.message}
//       </div>
//     );
//   } if (!isLoaded) {
//     return <div>Загрузка...</div>;
//   }
//   return <NotesContainer data={data} />;
// }

// export default FuncComponent;
