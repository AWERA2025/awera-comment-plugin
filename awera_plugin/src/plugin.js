import "./plugin.css";
import "./navbar.js";
import Navbar from "./navbar.js";

function AweraPlugin() {
  return (
      <div className="awera-plugin">
          <Navbar />
      <h2>Awera Comment Plugin</h2>
      <p>This is a simple comment plugin for demonstration purposes.</p>
    </div>
  );
}

export default AweraPlugin;