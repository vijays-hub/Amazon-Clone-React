import "./PaymentLoader.css";
function PaymentLoader() {
  return (
    <div>
      <div className="loader__container">
        <img src="/ajax-loader.gif" alt="Loader" />
        <span>Payment Processing...</span>
      </div>
    </div>
  );
}

export default PaymentLoader;
