import dynamic from "next/dynamic";

const Counter = dynamic(() => import("./Counter"), {
  ssr: false,
});


const Stats = () => {
    return (
        <section className="counter-section counter-boxed">
          <div className="container bg-color-primary section-wave-bg">
            <div className="counter-items row justify-content-lg-between justify-content-center">
              <div className="col-xl-2 col-lg-3 col-sm-5">
                <div className="counter-item counter-white mt-40">
                  <div className="counter-wrap">
                    <Counter decimals={0} end={1} />
                    <span className="suffix">+</span>
                  </div>
                  <h6 className="title">Happy Clients</h6>
                </div>
              </div>
              <div className="col-xl-2 col-lg-3 col-sm-5">
                <div className="counter-item counter-white mt-40">
                  <div className="counter-wrap">
                    <Counter decimals={0} end={1} />
                    <span className="suffix">+</span>
                  </div>
                  <h6 className="title">Project Complete</h6>
                </div>
              </div>
              <div className="col-xl-2 col-lg-3 col-sm-5">
                <div className="counter-item counter-white mt-40">
                  <div className="counter-wrap">
                    <Counter decimals={0} end={1} />
                    <span className="suffix">+</span>
                  </div>
                  <h6 className="title">Years Of Operation</h6>
                </div>
              </div>
            </div>
          </div>
        </section>
    );
}

export default Stats;
