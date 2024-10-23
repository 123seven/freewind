"use client";
import { createContext, useState, ReactNode, useContext } from "react";

// 定义 Context 的类型
interface ModalContextType {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

// 创建 Context
const ModalContext = createContext<ModalContextType | undefined>(undefined);

// Provider 组件
export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <ModalContext.Provider value={{ isModalOpen, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

// 使用 Context 的 Hook
export const useModal = () => {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error("useModal must be used within an ModalProvider");
  }
  return context;
};
