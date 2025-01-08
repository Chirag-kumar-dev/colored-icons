import { HiChevronUpDown } from "react-icons/hi2";
import { Listbox } from "@headlessui/react";

interface ListboxButtonProps {
  selectedCategory: { name: string };
}

const ListboxButton: React.FC<ListboxButtonProps> = ({ selectedCategory }) => {
  return (
    <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-3.5 pl-4 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-gray-300 hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400">
      <span className="block truncate font-medium">
        {selectedCategory.name}
      </span>
      <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
        <HiChevronUpDown className="h-5 w-5 text-gray-400" aria-hidden="true" />
      </span>
    </Listbox.Button>
  );
};

export default ListboxButton;
