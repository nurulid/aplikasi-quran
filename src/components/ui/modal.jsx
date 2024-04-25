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

export const Moodal = ({
  verse,
  modalOpen,
  closeModal,
  modalHeader,
  tafsirSurah,
}) => {
  // console.log(verse);
  return (
    <>
      <dialog className="modal" open={modalOpen}>
        <div
          onClick={closeModal}
          className="bg-black/30 backdrop-blur absolute inset-0"
        ></div>
        <div className="modal-box max-w-3xl p-10 pb-0">
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
          <div
            className="py-4"
            dangerouslySetInnerHTML={{
              __html: insertLineBreaks(tafsirSurah.text[verse?.number]),
            }}
          />
        </div>
      </dialog>
    </>
  );
};
