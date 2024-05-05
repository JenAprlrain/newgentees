import { Menu } from "@headlessui/react";
import { CaretDown } from "@phosphor-icons/react";

interface DropdownArgs {
  label: string;
  items: string[];
  selectedItem: string;
  onSelectChange: (item: string) => void;
}

export const Dropdown = ({
  label,
  items,
  selectedItem,
  onSelectChange,
}: DropdownArgs) => (
  <div className="flex flex-row">
    <Menu as="div" className="relative z-10">
      <Menu.Button>
        <div className="flex flex-row gap-2 relative z-10">
          <div>{label}</div>
          <div className="text-matrix-green">{selectedItem}</div>
          <CaretDown />
        </div>
      </Menu.Button>
      <Menu.Items className="absolute flex flex-col bg-black rounded-md border border-matrix-green right-0 z-10">
        {items.map((item) => (
          <Menu.Item key={item}>
            {({ active }) => (
              <button
                onClick={() => onSelectChange(item)}
                className={`${
                  active ? "bg-black text-matrix-green" : "bg-black"
                }`}
              >
                {item}
              </button>
            )}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  </div>
);
