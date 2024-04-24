'use client';

const insertLineBreaks = (text) => {
  const sentences = text.split('. ');
  const paragraphs = [];

  for (let i = 0; i < sentences.length; i += 4) {
    const chunk = sentences.slice(i, i + 4);
    const paragraph = chunk.join('. ') + '.';
    paragraphs.push(`<p style='margin-bottom: 20px;'>${paragraph}</p>`);
  }

  return paragraphs.join('');
};

export const Moodal = ({ modalId, modalContent, btnTitle, modalHeader }) => {
  return (
    <>
      <button
        className="btn btn-outline btn-sm"
        onClick={() => document.getElementById(`modal_${modalId}`).showModal()}
      >
        {btnTitle}
      </button>
      <dialog id={`modal_${modalId}`} className="modal">
        <div className="modal-box max-w-3xl p-10 pb-0">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <div>{modalHeader}</div>
          <div
            className="py-4"
            dangerouslySetInnerHTML={{ __html: insertLineBreaks(modalContent) }}
          />
        </div>
      </dialog>
    </>
  );
};
