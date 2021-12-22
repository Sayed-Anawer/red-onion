const Categories = ({ filterItems }) => {
    return (
      <div>
        <section className="my-5">
          <div
            className="btn-group"
            role="group"
            aria-label="Basic radio toggle button group"
          >
            <input
              type="radio"
              className="btn-check "
              name="btnradio"
              id="btnradio1"
              autocomplete="off"
              onClick={() => filterItems("all")}
            />
            <label className="btn fs-5 btn-outline-danger" for="btnradio1">
              All
            </label>
  
            <input
              type="radio"
              className="btn-check"
              name="btnradio"
              id="btnradio2"
              autocomplete="off"
              onClick={() => filterItems("breakfast")}
            />
            <label className="btn fs-5 btn-outline-danger" for="btnradio2">
              Breakfast
            </label>
  
            <input
              type="radio"
              className="btn-check"
              name="btnradio"
              id="btnradio3"
              autocomplete="off"
              onClick={() => filterItems("lunch")}
            />
            <label className="btn fs-5 btn-outline-danger" for="btnradio3">
              Lunch
            </label>
            <input
              type="radio"
              className="btn-check "
              name="btnradio"
              id="btnradio4"
              autocomplete="off"
              onClick={() => filterItems("dinner")}
            />
            <label className="btn  fs-5 btn-outline-danger" for="btnradio4">
              Dinner
            </label>
          </div>
        </section>
      </div>
    );
  };
  
  export default Categories;
  