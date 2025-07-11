"use client";
import { useState } from "react";

const slides = [
  {
    title: "Stay on Top of Your Home Stock",
    subtitle: "Easily monitor your pantry. Avoid waste and overbuying.",
    image: "/shopping.png",
  },
  {
    title: "Cook with What You Already Have",
    subtitle: "Plan meals and update inventory automatically.",
    image: "/chef.png",
  },
  {
    title: "Budget Your Food Like a Pro",
    subtitle: "Track spending and make smarter grocery decisions.",
    image: "/accountant.png",
  },
];

const WelcomeGate = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      window.location.href = "/Login";
    }
  };

  const skip = () => {
    window.location.href = "/Login";
  };

  return (
    <>
      <div className="w-full h-screen bg-green-50 flex items-center justify-center">
        <div className="w-[90%] max-w-md  text-center transition-all duration-500">
          <img
            src={slides[currentSlide].image}
            alt="onboarding"
            className="w-48 h-48 mx-auto mb-4"
          />
          <h1 className="text-xl font-bold text-gray-800">
            {slides[currentSlide].title}
          </h1>
          <p className="text-gray-500 mt-2">{slides[currentSlide].subtitle}</p>

          {/* Dots */}
          <div className="flex justify-center space-x-2 my-4">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full ${
                  index === currentSlide ? "bg-green-500" : "bg-gray-300"
                }`}
              ></button>
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="w-full bg-green-500 text-white py-2 rounded-xl mt-4 transition hover:bg-green-600"
          >
            {currentSlide === slides.length - 1 ? "Get Started" : "Next"}
          </button>

          <button
            onClick={skip}
            className="text-sm text-gray-400 mt-2 underline"
          >
            Skip
          </button>
        </div>
      </div>
    </>
  );
};

export default WelcomeGate;
