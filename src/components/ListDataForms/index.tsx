import { useEffect, useState } from "react";

import type { FormSubmission } from "../../store/formStore";

interface ListDataFormsProps {
  submissions: FormSubmission[];
}

const FRESH_BORDER_THRESHOLD_MS = 45 * 1000;

const ListDataForms = ({ submissions }: ListDataFormsProps) => {
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    // Re-render every 15s so submissions older than 45s lose the green border.
    const intervalId = window.setInterval(() => {
      setNow(Date.now());
    }, 15 * 1000);
    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <ul className="w-full mt-4 text-sm text-stardust/80">
      {submissions.slice().reverse().map((submission) => {
        const isFresh = now - submission.timestamp <= FRESH_BORDER_THRESHOLD_MS;
        const borderClass = isFresh
          ? "border-guidepost-green bg-guidepost-green/10"
          : "border-stardust/20";
        return (
          <li
            key={submission.id}
            className={`mb-4 p-4 border rounded ${borderClass}`}
          >
            <div className="grid grid-cols-2 gap-2">
              <span className="font-semibold col-span-2">ID: {submission.id}</span>
              <span className="font-semibold"><strong>Name:</strong> {submission.data.name}</span>
              <span className="font-semibold"><strong>Email:</strong> {submission.data.email}</span>
              <span className="font-semibold"><strong>Age:</strong> {submission.data.age}</span>
              <span className="font-semibold"><strong>Gender:</strong> {submission.data.gender}</span>
              <span className="font-semibold"><strong>Country:</strong> {submission.data.country}</span>
              <span className="font-semibold"><strong>Password:</strong> {submission.data.password}</span>
              <span className="font-semibold"><strong>Confirm Password:</strong> {submission.data.confirmPassword}</span>
              <span className="font-semibold"><strong>Terms:</strong> {submission.data.terms ? 'Accepted' : 'Not accepted'}</span>
              {submission.data.image && (
                <div className="col-span-2 flex flex-col gap-1">
                  <span className="font-semibold"><strong>Image:</strong></span>
                  <img
                    src={submission.data.image}
                    alt={`Profile image of ${submission.data.name}`}
                    className="max-h-100 rounded border border-stardust/20 object-contain"
                  />
                </div>
              )}
              <span className="text-xs text-stardust/60 col-span-2">
                Submitted at: {new Date(submission.timestamp).toLocaleString()}
              </span>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default ListDataForms;
