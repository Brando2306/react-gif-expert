//rafc

export const GifItem = ({title,url,id}) => {
  return (
    <div className="card">
        <img src={url} alt={title} />
        {
          title==""
          ?  <p>- Title Dragon -</p>
          :  <p>{title}</p>
        }
    </div>
  )
}
