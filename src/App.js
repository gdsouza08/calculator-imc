import { useState } from "react"
import "./app.css"


export default function App () {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');

  const [mensagem, setMensagem] = useState('')
  
  function calcIMC () {
    const alt = altura / 100;
    const imc = peso / (alt * alt)

    if (imc < 18.5) {
      setMensagem("Seu IMC é: " + imc.toFixed(2) + "! Você está ABAIXO DO PESO")
    } else if (imc >= 18.5 && imc <= 24.9) {
      setMensagem("Seu IMC é: " + imc.toFixed(2) + "! Você está no PESO IDEAL")
    } else if (imc >=25 && imc <= 29.9) {
      setMensagem("Seu IMC é: " + imc.toFixed(2) + "! Você está com SOBREPESO")
    } else if (imc >= 30 && imc <= 34.9) {
      setMensagem("Seu IMC é: " + imc.toFixed(2) + "! Você está com OBESIDADE GRAU I")
    } else if (imc >= 35 && imc <= 39.9) {
      setMensagem("Seu IMC é: " + imc.toFixed(2) + "! Você está com OBESIDADE GRAU II")
    } else {
      setMensagem("Seu IMC é: " + imc.toFixed(2) + "! Você está com OBESIDADE GRAU III ou OBESIDADE MÓRBIDA")
    }
  }
  


  return (
    <div className="app">
      <h1>Calculadora IMC</h1>
      <span>Vamos calcular seu IMC</span>

      <div className="area-input">
        <input type="text" placeholder="Peso em (kg) Ex: 95" maxLength="4" value={peso} onChange={ (e) => setPeso(e.target.value)}/>
        <input type="text" placeholder="Altura (cm) Ex:195" maxLength="4" value={altura} onChange={ (e) => setAltura(e.target.value)}/>

        <button onClick={calcIMC}>
          Calcular
        </button>
      </div>

      <h2>{mensagem}</h2>
    </div>
  )
}