import "./detailField.css";

type DetailFieldProps = {
  header: string;
  data: React.ReactNode;
};

const DetailField = ({ header, data }: DetailFieldProps) => {
  return (
    <div className="detail-field-div">
      <p className="detail-field-header">{header}</p>
      <p className="detail-field-data">{data}</p>
    </div>
  );
};

export default DetailField;
