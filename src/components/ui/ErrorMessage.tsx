interface ErrorMessageProps {
  messages: string[];
}

const ErrorMessage = ({ messages }: ErrorMessageProps) => {
  return (
    <div className="flex flex-col gap-3">
      {messages.map((message, index) => (
        <div key={index} className="flex items-start gap-3 px-4 py-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-body">
          <span className="mt-0.5">⚠</span>
          <p>{message}</p>
        </div>
      ))}
    </div>
  );
}

export default ErrorMessage;
