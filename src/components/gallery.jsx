import React, { useState, useCallback } from "react";
import ImageViewer from "react-simple-image-viewer";

export const Gallery = (props) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const data = [
    { thumb: "img/portfolio/01-large.jpg", title: "Ida do homem a lua" },
    { thumb: "img/portfolio/02-small.jpg", title: "Lançamento do IPhone" },
    {
      thumb: "img/portfolio/03-small.jpg",
      title: "Invenções de Galileu Galilei",
    },
    { thumb: "img/portfolio/04-small.jpg", title: "Copa do Mundo de 2002" },
    { thumb: "img/portfolio/05-small.jpg", title: "Morte da princesa Diana" },
    { thumb: "img/portfolio/06-small.jpg", title: "Queda do muro de Berlim" },
    { thumb: "img/portfolio/07-small.jpg", title: "Vida e obra de Chorão" },
    { thumb: "img/portfolio/08-small.jpg", title: "11 de Setembro" },
    { thumb: "img/portfolio/09-small.jpg", title: "Mineiros do Chile" },
  ];

  const images = data.map((obj) => obj.thumb.replace("-small", "-large"));

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Notícias</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p>
        </div>
        <div className="row">
          <div className="portfolio-items">
            {data.map(({ title, thumb }, index) => (
              <div
                key={index}
                // onClick={() => openImageViewer(index)}
                className="col-sm-6 col-md-4 col-lg-4"
                // style={{ height: "23%" }}
              >
                <div className="portfolio-item cursor">
                  <div className="hover-bg">
                    <div className="hover-text">
                      <h4>{title}</h4>
                    </div>
                    <img
                      src={thumb}
                      className="img-responsive"
                      alt="Project Title"
                      style={{
                        height: "23%",
                        width: "100%",
                        objectFit: "cover",
                      }}
                    />{" "}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {isViewerOpen && (
            <ImageViewer
              src={images}
              backgroundStyle={{ zIndex: 99999 }}
              currentIndex={currentImage}
              onClose={closeImageViewer}
            />
          )}
        </div>
      </div>
    </div>
  );
};
