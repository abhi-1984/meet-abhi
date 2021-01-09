import { useState } from "react";

import * as Yup from "yup";
import { useFormik } from "formik";
import { useCookies } from "react-cookie";
import { isBrowser } from "react-device-detect";
import axios from "axios";

export default function NewsLetter() {
  const portalId = "8664033";
  const formId = "5e52387d-1f43-43bb-ae9a-a97d26bc326c";
  const [cookies] = useCookies(["hubspotutk"]);

  const [isFormSubmitted, setFormSubmitted] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [error, setShowError] = useState("");

  const validationSchema = Yup.object({
    email: Yup.string().email().required("Required"),
  });

  const { handleSubmit, handleChange, handleBlur, values } = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema,
    onSubmit: (values) => {
      setLoading(true);

      axios
        .post(
          `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`,
          {
            portalId,
            formId,
            fields: [
              {
                name: "email",
                value: values.email,
              },
            ],

            context: {
              hutk: cookies.hubspotutk,
              pageUri: isBrowser ? window.location.href : null,
              pageName: document.title,
            },
          }
        )
        .then((response) => {
          console.log("response is ", response);
          setTimeout(() => {
            setLoading(false);
            setFormSubmitted(true);
          }, 300);
        })
        .catch((error) => {
          setTimeout(() => {
            setLoading(false);
            setShowError(error.message);
          }, 300);
          setTimeout(() => {
            setShowError("");
          }, 1200);
        });
    },
  });

  return (
    <div>
      {isFormSubmitted ? (
        <div className="w-full flex p-2.5  bg-green-500 bg-opacity-10 text-green-400 rounded-md items-center justify-center">
          Thanks for Subscribing{" "}
        </div>
      ) : error ? (
        <div className="w-full flex p-2.5  bg-red-300 bg-opacity-10 text-red-300 rounded-md items-center justify-center">
          Try Again Later.
        </div>
      ) : (
        <form
          className="w-full flex"
          onSubmit={handleSubmit}
          autoComplete="off"
        >
          <input
            type="email"
            name="email"
            required
            placeholder="Your Email"
            value={values.email}
            onBlur={handleBlur}
            onChange={handleChange}
            className="flex-1 text-white bg-white bg-opacity-10 p-2.5 rounded-md"
          />
          <button
            disabled={values.email === ""}
            type="submit"
            className={`ml-4 inline-flex items-center justify-center w-32 py-2.5 bg-white text-black rounded-md font-semibold cursor-pointer focus:outline-none focus:ring focus:ring-accent focus:ring-opacity-50 hover:shadow-inner transition duration-300 ${
              values.email === ""
                ? "bg-opacity-60 pointer-events-none"
                : "bg-opacity-100 pointer-events-auto"
            }`}
          >
            {isLoading ? "Joining" : "Join"}
          </button>
        </form>
      )}
    </div>
  );
}
