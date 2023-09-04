"use client";

import { useState } from "react";
import { Plus, X } from "lucide-react";
import { Dialog } from "@headlessui/react";

import Button from "@/components/ui/button";
import { Color, Size } from "@/types";

import Filter from "./filter";
import IconButton from "@/components/ui/Icon-button";
import { useSearchParams } from "next/navigation";

interface MobileFiltersProps {
  sizes: Size[];
  colors: Color[];
}

const MobileFilters: React.FC<MobileFiltersProps> = ({ sizes, colors }) => {
  const [open, setOpen] = useState(false);
  const searchParams = useSearchParams();
  const colorFiltersSize = searchParams.get("colorId") ?? null;
  const sizesFiltersSize = searchParams.get("sizeId") ?? null;
  const filterSize = [colorFiltersSize, sizesFiltersSize];
  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);
  console.log(sizesFiltersSize, colorFiltersSize);

  return (
    <>
      <Button onClick={onOpen} className="flex items-center gap-x-2 lg:hidden">
        Filters
        {colorFiltersSize ? (
          <div className="rounded-full bg-red-600">
            <span className="p-2">
              {filterSize.filter((length) => length !== null).length}
            </span>
          </div>
        ) : (
          <Plus size={20} />
        )}
      </Button>

      <Dialog
        open={open}
        as="div"
        className="relative z-40 lg:hidden"
        onClose={onClose}
      >
        {/* Background color and opacity */}
        <div className="fixed inset-0 bg-black bg-opacity-25" />

        {/* Dialog position */}
        <div className="fixed inset-0 z-40 flex">
          <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl">
            {/* Close button */}
            <div className="flex items-center justify-end px-4">
              <IconButton icon={<X size={15} />} onClick={onClose} />
            </div>

            <div className="p-4">
              <Filter valueKey="sizeId" name="Sizes" data={sizes} />
              <Filter valueKey="colorId" name="Colors" data={colors} />
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};

export default MobileFilters;
