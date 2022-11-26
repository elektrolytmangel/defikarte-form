import { ProgressBar } from "react-bootstrap";

const CreateProgress = ({ title, progress, animated = true }) => {

  return (
    <div className="my-2 margin-auto">
      <h1>{title}</h1>
      <ProgressBar animated={animated} now={progress} variant='success' />
    </div>
  );
}

export default CreateProgress;