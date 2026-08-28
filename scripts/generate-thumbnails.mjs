import fs from 'fs';
import path from 'path';
import { spawnSync } from 'child_process';
import ffmpegPath from 'ffmpeg-static';

const videoDir = path.resolve('public/media/videos');
const outputDir = path.resolve('public/media/images/thumbnails');

fs.mkdirSync(outputDir, { recursive: true });

const videoExtensions = ['.mp4', '.mov', '.webm', '.m4v'];

const videos = fs
  .readdirSync(videoDir)
  .filter((file) =>
    videoExtensions.includes(path.extname(file).toLowerCase())
  );

console.log(`Found ${videos.length} videos.`);

for (const file of videos) {
  const input = path.join(videoDir, file);

  const baseName = path.basename(file, path.extname(file));

  const output = path.join(
    outputDir,
    `${baseName}.jpg`
  );

  console.log(`Creating thumbnail: ${baseName}.jpg`);

  const result = spawnSync(
    ffmpegPath,
    [
      '-y',

      // Video ke start ka black frame avoid karne ke liye
      '-ss',
      '00:00:01.500',

      '-i',
      input,

      // Sirf 1 frame
      '-frames:v',
      '1',

      // Website-friendly thumbnail size
      '-vf',
      'scale=1280:-2',

      // JPEG quality
      '-q:v',
      '2',

      output,
    ],
    {
      stdio: 'inherit',
    }
  );

  if (result.status !== 0) {
    console.error(`Failed: ${file}`);
  }
}

console.log('\n✅ ALL THUMBNAILS CREATED');
console.log(outputDir);