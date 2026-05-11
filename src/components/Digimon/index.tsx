export type DigimonType = {
  id: number,
  name: string,
  image: string
}

const Digimon = ({ id, image }: DigimonType) => {
  return (
    <div className="flex flex-col items-center text-amber-500 font-primary">
      <p className="py-3">ID: {id}</p>
      <img className="rounded-md" src={image} />
    </div>
  )
}

export default Digimon