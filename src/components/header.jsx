export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro" style={{ backgroundColor: "#f2c12a" }}>
        {/* <ParticlesBg type="circle" bg={{zIndex: 0, position:"absolute", top:0}} /> */}
        <div className="">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1 style={{ color: "#000", textTransform: "none" }}>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <p style={{ color: "#000", fontWeight: 300 }}>
                  {props.data ? props.data.paragraph : "Loading"}
                </p>
                {/* <a
                  href="#eventos
                  className="btn btn-lg page-scroll"
                  style={{ color: "#000", border: "1px black" }}
                >
                  Acesse
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
