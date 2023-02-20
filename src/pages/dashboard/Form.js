import React, { Component } from "react";
import "./form.css"

class FormDash extends Component {
  handleSubmit = async (add) => {
    add.preventDefault();
    const title = document.getElementById("title").value;
    const link = document.getElementById("link").value;
    const image = document.getElementById("image").files[0];
    const description = document.getElementById("description").value;
    const data = new FormData();
    data.append("title", title);
    data.append("link", link);
    data.append("image", image);
    data.append("description", description);
    const response = await fetch("http://localhost:5000/api/project", {
      method: "POST",
      body: data,
    });
    const result = await response.json();
    console.log(result);

      // Clear form fields
      document.getElementById("title").value = "";
      document.getElementById("link").value = "";
      document.getElementById("image").value = "";
      document.getElementById("description").value = "";
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="addForm">
          <h2>ADD PROJECT</h2>
          <div className="all-colone">
            <div className="first-colone">
              <div>
                <label htmlFor="title">TITLE</label>
                <input type="text" id="title"  />
              </div>
              <div>
                <label htmlFor="link"> LINK</label>
                <input type="text" id="link" />
              </div>
            </div>
            <div className=".second-colone">
              <div>
                <label htmlFor="image">IMAGE</label>
                <input type="file" id="image" />
              </div>
              <div>
                <label htmlFor="description">DESCRIPTION</label>
                <textarea id="description" rows="10"></textarea>
              </div>
            </div>
          </div>

          <button type="submit" className="dash-submit-button">Submit</button>
        </div>
      </form>
    );
  }
}
export default FormDash;
