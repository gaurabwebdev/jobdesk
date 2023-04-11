import React from "react";
import { ChevronDoubleRightIcon } from "@heroicons/react/24/solid";

const Blog = () => {
  return (
    <div className="my-container">
      <h2 className="text-5xl font-semibold tracking-wide leading-snug">Q&A</h2>
      <ol className="list-decimal text-xl ml-3">
        <li>
          <p>When should you use context API?</p>
          <p className="my-2">
            --- When we have to reuse any data among maximum components of our
            site. We can use context API to share from it's parent route and to
            receive from any child route.
          </p>
        </li>
        <li>
          <p>What is a custom hook?</p>
          <p className="my-2">
            --- Custom React JS hook is reusable function that a React JS
            software developer can use to add special and unique functionality
            to the React applications. When there is a requirement to add a
            feature, one can install a third-party library and solve the
            problem. But what if there is no such library with hooks that can be
            used? This problem is solved by using custom React JS hook.
          </p>
        </li>
        <li>
          <p>What is useRef?</p>
          <p className="my-2">
            --- useRef hook is part of the React Hooks API. It is a function
            which takes at least one argument and returns an Object. The
            returned object has a property called current whose value is the
            argument passed to useRef. If it will be invoked without an
            argument, it will return object's current property as undefined.
          </p>
        </li>
        <li>
          <p>What is useMemo?</p>
          <p className="my-2">
            --- useMemo in React is essential react hook for improving the
            performance and speed of your application by caching the output in
            the computer memory and returning it when the same input is given
            again.
          </p>
        </li>
      </ol>
    </div>
  );
};

export default Blog;
