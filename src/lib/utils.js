export const wrapInParagraphs = (text) => {
  const sentences = text.split('. ');
  const paragraphs = [];

  for (let i = 0; i < sentences.length; i += 4) {
    const chunk = sentences.slice(i, i + 4);
    const paragraph = chunk.join('. ');
    paragraphs.push(`<p class="paragraph" style='margin-bottom: 20px; display: inline-block;'>${paragraph}<span>.</span></p>`);
  }

  return paragraphs.join('');
};