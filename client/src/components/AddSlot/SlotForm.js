import React, { useState } from "react";

const SlotForm = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
  });

  return (
    <>
      <form class="box" style={{ marginTop: "10em" }}>
        <div class="field">
          <label class="label">Name</label>
          <div class="control has-icons-left has-icons-right">
            <input
              class="input"
              type="text"
              placeholder="Enter Your Name"
              value={userInfo.name}
              onChange={(event) =>
                setUserInfo({
                  ...userInfo,
                  name: event.target.value,
                })
              }
            />
            <span class="icon is-small is-left">
              <i class="fas fa-user"></i>
            </span>
          </div>
        </div>

        <div class="field">
          <label class="label">Address</label>
          <div class="control has-icons-left has-icons-right">
            <textarea
              rows="5"
              class="input"
              type="text"
              placeholder="Enter Your Address"
              value="bulma"
            ></textarea>
            <span class="icon is-small is-left">
              <i class="fas fa-user"></i>
            </span>
          </div>
        </div>

        <div class="field">
          <label class="label">Description</label>
          <div class="control has-icons-left has-icons-right">
            <textarea
              class="input"
              type="text"
              placeholder="Description"
              value="bulma"
            ></textarea>
            <span class="icon is-small is-left">
              <i class="fas fa-user"></i>
            </span>
          </div>
        </div>

        <div class="field">
          <label class="label">Longitude</label>
          <div class="control has-icons-left has-icons-right">
            <input
              class="input"
              type="text"
              placeholder="Enter Your Position Longitude"
              value="bulma"
            />
            <span class="icon is-small is-left">
              <i class="fas fa-user"></i>
            </span>
          </div>
        </div>

        <div class="field">
          <label class="label">Latitude</label>
          <div class="control has-icons-left has-icons-right">
            <input
              class="input"
              type="text"
              placeholder="Enter Your Position Latitude"
              value="bulma"
            />
            <span class="icon is-small is-left">
              <i class="fas fa-user"></i>
            </span>
          </div>
        </div>

        <div class="field">
          <label class="label">Number of Cars</label>
          <div class="control has-icons-left has-icons-right">
            <input
              class="input"
              type="number"
              placeholder="Enter the numer of cars"
              value="bulma"
            />
            <span class="icon is-small is-left">
              <i class="fas fa-user"></i>
            </span>
          </div>
        </div>

        <div class="field">
          <label class="label">Number of Bikes</label>
          <div class="control has-icons-left has-icons-right">
            <input
              class="input"
              type="number"
              placeholder="Enter the numer of bikes"
              value="bulma"
            />
            <span class="icon is-small is-left">
              <i class="fas fa-user"></i>
            </span>
          </div>
        </div>

        <div class="field">
          <label class="label">Mobile Number</label>
          <div class="control has-icons-left has-icons-right">
            <input
              class="input"
              type="number"
              placeholder="Enter your mobile number"
              value="bulma"
            />
            <span class="icon is-small is-left">
              <i class="fas fa-user"></i>
            </span>
          </div>
        </div>

        <div class="field">
          <label class="label">Price</label>
          <div class="control has-icons-left has-icons-right">
            <input
              class="input"
              type="number"
              placeholder="Enter the price of Parking "
              value="bulma"
            />
            <span class="icon is-small is-left">
              <i class="fas fa-user"></i>
            </span>
          </div>
        </div>
      </form>
    </>
  );
};

export default SlotForm;
