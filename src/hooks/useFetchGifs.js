import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

// Un hook es una función que retorna algo
export const useFetchGifs = (category) => { //Aqui tengo que recibir el parametro, que es diferente a recibir las props cuando se crea un component o FC

    const [isLoading, setIsLoading] = useState(true)
    //Toda esta logica será un CustomHook
    const [images, setImages] = useState([])

    const getImages = async () => {
        const newImages = await getGifs(category); //Se guardan los datos de la petición
        setImages(newImages); //Se guardan los datos en el hook
        setIsLoading(false);
    }

    //Yo quiero disparar un efecto secundario solo con una condición que  va en parametros
    //Por ejemplo cuando el counter cambie disparo el efecto, cuando inicie el componente, etc
    useEffect( () => { //Se realiza una sola vez la llamada al api
        getImages();
    },[]) //Cuando dejas vacio el segundo argumento, el hook se dispara cuando inicia el componente

    return {
        // images: images, //cuando lo q retorna es lo mismo se pone un name
        images,
        isLoading: isLoading,
    }
}
