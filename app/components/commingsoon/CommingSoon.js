"use client";

import { useEffect, useState } from "react";
import "./commingsoon.css";

export default function CommingSoon() {
  const targetDate = new Date("2025-03-15T20:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    function updateCounter() {
      const now = new Date().getTime();
      const timeDiff = targetDate - now;

      if (timeDiff <= 0) {
        setTimeLeft({ days: "00", hours: "00", minutes: "00", seconds: "00" });
        return;
      }

      setTimeLeft({
        days: String(Math.floor(timeDiff / (1000 * 60 * 60 * 24))).padStart(
          2,
          "0"
        ),
        hours: String(
          Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        ).padStart(2, "0"),
        minutes: String(
          Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60))
        ).padStart(2, "0"),
        seconds: String(Math.floor((timeDiff % (1000 * 60)) / 1000)).padStart(
          2,
          "0"
        ),
      });
    }

    updateCounter();
    const interval = setInterval(updateCounter, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="coming-soon">
      <h1>We Are Coming Soon</h1>
      <p>Our website is under construction. Stay tuned for updates!</p>

      <div className="counter">
        <div>
          <span>{timeLeft.days}</span>
          <span className="label">Days</span>
        </div>
        <div>
          <span>{timeLeft.hours}</span>
          <span className="label">Hours</span>
        </div>
        <div>
          <span>{timeLeft.minutes}</span>
          <span className="label">Minutes</span>
        </div>
        <div>
          <span>{timeLeft.seconds}</span>
          <span className="label">Seconds</span>
        </div>
      </div>

      <div className="social-links">
        <a href="#" target="_blank">
          Facebook
        </a>{" "}
        |<a href="#">Email Us</a>
      </div>

      <footer>&copy; {new Date().getFullYear()} CSTRAP</footer>
    </div>
  );
}
