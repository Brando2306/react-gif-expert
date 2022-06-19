// import { useState } from 'react'

// export const AddCategory = ({setCategories}) => { //Lo normal es recibir props pero estoy desestructurando con {setCategories} para obtener solo setCateg.

//     const [inputValue, setInputValue] = useState("")

//     const onInputChanged = (event) => {
//         setInputValue(event.target.value) // setInputValue("Hola Mundo")
//     }

//     const onSubmit = (event) => {
//         event.preventDefault(); //Para que no se refresque la web despues de dar Enter
//         console.log(inputValue); //Aqui tengo el valor final del input

//         setCategories( (categories) => {
//             const duplicate = categories.filter(category => category === inputValue);
//             if(inputValue.trim().length <= 1) return categories;

//             if(duplicate.length > 0){
//                 alert('Este usuario ya existe. Ingrese un usuario diferente.')
//                 return categories;
//             } else {
//                 setInputValue('')
//                 return [inputValue,...categories];
//             }


//             // (duplicate.length == 0) && setInputValue('')
//             // const value = duplicate.length > 0 ? categories : [inputValue,...categories];
//             // return value;
//         })
//         // setCategories( (categories)=>[inputValue,...categories] ) // setCategories([inputValue])
//         // setInputValue('')
//     }

//     return (
//         <form onSubmit={ onSubmit }>
//             <input
//                 type="text"
//                 placeholder="Buscar gifs"
//                 value={inputValue}
//                 onChange = { onInputChanged } // onChange = { (event) => onInputChanged(event) }
//             />
//         </form>
//     )
// }

import { useState } from 'react'

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState("")

    const onInputChanged = (event) => {
        setInputValue(event.target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if(inputValue.trim().length <= 1) return;
        onNewCategory(inputValue.trim())
        setInputValue('');
    }

    return (
        <form onSubmit={ onSubmit }>
            <input
                type="text"
                placeholder="Buscar gifs..."
                value={inputValue}
                onChange = { onInputChanged }
            />
        </form>
    )
}
