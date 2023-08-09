const stickyNav_ = () => {
    let offset = window.scrollY;
    const stickys = document.querySelectorAll(".sticky-header");
    for (let i = 0; i < stickys.length; i++) {
      const sticky = stickys[i];
      if (sticky) {
        if (offset > 10) {
          sticky.classList.add("sticky-on");
        } else {
          sticky.classList.remove("sticky-on");
        }
      }
    }
  };
  
  export const stickyNav = (stickyClass) =>
    window.addEventListener("scroll", stickyNav_);
  
  export const progressbar = () => {
    const bars = document.querySelectorAll(".progress-line");
    bars.forEach((bar) => {
      let percentage = bar.getAttribute("data-percentage"),
        line = bar.getElementsByClassName("line");
      line[0].style.width = `${percentage}%`;
    });
  };
  
  export const pagination = (listClass, sort, active) => {
    let list = document.querySelectorAll(listClass);
    for (let i = 0; i < list.length; i++) {
      const element = list[i];
      if (active === 1) {
        if (i < sort) {
          element.classList.remove("d-none");
        } else {
          element.classList.add("d-none");
        }
      } else {
        if (i >= (active - 1) * sort && i < active * sort) {
          element.classList.remove("d-none");
        } else {
          element.classList.add("d-none");
        }
      }
    }
  };
  
  export const getPagination = (totalNumber, sort) => {
    let arr = new Array(Math.ceil(totalNumber / sort))
      .fill()
      .map((_, idx) => idx + 1);
    return arr;
  };
  