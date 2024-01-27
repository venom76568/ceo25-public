import React, { useState } from "react";
// import axios from 'axios';
import { validateForm } from "../FormValidation";
import { registerUser } from "../Api";

const SignUpForm = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    box: "",
    question1: "",
    question2: "",
    question3: "",
    question4: "",
    question5: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const handleChange = (e) => {
    // Clear the validation error for the changed field
    setErrors((prevErrors) => ({ ...prevErrors, [e.target.name]: "" }));
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      setLoading(true);

      // Send data to the server
      const response = await registerUser(formData);

      setMessage(response.message);
      setRegistrationSuccess(true);
    } catch (error) {
      console.error(error);
      setMessage("Error submitting the form");
    } finally {
      setLoading(false);
    }
  };

  if (registrationSuccess) {
    // Render success component here
    return (
      <div
        id="register"
        className="flex items-center justify-center h-full bg-cover"
      >
        <div className=" rounded-lg shadow-lg p-8 backdrop-blur-sm">
          <h2 className="text-2xl font-bold text-black mb-4">
            Registration Successful!
          </h2>
          {/* <p className="text-black">See you on 5th Nov at 9am </p> */}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-900" id='register'>
      <h2 className="mb-2 pt-7 text-3xl font-bold text-center py-4 text-white sm:text-4xl md:text-[40px]">
        {currentStep === 1 ? "Register" : "Additional Information"}
      </h2>
      <form className="max-w-md mx-auto w-[80vw]" onSubmit={handleSubmit}>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          {/* {[
            { id: 'first_name', label: 'First name', type: 'text', placeholder: 'Your Name', required: true,name:'name' },
            { id: 'phone', label: 'Phone number', type: 'text', placeholder: 'Phone Number', required: true,name:'phone' },
          ].map((field) => ( */}
          <div>
            <label className="block mb-2 text-sm font-medium text-white">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Your Name Here"
              // pattern={field.pattern}
              required
              // value={formData.field.name}
              // value={formData[field.name]}
              // onChange={handleChange}
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <span style={{ color: "red" }}>{errors.name}</span>
            <br />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-white">
              Phone Number
            </label>
            <input
              type="text"
              id="phone"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Your Number Here"
              // pattern={field.pattern}
              required
              // value={formData.field.name}
              // value={formData[field.name]}
              // onChange={handleChange}
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
            <span style={{ color: "red" }}>{errors.phone}</span>
            <br />
          </div>
          {/* ))} */}
        </div>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-white"
          >
            Email address
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="email"
            required
            value={formData.email}
            name="email"
            onChange={handleChange}
          />
          <span style={{ color: "red" }}>{errors.email}</span>
          <br />
        </div>
        {currentStep === 2 && (
          <>
            {/* Additional fields for the second step */}
            <p className="mb-2 pt-7 text-m font-bold text-center py-4 text-dark dark:text-white sm:text-l md:text-[20px]">
              Answer the following question to successfully Register for CEO
            </p>
            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium text-white">
                Imagine you are the CEO of a tech company. With the rise of
                artificial intelligence, how would you strategically position
                your company for the next decade, considering both opportunities
                and threats?
              </label>
              <textarea
                id="question1"
                // name="question1"
                rows="3"
                className="resize-none bg-gray-50 border h-20 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Answer within 200 words"
                name="question1"
                required
                value={formData.question1}
                onChange={handleChange}
                // name="email"
              />
            </div>
            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium text-white">
                If your company received negative publicity due to a product
                issue, how would you rebuild customer trust and maintain a
                customer-centric focus, ensuring long-term loyalty
              </label>
              <textarea
                id="question2"
                name="question2"
                rows="3"
                className="resize-none bg-gray-50 border h-20 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Answer within 200 words"
                required
                value={formData.question2}
                onChange={handleChange}
              />
            </div>
            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium text-white">
                If your company's brand image is at risk due to negative online
                reviews and social media backlash, describe the steps you would
                take to address the situation and rebuild a positive brand
                reputation
              </label>
              <textarea
                id="question3"
                name="question3"
                rows="3"
                className="resize-none bg-gray-50 border h-20 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Answer within 200 words"
                required
                value={formData.question3}
                onChange={handleChange}
              />
            </div>
            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium text-white">
                During an economic downturn, how would you lead your company to
                not only survive but also thrive, balancing cost-cutting
                measures with strategic investments for future growth
              </label>
              <textarea
                id="question4"
                name="question4"
                rows="3"
                className="resize-none bg-gray-50 border h-20 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Answer within 200 words"
                required
                value={formData.question4}
                onChange={handleChange}
              />
            </div>
            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium text-white">
                You're leading a company planning to expand into a new
                international market. Describe the key considerations,
                challenges, and strategies you would employ to ensure a
                successful market entry.
              </label>
              <textarea
                id="question5"
                name="question5"
                rows="3"
                className="resize-none bg-gray-50 border h-20 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Answer within 200 words"
                value={formData.question5}
                required
                onChange={handleChange}
              />
            </div>
          </>
        )}

        {/* {currentStep === 1 && (
          
        )} */}

        <div className="">
          {currentStep === 1 ? (
            <button
              type="button"
              onClick={nextStep}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Next
            </button>
          ) : (
            <>
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    type="checkbox"
                    // value=""
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                    required
                    name="checkbox"
                    checked={formData.box}
                    // onChange={(e) => setFormData({ ...formData, box: e.target.checked })}
                    onChange={(e) =>
                      setFormData({ ...formData, box: e.target.checked })
                    }
                  />
                </div>
                <label
                  htmlFor="remember"
                  className="ms-2 text-sm font-medium text-gray-300"
                >
                  I agree with the{" "}
                  <a
                    href="#"
                    className="text-blue-600 hover:underline dark:text-blue-500"
                  >
                    terms and conditions
                  </a>
                  .
                </label>
              </div>
             
              <button
                type="submit"
                disabled={loading}
                className="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full m-2 sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                {loading ? "Loading..." : "Submit"}
              </button>
             
              <p className="text-white">{message}</p>
            </>
          )}
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
