const element = (
  // Write your code here.
  <div>
    <h1 className="heading">Congratulations</h1>
    <div className="name-card">
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
        className="image"
      />
      <h1 className="name-heading">Kiran V</h1>
      <p className="description">
        Vishnu Institute of computer Education and Technology, Bhimavaram
      </p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
        className="image"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
