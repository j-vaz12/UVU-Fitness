// src/components/Mission.jsx
import "./MissionStatement.css";

const MissionStatement = () => {
  return (
    <div className="mission-wrapper">
      <main className="section-wrapper">
      <section className="mission-section">
        <div className="mission-overlay">
          <h2>Our Mission</h2>
          <p>
            At UVUFitness, we transform bodies and lives through proven exercise science making every step of the journey safer, simpler, and more sustainable. Before the first workout, we conduct a comprehensive assessment to pinpoint your unique goals, abilities, and movement patterns, giving us the data to craft the smartest plan of action. Through our secure online platform and private UVUFitness app, members receive fully personalized training and nutrition programs, crystal clear exercise‑demo videos, hundreds of dietitian approved healthy recipes, and an intuitive meal‑tracking system that turns smart eating into second nature. Regular virtual check‑ins monitor progress markers, ignite motivation, and keep you consistently moving toward the strongest, healthiest, most confident version of you because in the end, it’s always You vs You.
          </p>
        </div>
      </section>
      <section className="coaching-style-section">
        <div className="coaching-style-container">
          <div className="coaching-style-overlay">
            <h2>The Coaching Style We Preach</h2>
            <ul>
              <li><strong>Comprehensive Assessment &amp; Goal Mapping:</strong> Every journey begins with a detailed health screening, lifestyle review, and goal setting session so we can choose the most effective and enjoyable path forward.</li>
              <li><strong>Science Driven Simplicity:</strong> We turn cutting edge research into clear, actionable plans that remove guesswork and maximize safety.</li>
              <li><strong>Technique‑First &amp; Injury‑Smart:</strong> HD demo videos, mobility primers, and real‑time feedback ensure flawless form before the weight ever goes up.</li>
              <li><strong>Progressive &amp; Personalized:</strong> Your program evolves with your goals, schedule, and feedback. Never a cookie cutter template!</li>
              <li><strong>Whole Person Approach:</strong> Training, nutrition, recovery, and mindset live in one ecosystem inside the app. Our recipe library and one tap meal tracker make eating for your goals effortless and sustainable.</li>
              <li><strong>Accountability on Autopilot:</strong> Scheduled virtual check‑ins, in‑app metrics, and direct coach messaging keep you motivated and consistent between sessions.</li>
              <li><strong>Inclusive, Empathetic Coaching:</strong> From first time lifters to competitive athletes, every client is met with respect, clarity, and unwavering support.</li>
            </ul>
            <p className="coaching-style-tagline">This blend of assessment driven planning, science based programming, and unwavering accountability turns “You vs You” from a slogan into a daily practice, helping you outwork yesterday, outthink old limits, and outgrow every obstacle in your way.</p>
          </div>
        </div>
      </section>
      </main>
    </div>
  );
};

export default MissionStatement;