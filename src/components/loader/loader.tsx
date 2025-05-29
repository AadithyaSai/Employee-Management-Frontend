import "./loader.css";

type LoaderProps = {
  isVisible: boolean;
};

const Loader = ({ isVisible }: LoaderProps) => {
  return (
    <div className={`loader-bg ` + (isVisible ? "" : "disappear")}>
      <div className="loader-container">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
          <linearGradient id="a11">
            <stop offset="0" stopColor="#03AEEE" stopOpacity="0"></stop>
            <stop offset="1" stopColor="#03AEEE"></stop>
          </linearGradient>
          <circle
            fill="none"
            stroke="url(#a11)"
            strokeWidth="15"
            strokeLinecap="round"
            strokeDasharray="0 44 0 44 0 44 0 44 0 360"
            cx="100"
            cy="100"
            r="70"
            transform-origin="center"
          ></circle>
        </svg>
      </div>
    </div>
  );
};

export default Loader;
