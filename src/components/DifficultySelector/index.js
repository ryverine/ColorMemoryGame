import React from "react";
import "./style.css";

function DifficultySelector(props) {
  return (
   
    <div class="selectorContainer">
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
            <label class="form-check-label" for="inlineRadio1">Easy</label>
        </div>

        <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" checked/>
            <label class="form-check-label" for="inlineRadio2">Normal</label>
        </div>

        <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" />
            <label class="form-check-label" for="inlineRadio3">Hard</label>
        </div>

    </div>
  );
}

export default DifficultySelector;
