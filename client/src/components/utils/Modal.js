import { connect } from "react-redux";

// Action Import
import { hideModal } from "../../store/actions";

const Modal = ({ showModal, hideModal }) => {
  const handleClose = () => {
    hideModal();
  };

  return (
    <div className={`modal ${showModal ? "is-active" : ""}`}>
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Booking Successful</p>
          <button
            className="delete"
            aria-label="close"
            onClick={handleClose}
          ></button>
        </header>
        <section className="modal-card-body">
          You will receive an email shortly.
        </section>
        <footer className="modal-card-foot">
          <button className="button is-success" onClick={handleClose}>
            Close
          </button>
        </footer>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    showModal: state.utilsReducer.showModal,
  };
};

export default connect(mapStateToProps, { hideModal })(Modal);
