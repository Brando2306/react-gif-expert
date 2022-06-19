
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";


export const GifGrid = ({category}) => {

    // Usamos un customHooks para que en futuro pueda utilizar las imagenes en otro view/component
    const {images,isLoading} = useFetchGifs(category);
    // console.log({images});
    // console.log({isLoading});
    
    // //Toda esta logica será un CustomHook
    // const [images, setImages] = useState([])

    // const getImages = async () => {
    //     const newImages = await getGifs(category); //Se guardan los datos de la petición
    //     setImages(newImages); //Se guardan los datos en el hook
    // }

    // //Yo quiero disparar un efecto secundario solo con una condición que  va en parametros
    // //Por ejemplo cuando el counter cambie disparo el efecto, cuando inicie el componente, etc
    // useEffect( () => { //Se realiza una sola vez la llamada al api
    //     getImages();
    // },[]) //Cuando dejas vacio el segundo argumento, el hook se dispara cuando inicia el componente

    return (
        <>
            <h3>{category}</h3>
            {
                isLoading 
                ?   <h2>Cargando gifs ...</h2>
                :   <div className="card-grid">
                        {
                            images.map( (image) => (
                                <GifItem
                                    key={image.id}
                                    {...image} //Tecnica para enviar al componente muchas propiedad
                                />
                            ))
                        }
                    </div>
            }
            
        </>
    )
}
