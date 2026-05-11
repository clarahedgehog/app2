'use client'

import { useState, useEffect } from "react"
import Digimon from "../Digimon"
import FetchButton from "../FetchButton"
import type { DigimonType } from "../Digimon"

const DigimonFetch = () => {

  const [randomDigimon, setRandomDigimon] = useState<DigimonType>()
  const [userGuess, setUserGuess] = useState<string>("")
  const [showResult, setShowResult] = useState(false)

  const fetchDigimon = async (): Promise<void> => {

    const digimonID: number = Math.floor(Math.random() * 1488 + 1)

    try {
      const response: Response = await fetch(`https://digi-api.com/api/v1/digimon/${digimonID}`)
      const data: any = await response.json()

      const digiData: DigimonType = {
        id: data.id,
        name: data.name.toLowerCase(),
        image: data.images[0].href
      }

      setRandomDigimon(digiData)

      console.log("For Rob, Digimon name (Cheating!!!): " + data.name)

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchDigimon()
  }, [])

  const userInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value;
    setUserGuess(newValue.toLowerCase())
  }

  const validateUserInput = () => {
    setShowResult(true)
  }

  return (
    <>
      {randomDigimon && <Digimon {...randomDigimon} />}

      <FetchButton handleClick={fetchDigimon} />

      <div className="sm:flex-col sm:items-center sm:justify-self-center lg:flex-row flex justify-center gap-3 font-primary">
        <input onChange={userInputHandler} className="border border-blue-400 rounded-md text-amber-500 lg:p-2"></input>
        <button onClick={validateUserInput}>GUESS</button>
      </div>

      {(showResult && randomDigimon != null) &&
        <div className="bg-sky-950 absolute inset-0 h-screen flex justify-center items-center">
          <div className="flex justify-center items-center flex-col">
            <h1 className="p-10 font-primary">{userGuess === randomDigimon.name ? "You guessed right!" : "Wrong!!!"}!</h1>
            <button className="font-primary" onClick={() => setShowResult(false)}>Guess again!</button>
          </div>
        </div>
      }
    </>
  )
}

export default DigimonFetch