import {ChangeEvent, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export default function App() {
    const [count, setCount] = useState(0)

    function handlePlusButtonClick() {
            setCount(count + 1)
    }

    function handleMinusButtonClick() {
        if (count > 0) {
            setCount(count - 1)
        }
    }

    function fizzbuzz():string {
        if (count === 0) {
            return "0"
        } else if (count % 3 === 0 && count % 5 === 0) {
            return "neue fische"
        } else if (count % 3 === 0) {
            return "neue"
        } else if (count % 5 === 0) {
            return "fische"
        } else {
            return count.toString()
        }
    }

    return (
        <>
            <h1>{fizzbuzz()}</h1>
            <h2>{count}</h2>
            <div className="App">
                <button onClick={() => handleMinusButtonClick()}>-</button>
                <button onClick={() => handlePlusButtonClick()}>+</button>
            </div>
            <p>Tipp: Baue diese Applikation in React nach. Beachte: Zahlen die durch 3, 5 und 3 und 5 teilbar sind, werden besonders angezeigt.</p>
        </>
    )
}
