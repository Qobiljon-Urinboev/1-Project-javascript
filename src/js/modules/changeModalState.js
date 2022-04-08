import checkNumInputs from "./checkNumInputs";
import modals from "./modals";
const changeModalState = (state) => {
    const windowForm = document.querySelectorAll(".balcon_icons_img"),
        windowWith = document.querySelectorAll("#width"),
        windowHeight = document.querySelectorAll("#height"),
        windowType = document.querySelectorAll("#view_type"),
        windowProfile = document.querySelectorAll(".checkbox"),
        calcButton = document.querySelectorAll(".button.popup_calc_button"),
        startBtn = document.querySelectorAll(".popup_calc_btn");
    checkNumInputs("#width");
    checkNumInputs("#heigth");
    console.log(calcButton);

    function bindActionToElems(event, elem, prop) {
        elem.forEach((item, i) => {
            item.addEventListener(event, () => {
                calcButton.setAttribute("disabled", "disabled");
                switch (item.nodeName) {
                    case "SPAN":
                        state[prop] = i;
                        break;
                    case "INPUT":
                        if (item.getAttribute("type") === "checkbox") {
                            i === 0 ? (state[prop] = "Холодное") : (state[prop] = "Теплое");
                            elem.forEach((box, j) => {
                                box.checked = false;
                                if (i === j) {
                                    box.checked = true;
                                }
                            });
                        } else {
                            if (item.value.length !== "") {
                                calcButton.forEach((element) => {
                                    element.disabled = false;
                                });
                                state[prop] = item.value;
                            }
                        }

                        break;
                    case "SELECT":
                        state[prop] = item.value;
                        break;
                }
                console.log(state);
            });
        });
    }
    bindActionToElems("click", windowForm, "form");
    bindActionToElems("input", windowHeight, "height");
    bindActionToElems("input", windowWith, "width");
    bindActionToElems("change", windowType, "type");
    bindActionToElems("change", windowProfile, "profile");
};
export default changeModalState;