import { Dialog } from "@headlessui/react";
import { Icon } from "@/interfaces";
import { IconCode } from ".";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

interface ModalProps {
  icon: Icon;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ icon, onClose }) => {
  const [zoomedIcon, setZoomedIcon] = useState<string | null>(null);

  return (
    <Dialog open={true} onClose={onClose} className="relative z-50">
      <div
        className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm"
        aria-hidden="true"
      />

      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="mx-auto max-w-2xl w-full rounded-2xl bg-white shadow-[0_0_50px_-12px] shadow-purple-500/10 border border-slate-200 max-h-[90vh] overflow-y-auto">
          <div className="sticky top-0 right-0 z-10 bg-white/80 backdrop-blur-xl py-4 px-8">
            <button
              onClick={onClose}
              className="absolute right-4 top-4 p-2 rounded-full text-slate-400 hover:text-slate-500 hover:bg-slate-100/80 transition-colors"
            >
              <IoClose className="w-6 h-6" />
            </button>
          </div>

          <div className="px-8 pb-8">
            {/* Icon preview */}
            <div className="flex items-center gap-8 mb-10">
              <div className="p-8 bg-gradient-to-b from-slate-100 to-white rounded-2xl shadow-sm border border-slate-200">
                <i
                  className={`ci ci-${icon.classes[0]} ci-4x text-slate-700`}
                />
              </div>
              <div className="flex flex-col">
                <Dialog.Title className="text-2xl font-semibold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  {icon.name}
                </Dialog.Title>
                <p className="text-sm text-slate-500 mt-2">{icon.url}</p>
              </div>
            </div>

            {/* Code section */}
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-base font-semibold text-slate-900">
                  Usage Guide
                </h3>
                <p className="text-sm text-slate-400">
                  Copy and paste the following code into your HTML or JSX to use
                  this icon:
                </p>
              </div>
              <div className="space-y-4">
                {icon.classes.map((iconClass) => (
                  <div
                    key={iconClass}
                    className="bg-gray-200 py-5 px-1 rounded-xl flex items-center gap-4 shadow-sm"
                  >
                    <div className="h-[40px] flex items-center">
                      <div
                        className="p-4 bg-gray-200 rounded-lg cursor-pointer transition-all duration-200"
                        onMouseEnter={() => setZoomedIcon(iconClass)}
                        onMouseLeave={() => setZoomedIcon(null)}
                      >
                        <i
                          className={`ci ci-${iconClass} ci-2x text-gray-800`}
                        />
                      </div>
                    </div>
                    <div className="flex-1">
                      <IconCode iconClass={iconClass} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </div>

      {/* Zoomed icon overlay */}
      {zoomedIcon && (
        <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-[60]">
          <div className="p-8 bg-gray-300 rounded-xl shadow-xl sm:scale-[2] scale-125">
            <i className={`ci ci-${zoomedIcon} ci-4x text-gray-800`} />
          </div>
        </div>
      )}
    </Dialog>
  );
};

export default Modal;
