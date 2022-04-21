import "./loadingpage.css";

function LoadingPage() {
  return (
    <div
      className="page"
      style={{ backgroundColor: "black", color: "white", display: "flex" }}
    >
      <div
        style={{
          margin: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          <label className="inline-block-label" style={{ fontSize: "1.5rem" }}>
            Loading
          </label>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoadingPage;
