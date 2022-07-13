
import './App.css';
import React,{useState} from 'react';


function App() {
// 1) Reemplaza estas variables por useState, puedes utilizar los valores iniciales que ya traen las variables
  const [temperatureColor,setTemperaturaColor] = useState('cold')
  const [temperatureValue,setTemperatureValue] = useState(0)
 
  
// 2) Agregar las funciones para manejar los eventos de Click a los botones para que 
//     cuando se presionen se incremente o decremente el valor de la temperatura. 
  const Sumar = ()=>{
    if(temperatureValue===30){
      return
     }
    console.log(temperatureValue)
    setTemperatureValue(temperatureValue + 1)
    
    if(temperatureValue>=19){
      setTemperaturaColor("hot")
     }
     
     
  }
  const Restar = ()=>{
    if(temperatureValue===0){
      return
     }
    setTemperatureValue(temperatureValue - 1)
    console.log(temperatureValue)
    if(temperatureValue<21){
      setTemperaturaColor("cold")
     }
     
     
  }
    
  
// 3) Agrega una lógica para que al momento de que el valor sea >= 20 grados, la variable 'temperatureColor' cambie a 'hot'
//    De igual manera si la temperatura baja a <20 grados, la variable cambie a 'cold'

  
// Para fines prácticos, agrega una regla que evite que los valores suban arriba de 30. Es decir al llegar a 30, no se podrá incrementar más.
// De igual manera al llegar los valores a 0 no se podrá decrementas más.

  return (
    <div className="app-container">
      <div className="temperature-display-container">
        <div className={`temperature-display ${temperatureColor}`}>
          {temperatureValue}°C
        </div>
      </div>
      <div className="button-container">
        <button onClick={Sumar}>+</button>
        <button onClick={Restar}>-</button>
      </div>
    </div>
  );
}

export default App;
