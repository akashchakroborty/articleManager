import React from "react";
import { connect } from "react-redux";
import { AlertContainer } from "./alert.styles";

export const Alert = ({ alerts }) =>
  alerts !== null &&
  alerts.length > 0 &&
  alerts.map((alert) => (
    <AlertContainer
      className="alert-message"
      key={alert.id}
      className={`alert alert-${alert.alertType}`}
    >
      {alert.msg}
    </AlertContainer>
  ));

const mapStateToProps = (state) => ({
  alerts: state.alerts,
});

export default connect(mapStateToProps)(React.memo(Alert));
