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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              aliquam alias tempore numquam mollitia architecto voluptate eaque.
              Reiciendis, eius voluptatibus minus enim expedita eveniet iste
              ipsam provident quos nemo earum! Sapiente aspernatur quis hic,
              reiciendis nemo vel tempora id reprehenderit, iusto optio dolore
              laborum aut dolorem voluptas eaque alias est!
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              aliquam alias tempore numquam mollitia architecto voluptate eaque.
              Reiciendis, eius voluptatibus minus enim expedita eveniet iste
              ipsam provident quos nemo earum! Sapiente aspernatur quis hic,
              reiciendis nemo vel tempora id reprehenderit, iusto optio dolore
              laborum aut dolorem voluptas eaque alias est!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Answers;
