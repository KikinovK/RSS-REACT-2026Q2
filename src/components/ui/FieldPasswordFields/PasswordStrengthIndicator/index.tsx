import { useMemo } from "react";
import { passwordRequirements } from "../../../../validate";

const PasswordStrengthIndicator = ({ password }: { password: string }) => {
  const { passedCount, color } = useMemo(() => {
    const passedCount = passwordRequirements.reduce((count, req) => {
      return req.validator(password) ? count + 1 : count;
    }, 0);
    const totalCount = passwordRequirements.length;
    const pct = totalCount > 0 ? (passedCount / totalCount) * 100 : 0;

    const hue = (pct / 100) * 120;
    const clr = `hsl(${hue}, 70%, 50%)`;

    return { passedCount: passedCount, color: clr };
  }, [password]);

  if (!password) return null;

  return (
    <div className="mt-2">
      <div className="flex gap-1 mb-1">
        {passwordRequirements.map((_, index) => (
          <div
            key={index}
            className="h-1 flex-1 rounded-full transition-colors duration-200"
            style={{
              backgroundColor: index < passedCount ? color : '#374151',
            }}
          />
        ))}
      </div>
      <div className="flex flex-wrap gap-2">
        {passwordRequirements.map((req, index) => {
          const isPassed = req.validator(password);
          return (
            <div
              key={index}
              className="flex items-center gap-1 text-xs"
              style={{ color: isPassed ? color : '#9CA3AF' }}
            >
              <span>{isPassed ? '✓' : '○'}</span>
              <span>{req.message}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PasswordStrengthIndicator;
