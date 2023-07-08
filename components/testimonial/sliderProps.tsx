const PrvArrow = ({ className, style, onClick, extraClass, icon }: any) => {
    return (
      <div className="client-carousel-arrows prevArrow">
        <span className={`${className} ${extraClass}`} onClick={onClick}>
          <i className={icon}></i>
        </span>
      </div>
    );
  };
  const NextArrow = ({ className, style, onClick, extraClass, icon }: any) => {
    return (
      <div className="client-carousel-arrows">
        <span className={`${className} ${extraClass}`} onClick={onClick}>
          <i className={icon}></i>
        </span>
      </div>
    );
  };
  
  export const testimonialslidertwo = {
    infinite: true,
    dots: true,
    arrows: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  export const testimonialsliderone = {
    infinite: true,
    dots: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };
  export const clientCarousel = {
    infinite: true,
    dots: false,
    arrows: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 5000,
    prevArrow: (
      <PrvArrow extraClass={"prev-arrow"} icon={"fas fa-long-arrow-left"} className={undefined} style={undefined} onClick={undefined} />
    ),
    nextArrow: (
      <NextArrow extraClass={"next-arrow"} icon={"fas fa-long-arrow-right"} className={undefined} style={undefined} onClick={undefined} />
    ),
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  
  export const testimonialslidervertical = {
    infinite: true,
    dots: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 5000,
    vertical: true,
    verticalSwiping: true,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          vertical: false,
          verticalSwiping: false,
        },
      },
    ],
  };
  
  export const pricingcenterslide = {
    dots: false,
    infinite: true,
    autoplay: false,
    arrows: false,
    centerMode: true,
    centerPadding: "170px",
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          centerPadding: "120px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          centerMode: false,
          centerPadding: "0",
        },
      },
    ],
  };
  
  export const relatedproductslider = {
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  
  export const logocarouselactive = {
    infinite: true,
    dots: false,
    arrows: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  
  export const portfolioslider = {
    infinite: true,
    dots: true,
    arrows: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  