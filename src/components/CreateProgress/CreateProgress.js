import { ProgressBar } from "react-bootstrap";

const CreateProgress = ({ title, progress }) => {

  return (
    <div className="my-2 margin-auto">
      <h1>{title}</h1>
      <ProgressBar animated now={progress} variant='success' />
    </div>
  );
}

export default CreateProgress;