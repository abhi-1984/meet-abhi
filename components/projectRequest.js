import { useState } from "react";
import { FigmaIcon, UXIcon, WebflowIcon } from "./icons";

export default function ProjectRequest() {
  const [steps] = useState([1, 2, 3, 4]);
  const [activeStep, setActiveStep] = useState(1);
  const [services] = useState([
    {
      id: 1,
      name: "UI Design",
      icon: <FigmaIcon />,
    },
    {
      id: 2,
      name: "Web Design",
      icon: <WebflowIcon />,
    },
    {
      id: 3,
      name: "UX Audit",
      icon: <UXIcon />,
    },
  ]);

  const renderStepOne = () => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {services.map((service) => {
          return (
            <div
              className="w-full p-4 bg-black border border-solid border-white border-opacity-10 rounded-md flex items-center justify-center flex-col cursor-pointer hover:border-opacity-100 transform hover:scale-95 transition duration-300"
              key={service.id}
            >
              <div className="flex items-center justify-center w-20 h-20 my-4">
                {service.icon}
              </div>
              <p className="text-lg">{service.name}</p>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <section className="px-10 py-10">
      <div className="wrapper">
        <div className="py-16 md:px-20 bg-black md:border border-solid border-white border-opacity-10 rounded-md grid grid-flow-row auto-rows-auto gap-12 md:gap-24">
          <div className="text-center">
            <span className="text-sm uppercase opacity-60 font-semibold">
              Get in Touch
            </span>
            <h3>Have project in mind?</h3>
          </div>
          {activeStep === 1 ? renderStepOne() : <div></div>}
          <div className="flex items-center justify-between pt-10 border-t border-solid border-white border-opacity-10">
            <div className="hidden md:grid grid-flow-col auto-cols-auto gap-2">
              {steps.map((step, index) => {
                return (
                  <div
                    key={index}
                    className={`w-3 h-3 bg-white rounded-full ${
                      index + 1 === activeStep
                        ? "bg-opacity-100"
                        : "bg-opacity-10"
                    }`}
                  />
                );
              })}
            </div>
            <div className="grid grid-flow-col auto-cols-auto gap-6 flex-1 md:flex-initial">
              <button className="inline-flex items-center justify-center px-6 py-3 border border-solid border-white border-opacity-20 rounded-md font-semibold cursor-pointer focus:outline-none focus:ring focus:ring-accent focus:ring-opacity-50 hover:bg-white hover:text-black transition duration-300">
                Cancel
              </button>

              <button className="inline-flex items-center justify-center px-6 py-3 bg-white text-black rounded-md font-semibold cursor-pointer focus:outline-none focus:ring focus:ring-accent focus:ring-opacity-50 hover:shadow-inner transition duration-300">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
