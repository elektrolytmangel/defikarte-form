import { ProgressBar } from "react-bootstrap";

type Props = {
  title: string,
  progress: number,
  animated?: boolean
}

const CreateProgress = ({ title, progress, animated = true }: Props) => {

  return (
    <div className="my-2 margin-auto">
      <h1>{title}</h1>
      <ProgressBar animated={animated} now={progress} variant='success' />
    </div>
  );
}

export default CreateProgress;