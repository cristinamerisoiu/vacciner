import React from "react";

export default function SelectDate() {
  return (
    <>
      <label for="start">
        Enter date:
        <input
          type="date"
          id="start"
          name="vaccination-date"
          value=""
          min="1990-01-01"
          max="2999-12-31"
        ></input>
        <span class="validity"></span>
      </label>
    </>
  );
}
