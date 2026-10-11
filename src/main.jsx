import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

function App() {
  return (
    <div className="page">
      <div className="card">
        <div className="avatar">АА</div>

        <p className="label">МОЁ РЕЗЮМЕ</p>

        <h1>
          Алтымышова
          <br />
          <span>Алина</span>
        </h1>

        <p className="job">Начинающий Frontend Developer</p>

        <div className="line"></div>

        <section>
          <h2>Обо мне</h2>
          <p>
            Я студентка Кыргызско-Германского института
            прикладной информатики (КГИПИ).
            Изучаю программирование и веб-разработку.
          </p>
        </section>

        <section>
          <h2>Навыки</h2>
          <div className="skills">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>React</span>
          </div>
        </section>

        <section>
          <h2>Образование</h2>
          <p>
            Кыргызско-Германский институт
            прикладной информатики
          </p>
          <p className="muted">Направление: технологии программирования</p>
        </section>

        <section>
          <h2>Контакты</h2>
          <p>
            Телефон: <a href="tel:+996222363537">+996 222 363 537</a>
          </p>
        </section>

        <button onClick={() => window.print()}>
          Сохранить резюме в PDF
        </button>
      </div>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);