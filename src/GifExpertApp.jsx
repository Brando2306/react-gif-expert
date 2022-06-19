// import {useState} from 'react'
// import { AddCategory } from './components/AddCategory';

// //Hemos creado un Functional Component con el fragmento h1
// export const GifExpertApp = () => {

//     const [categories, setCategories] = useState([]);

//     const onAddCategory = () => { // Esta función agrega un String manualmente
//         const item = "Brando"
//         // categories.push(item) //push utilizado para mutar un objeto y react trata de no hacer mutaciones, tenemos que crear un nuevo estado
//         // setCategories( ['Hola mundo'] ) //Esto actualiza el estado cambiando la lista por una lista con el valor Hola Mundo

//         //Aqui actualizamos el estado, agregando la misma lista de categorías y el item adicional
//         setCategories([...categories,item])
//         // setCategories(cat => [...cat,item])

//     }


//     return (
//         <>
//             {/* Titulo */}
//             <h1>GifExpertApp</h1>

//             {/* Input */}
//             <AddCategory setCategories={setCategories}/>

//             {/* Listado de Gifs */}
//             {/* <button onClick={onAddCategory}>Agregar</button> */}
//             <ol>
//                 {
//                     categories.map(category => {
//                         return <li key={category}>{category}</li>
//                     })
//                 }
//             </ol>
//                 {/* Gif Item */}

//             {/* Input */}
//         </>
//     )
// }
// // 67gv4TdJTIxqHk9Snd8PSgvGAnpCsB4m
// // https://api.giphy.com/v1/gifs/random?api_key=${apiKey}

import {useState} from 'react'
import { AddCategory , GifGrid } from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([]);

    const onAddCategory = (newCategory) => {
        if ( categories.includes(newCategory) ) {
            alert('Este usuario ya existe. Ingrese un usuario diferente.');
            return;
        }
        setCategories([newCategory,...categories]);
    }

    return (
        <>
            {/* Titulo */}
            <h1>GifExpertApp</h1>

            {/* Input */}
            <AddCategory
                onNewCategory = { (event) => onAddCategory(event) }
            />

            {/* Listado de Gifs */}
            <ol>
                {/* Gif Item */}
                {
                    categories.map( (category) => (
                        <GifGrid 
                            key={category}
                            category={category}
                        />
                    ))
                }
            </ol>

            {/* Input */}
        </>
    )
}