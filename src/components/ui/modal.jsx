'use client';

export const Modal = ({
  content,
  innerHTML,
  modalOpen,
  closeModal,
  modalHeader,
}) => {
  // console.log(verse);
  return (
    <>
      <dialog className="modal" open={modalOpen}>
        <div
          onClick={closeModal}
          className="bg-black/30 backdrop-blur absolute inset-0"
        ></div>
        <div className="modal-box max-w-3xl p-6 md:p-10">
          <form method="dialog">
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 cursor-pointer"
              aria-label="close"
              onClick={closeModal}
            >
              ✕
            </button>
          </form>
          <div>{modalHeader}</div>
          {innerHTML ? (
          <div
            className="py-4 border-y mt-4 border-dashed border-primary/20"
            dangerouslySetInnerHTML={{
              __html: content,
            }}
          />
          ) : (
            <div>{content}</div>
          )}
        </div>
      </dialog>
    </>
  );
};
