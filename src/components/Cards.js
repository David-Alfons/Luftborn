const Cards = ({ data }) => {
  return (
    <div className="cards-container">
      {data?.map((card) => {
        return (
          <div key={card.id}>
            <div className={`card-container color-${card.id}`}>
              <div className="card-content">
                <div className="row">
                  <p className="content-category content">{card.category}</p>
                  <p className="content">. . .</p>
                </div>
                <div className="row">
                  <p className="content-price content">{card.price}$</p>
                  <p className="content-title">{card.title}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
