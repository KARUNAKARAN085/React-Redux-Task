import "../components/Product.css";
import { useData } from "../contexts/DataContext";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  selectCount,
  selectQuantity,
} from "../features/counter/counterSlice";

const Product = () => {
  const dispatch = useDispatch();
  const count = useSelector(selectCount);
  const Quantity = useSelector(selectQuantity);

  const { data, setData } = useData();

  const remove = () => {
    setData((prevData) => prevData.filter((item) => item.id !== 1));
  };

  return (
    <div className="container">
      <div className="col">
        <div className="card">
          <div className="row m-3">
            <div className="image col-md-4">
              <img src={data.thumbnail} className="img-fluid rounded-start" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{data.title}</h5>
                <p className="card-text">{data.description}</p>
                <p className="card-text">
                  <p className="text-body-secondary">Price: ${data.price}</p>
                </p>
                <div>
                  <p>Stock Left: {data.stock}</p>
                </div>
                <form className="d-flex">
                  <label className="lab me-2">Quantity:</label>
                  <div
                    onClick={() => dispatch(decrement())}
                    id="numbers"
                    className="btn text-dark bg-white btn-outline-secondary"
                  >
                    -
                  </div>
                  <div className="qnumber mx-2">{Quantity}</div>
                  <div
                    onClick={() => dispatch(increment())}
                    id="numbers"
                    className="btn text-dark bg-white btn-outline-secondary"
                  >
                    +
                  </div>
                </form>
                <button className="btn btn-danger my-3" onClick={remove}>
                  Remove
                </button>
              </div>
            </div>
          </div>
          <hr />
          <div className="tq d-flex mx-5 my-2">
            <small className="text-secondary">
              <b>SUBTOTAL :</b>
            </small>
            <small className="subtotal text-secondary">
              <b>${count}</b>
            </small>
          </div>
          <div className="tq d-flex mx-5 my-2">
            <small className="text-secondary">
              <b>SHIPPING :</b>
            </small>
            <small className="subtotal text-secondary">
              <b>$50</b>
            </small>
          </div>
          <hr />
          <div className="tq d-flex mx-5 my-2">
            <small className="text-secondary">
              <b>TOTAL :</b>
            </small>
            <small className="subtotal text-secondary">
              <b>${count + 50}</b>
            </small>
          </div>
          <div className="red d-flex mx-5 my-2">
            <p className="text-danger m-3">Get Daily cash With Nespola Card</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
