import React from "react"; // Create this CSS file

export default function Testimonial() {
    const testimonials = [
        {
          id: 1,
          name: "Nils Magnus Englund",
          company: "Step One Solutions",
          quote: "Mavix built us a website that increased conversions by 140%. Their development team are magicians at blending functionality with stunning design."
        },
        {
          id: 2,
          name: "Alina Fedko",
          company: "Beetroot Marketing",
          quote: "Our content strategy by Mavix went viral – 3x more leads in 60 days. They don't just post, they engineer shareable stories."
        },
        {
          id: 3,
          name: "Per Christian Bjørhusdal",
          company: "Hubster Creative",
          quote: "Mavix's 3D animations for our product launch made competitors look outdated. Their animations don't just move – they sell."
        },
        {
          id: 4,
          name: "Sophia Rodriguez",
          company: "Luxe Interiors",
          quote: "The interior design renders from Mavix won us a $2M hotel project. Clients said 'We could walk through the spaces' before construction even started."
        },
        {
          id: 5,
          name: "James Wilson",
          company: "StartUp Ventures",
          quote: "Our Mavix-designed logo appeared in TechCrunch within a week. It's now our most valuable brand asset – simple, memorable, and infinitely versatile."
        },
        {
          id: 6,
          name: "Fatima Al-Mansoori",
          company: "Gulf Commerce Group",
          quote: "Mavix's SEO strategy put us on page one for 12 competitive keywords in 90 days. Their technical audits revealed goldmines we never knew existed."
        }
      ];

  return (
    <div className="testimonial-container">
      <section className="testimonial-header">
  
       <h1 className="testih1">
        <a id="testimonialz"></a>         Zërat e <br className="mobile"></br>  <span className="spani">Suksesit</span>
        </h1>
        <p className="subtitle"> <span className="spani"> Klientët tanë flasin për përvojën e tyre </span></p>
      </section>

      <div className="testimonial-grid">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <div className="quote-mark">"</div>
            <p className="testimonial-text">{testimonial.quote}</p>
            <div className="testimonial-footer">
              <h3 className="client-name">{testimonial.name}</h3>
              <p className="client-company">{testimonial.company}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}