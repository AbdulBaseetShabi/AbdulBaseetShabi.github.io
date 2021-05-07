import DetailButton from './detailbutton.js';

function DetailsModal(props) {
  let details = props.details;
  return (
    <div
      className="enter-bottom detail-modal"
    >
      <div
        id="main-modal"
        style={{
          backgroundColor: "#0F0E17",
        }}
      >
        <div id="details-summary" style={{ padding: "2rem" }}>
          <label className="inline-block-label-uncentered">
            <span style={{ fontWeight: "bold", margin: "0.5rem" }}>
              Location:{" "}
            </span>
            {details.location}
          </label>
          {details.type === "coop" ? (
            <div style={{ width: "100%", margin: "0.5rem" }}>
              <label>
                <span style={{ fontWeight: "bold" }}>
                  Tools and Technologies:{" "}
                </span>
                {details.tools_and_technologies.join(", ")}
              </label>
              <label
                className="inline-block-label-uncentered"
                style={{
                  margin: "0.5rem 0",
                }}
              >
                <span style={{ fontWeight: "bold" }}>
                  Langauges and Frameworks:{" "}
                </span>
                {details.languages_and_frameworks.join(", ")}
              </label>
            </div>
          ) : (
            <label
              className="inline-block-label-uncentered"
              style={{
                margin: "0.5rem",
              }}
            >
              <span style={{ fontWeight: "bold" }}>Main Skills: </span>
              {details.main_skills.join(", ")}
            </label>
          )}
          <div
            id="summary-header"
            style={{
              borderTop: "4px solid #272C45",
              borderBottom: "4px solid #272C45",
            }}
          >
            <label
              className="inline-block-label"
              style={{
                fontWeight: "bold",
              }}
            >
              SUMMARY
            </label>
          </div>
          {details.summary.map((text, index) => {
            return (
              <p style={{ margin: "0.5rem" }} key={index}>
                {text}
              </p>
            );
          })}
        </div>
        <div style={{ position: "absolute", bottom: "20px", width: "100%" }}>
          <DetailButton showDetails={props.closeDetails} text="Close" />
        </div>
      </div>
    </div>
  );
}

export default DetailsModal