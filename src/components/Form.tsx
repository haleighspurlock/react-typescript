import React from "react";

const Form = () => {
  return (
    <form onSubmit={(e) => {
        e.preventDefault();
        console.log('submitted')

    }}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input id="name" type="text" className="form-control" />
      </div>
      <div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">Age</label>
          <input id="age" type="number" className="form-control" />
        </div>
      </div>
      <button className="btn btn-primary" type="submit">Submit</button>
    </form>
  );
};

export default Form;
