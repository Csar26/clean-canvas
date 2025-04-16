import React from "react";
import logo from '../images/logo_motronix.svg';
import fuelPump from '../images/fuel-pump.svg';
import Coil from '../images/ignition_coil.svg';



export default function Header (){
  return (
    <header className="App-header">

      <div>
        <h2 className="subtitle"> Ingnitions Coils</h2>
      <img src={Coil} className="fuelPump" alt="fuel pump" text="fuel pump" />
      </div>
    <img src={logo} className="App-logo" alt="logo" />
    <div>
    <h2 className="subtitle"> Fuel pump</h2>
    <img src={fuelPump} className="fuelPump" alt="fuel pump" text="fuel pump" />
    </div>
    
  </header>
  )
}