import React from "react";

const Answers = () => {
  return (
    <div className="container my-5 py-5">
      <div className="accordion" id="accordionPanelsStayOpenExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseOne"
              aria-expanded="true"
              aria-controls="panelsStayOpen-collapseOne"
            >
              How React Works?
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="panelsStayOpen-headingOne"
          >
            <div className="accordion-body">
              <ol>
                <li>
                  React works with two files This are React and react dom.
                </li>
                <li>
                  React convert all components (JS code) in HTML code by React
                  file.
                </li>
                <li>
                  And then HTML Code is inject in index.html by React DOM file
                </li>
                <li>
                  React creates a Virtual Dom in memorey Instead of manipulating
                  the browser's Dom directly.
                </li>
                <li>
                  Where it does all the necessary manipulating before making the
                  changes in the browser DOM
                </li>
                <li>
                  And then changes only what needs to be changed so That's why
                  React works called Single Page Application(SPA).{" "}
                </li>
              </ol>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseTwo"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseTwo"
            >
              Give Difference Between Props Vs State?
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingTwo"
          >
            <div className="accordion-body">
              Difference Between Props and State:
              <ol>
                <li>Props is Read only but State is read and writeable</li>
                <li>
                  Props can not be modified and State can be modified prperties.
                </li>
                <li>Props are immutable but State is Mutable</li>
                <li>
                  Props is passed in from parent and state created within
                  component
                </li>
                <li>
                  Props cab be passed to child components but State can only be
                  passed as props.
                </li>
              </ol>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseThree"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseThree"
            >
              How UseState Works?
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingThree"
          >
            <div className="accordion-body">
              <ol>
                <li>
                  In useState have Tow component . They are: 1. array 2. Arrow
                  Function/method
                </li>
                <li>useState is Works like a Hook in React. </li>
                <li>
                  UseState allows us to have state variables in functional
                  components.
                </li>
                <li>Here, pass the initial sate to this useState function.</li>
                <li>
                  The function return a a variable with the current state value{" "}
                </li>
                <li>And then another function to update this value</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Answers;
