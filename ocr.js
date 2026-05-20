import { createWorker } from 'tesseract.js';
import fs from 'fs';

const ids = [
  "10fIuhZNkcD8QBX9Eh1hOG1ZIzRvq2SUG",
  "16QARxN3Dp25hqPZq_jWYp3LOiy9e_S0z",
  "18FblxLAJlJfDZlx4eGBn091nNpMH2P7L",
  "1C1dl5cI6SaPg8tiDsBHnQz8MVsoQX7xk",
  "1M3eAeXvDDYhbZ8BOlr0wqRwQdTa3vGXY",
  "1VUCGLTuDXYjn_iouio6IPwEGn9Jvd90G",
  "1cQnUXEvwHj3s0DaVNa5fz_-vWipEC-nq"
];

async function check() {
  const worker = await createWorker('eng');
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
