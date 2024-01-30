import { useState, useEffect } from "react";
import { Knob } from "primereact/knob";
import "./App.css";

function App() {
  const [value, setValue] = useState(0);
  const [battery, setBattery] = useState(0);
  useEffect(() => {
    if ("getBattery" in navigator) {
      navigator.getBattery().then(function (battery) {
        // Function to update battery status
        function updateBatteryStatus() {
          let deger = Math.floor(battery.level * 100);
        }
        updateBatteryStatus();
        battery.addEventListener("levelchange", updateBatteryStatus);
        return () => {
          battery.removeEventListener("levelchange", updateBatteryStatus);
        };
      });
    }
  }, []);
  return (
    <div>
      <Knob value={battery} />
    </div>
  );
}

export default App;
