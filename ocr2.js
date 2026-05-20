import { createWorker } from 'tesseract.js';

const ids = [
  "10fIuhZNkcD8QBX9Eh1hOG1ZIzRvq2SUG",
  "1VUCGLTuDXYjn_iouio6IPwEGn9Jvd90G"
];

async function check() {
  const worker = await createWorker('eng');
  await worker.setParameters({
    tessedit_pageseg_mode: 11, // Sparse text
  });
  for (const id of ids) {
    try {
      const res = await fetch(`https://drive.google.com/uc?export=download&id=${id}`);
      const buffer = await res.arrayBuffer();
      const { data: { text } } = await worker.recognize(Buffer.from(buffer));
      console.log(`ID ${id}: ${text.replace(/\n/g, ' ')}`);
    } catch (e) {
      console.log(`ID ${id}: error`);
    }
  }
  await worker.terminate();
}
check();
