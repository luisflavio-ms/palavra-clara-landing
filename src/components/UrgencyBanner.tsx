import { Clock } from "lucide-react";
import { useEffect, useState } from "react";

export const UrgencyBanner = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const midnight = new Date();
      midnight.setHours(23, 59, 59, 999);
      
      const difference = midnight.getTime() - now.getTime();
      
      const hours = Math.floor(difference / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
      
      setTimeLeft({ hours, minutes, seconds });
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gradient-to-r from-primary/90 to-primary text-primary-foreground py-3 px-4 sticky top-0 z-50 shadow-lg animate-fade-in">
      <div className="container mx-auto flex items-center justify-center gap-3 text-center flex-wrap">
        <Clock className="w-5 h-5 animate-pulse" />
        <p className="font-semibold text-sm md:text-base">
          🔥 OFERTA ESPECIAL TERMINA HOJE ÀS 23:59!
        </p>
        <div className="flex gap-2 items-center font-bold">
          <span className="bg-primary-foreground/20 px-2 py-1 rounded">
            {String(timeLeft.hours).padStart(2, "0")}h
          </span>
          <span className="bg-primary-foreground/20 px-2 py-1 rounded">
            {String(timeLeft.minutes).padStart(2, "0")}m
          </span>
          <span className="bg-primary-foreground/20 px-2 py-1 rounded">
            {String(timeLeft.seconds).padStart(2, "0")}s
          </span>
        </div>
      </div>
    </div>
  );
};
