import React from "react";
import "../proposalform.css"; // Create this CSS file

export default function ProposalForm() {
  const [selectedService, setSelectedService] = React.useState("");

  return (
    <div className="right-sidebar">
      <div className="proposal-form-vertical">
        <h3>Çfarë ofrojmë për ju?</h3>
        <p className="tagline">
        Çdo shërbim është krijuar për të sjellë rezultate të shpejta dhe të qëndrueshme.
        </p>

        <div className="vertical-options">
          {["Website Development", "Content Marketing", "Graphic Design", "Interior Design", "Logo Design", "3D Animation","SEO"].map((service) => (
            <label 
              key={service}
              className={`service-option ${selectedService === service ? "selected" : ""}`}
              onClick={() => setSelectedService(service)}
            >
              <span>{service}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}