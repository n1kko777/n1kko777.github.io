let total = 2500,
  fixed = 2500,
  time = 1,
  hourRate,
  tabLeft = document.querySelector(".tab-left"),
  tabRight = document.querySelector(".tab-right"),
  blocksBlock = document.querySelector("#blocks-block"),
  pagesBlock = document.querySelector("#pages-block"),
  counterBlock = document.getElementById("counter-block"),
  counterPages = document.getElementById("counter-pages"),
  counterHours = document.getElementById("counter-hours"),
  counterRate = document.getElementById("counter-rate"),
  changesText = document.getElementById("changes-text"),
  // appCheck = document.getElementById("changes-app"),
  totalValue = document.querySelector("#total-price"),
  input = document.getElementsByTagName("input");

const land = 2500,
  corp = 7000,
  blocks = 450,
  pages = 2300,
  spa = 5000,
  changes = 1000;

window.addEventListener("DOMContentLoaded", function() {
  tabLeft.addEventListener("click", leftTab);
  tabRight.addEventListener("click", rightTab);

  function leftTab() {
    for (let index = 0; index < input.length; index++) {
      const element = input[index];
      element.value = "";
    }

    blocksBlock.style.display = "flex";
    pagesBlock.style.display = "none";

    fixed = land;

    tabLeft.classList.add("active");
    tabRight.classList.remove("active");

    if (changesText.checked) {
      changesText.checked = false;
    }

    // if (appCheck.checked) {
    //   appCheck.checked = false;
    // }

    total = land;
    totalValue.value = total;
  }

  function rightTab() {
    for (let index = 0; index < input.length; index++) {
      const element = input[index];
      element.value = "";
    }

    blocksBlock.style.display = "none";
    pagesBlock.style.display = "flex";

    fixed = corp;

    tabLeft.classList.remove("active");
    tabRight.classList.add("active");

    if (changesText.checked) {
      changesText.checked = false;
    }

    // if (appCheck.checked) {
    //   appCheck.checked = false;
    // }

    total = corp;
    totalValue.value = total;
  }

  counterBlock.addEventListener("change", () => {
    counterHours.value = "";
    counterRate.value = "";
    changesText.checked = false;
    // appCheck.checked = false;

    if (counterBlock.value < 1) {
      counterBlock.value = "";
    }

    total = counterBlock.value * blocks;

    fixed > total ? (totalValue.value = fixed) : (totalValue.value = total);
  });

  counterPages.addEventListener("change", () => {
    counterHours.value = "";
    counterRate.value = "";
    changesText.checked = false;
    // appCheck.checked = false;

    if (counterPages.value < 1) {
      counterPages.value = "";
    }

    total = counterPages.value * pages;
    fixed > total ? (totalValue.value = fixed) : (totalValue.value = total);
  });

  counterHours.addEventListener("change", () => {
    counterBlock.value = "";
    counterPages.value = "";
    changesText.checked = false;
    // appCheck.checked = false;
    total = 0;

    if (counterHours.value < 1) {
      counterHours.value = "";
    }

    time = counterHours.value;

    hourRate = time * counterRate.value;

    fixed > hourRate
      ? (totalValue.value = fixed)
      : (totalValue.value = hourRate);

    total = parseInt(totalValue.value);
  });

  counterRate.addEventListener("change", () => {
    counterBlock.value = "";
    counterPages.value = "";
    changesText.checked = false;
    // appCheck.checked = false;
    total = 0;

    if (counterRate.value < 1) {
      counterRate.value = "";
    }

    hourRate = time * counterRate.value;

    fixed > hourRate
      ? (totalValue.value = fixed)
      : (totalValue.value = hourRate);

    total = parseInt(totalValue.value);
  });

  changesText.addEventListener("change", () => {
    if (changesText.checked) {
      total += changes;
    } else {
      total -= changes;
    }

    totalValue.value = total;
  });

  // appCheck.addEventListener("change", () => {
  //   if (appCheck.checked) {
  //     total += spa;
  //   } else {
  //     total -= spa;
  //   }

  //   totalValue.value = total;
  // });
});
