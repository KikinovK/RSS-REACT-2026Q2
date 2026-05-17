import { CountItem } from "../../types/CoutItem";
import { OPTIONS_COUNT_ITEMS } from "../../utils/const";

interface SelectCountItemProps {
  defaultCount?: CountItem;
  onSelect: (count: CountItem) => void;
}

const SelectCountItem = (
  {
    defaultCount = OPTIONS_COUNT_ITEMS[0],
    onSelect
  }: SelectCountItemProps) => {

  return (
     <div className="flex items-center gap-2 ml-2">
      <select
        defaultValue={defaultCount}
        onChange={(e) =>
        onSelect(Number(e.target.value) as CountItem)}
        className="border border-stardust/30 text-stardust hover:bg-stardust/10 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium rounded-(--radius-buttons) text-body px-6 py-3 text-m">
        {OPTIONS_COUNT_ITEMS.map((option) => (
          <option
            key={option}
            value={option}
            className="text-gray-700"
          >
            {option}
          </option>
        ))}
      </select>
      <span className="text-stardust/70 text-sm ">items per page</span>
    </div>
  );
}

export default SelectCountItem;
