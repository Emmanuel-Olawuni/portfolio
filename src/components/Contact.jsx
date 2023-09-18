import React from "react";

const Contact = () => {
  return (
    <div className=" h-[40vh] mt-8 flex flex-col items-center border-t-2 border-opacity-60 text-center justify-around p-3 ">
      <h3 className=" text-blue-900 font-extrabold text-2xl">Get In Touch</h3>{" "}
      <p className="font-medium text-blue-500 w-2/3 m-auto">
        I am currently looking for any new opportunities, my inbox is always
        open. Whether you have a question, want to collaborate on a project or
        just want to say hi, I will definitely get back to you!
      </p>
      <button className=" bg-blue-900 text-white rounded-md shadow-green shadow-md p-3"><a href="mailto:emmanuelolawuni2001@gmail.com">Let us Talk !</a></button>
    </div>
  );
};

export default Contact;
