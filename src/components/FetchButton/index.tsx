type FetchButtonProps = {
  handleClick: () => void
}

const FetchButton = ({ handleClick }: FetchButtonProps) => {

  return (
    <button className="flex justify-self-center m-3 font-primary" onClick={() => handleClick()}>
      Get new Digimon
    </button>
  )
}

export default FetchButton