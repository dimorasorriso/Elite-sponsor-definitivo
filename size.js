import sizeOf from 'image-size';

const ids = [
  "10UPEw7AQd_CSLrULLJ4jClOQmc-53OE6",
  "10fIuhZNkcD8QBX9Eh1hOG1ZIzRvq2SUG",
  "16QARxN3Dp25hqPZq_jWYp3LOiy9e_S0z",
  "17ywIbvgmYJH8bQ7Ml9cdipjE9eafvqv0",
  "18FblxLAJlJfDZlx4eGBn091nNpMH2P7L",
  "1C1dl5cI6SaPg8tiDsBHnQz8MVsoQX7xk",
  "1EYGJJJzNLTOnAE19Azo4X5bSqpvRWrJx",
  "1M3eAeXvDDYhbZ8BOlr0wqRwQdTa3vGXY",
  "1VUCGLTuDXYjn_iouio6IPwEGn9Jvd90G",
  "1aIgv87YSKaXiI07zU6p9JqQWmB89mYt7",
  "1cQnUXEvwHj3s0DaVNa5fz_-vWipEC-nq",
  "1dFjrCG-Luf6UFZEHXwNcJ40dJMjN9sbz"
];

async function check() {
  for (const id of ids) {
    try {
      const res = await fetch(`https://drive.google.com/uc?export=download&id=${id}`);
      const buffer = await res.arrayBuffer();
      const dimensions = sizeOf(Buffer.from(buffer));
      console.log(`ID ${id}: ${dimensions.width}x${dimensions.height}`);
    } catch (e) {
      console.log(`ID ${id}: error`);
    }
  }
}
check();
