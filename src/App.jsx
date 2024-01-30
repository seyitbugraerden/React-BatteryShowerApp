import { useState, useEffect } from "react";
import { Knob } from "primereact/knob";
import "./App.css";

function App() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if ("getBattery" in navigator) {
      navigator.getBattery().then(function (battery) {
        // Function to update battery status
        function updateBatteryStatus() {
          let deger = Math.floor(battery.level * 100);
        }

        // Initial battery status
        updateBatteryStatus();

        // Add event listener to listen for changes in battery level
        battery.addEventListener("levelchange", updateBatteryStatus);

        // Cleanup function to remove event listener
        return () => {
          battery.removeEventListener("levelchange", updateBatteryStatus);
        };
      });
    }
  }, []);

  return (
    <div>
      <Knob value={value} />
    </div>
  );
}

export default App;
