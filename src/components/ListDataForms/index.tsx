import type { FormSubmission } from "../../store/formStore";

interface ListDataFormsProps {
  submissions: FormSubmission[];
}

const ListDataForms = ({ submissions }: ListDataFormsProps) => {
  return (
    <ul className="mt-4 text-sm text-stardust/80">
      {submissions.map((submission) => (
        <li key={submission.id} className="mb-4 p-4 border border-stardust/20 rounded">
          <div className="grid grid-cols-2 gap-2">
            <span className="font-semibold col-span-2">ID: {submission.id}</span>
            <span className="font-semibold">Name: {submission.data.name}</span>
            <span className="font-semibold">Email: {submission.data.email}</span>
            <span className="font-semibold">Age: {submission.data.age}</span>
            <span className="font-semibold">Gender: {submission.data.gender}</span>
            <span className="font-semibold">Terms: {submission.data.terms ? 'Accepted' : 'Not accepted'}</span>
            <span className="text-xs text-stardust/60 col-span-2">
              Submitted at: {new Date(submission.timestamp).toLocaleString()}
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ListDataForms;
