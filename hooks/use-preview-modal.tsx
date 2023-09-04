import { Product } from "@/types";
import { create } from "zustand";

interface PreviewModalProps {
  isOpen: boolean;
  onOpen: (data: Product) => void;
  onClose: () => void;
  data?: Product;
}

const usePreviewModal = create<PreviewModalProps>((set) => ({
  isOpen: false,
  data: undefined,
  onOpen: (data) => set({ isOpen: true, data }),
  onClose: () => set({ isOpen: false }),
}));

export default usePreviewModal;
