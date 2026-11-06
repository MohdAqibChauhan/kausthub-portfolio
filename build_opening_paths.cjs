const fs = require('fs');
const wawoff2 = require('wawoff2');
const opentype = require('opentype.js');

async function generate() {
  const tanWoff2 = fs.readFileSync('public/fonts/TANMEMORIES-Regular.woff2');
  const tanTtf = await wawoff2.decompress(tanWoff2);
  const tanFont = opentype.parse(tanTtf.buffer.slice(tanTtf.byteOffset, tanTtf.byteOffset + tanTtf.byteLength));

  const helvWoff2 = fs.readFileSync('public/fonts/HelveticaNeueLTPro-Md.woff2');
  const helvTtf = await wawoff2.decompress(helvWoff2);
  const helvFont = opentype.parse(helvTtf.buffer.slice(helvTtf.byteOffset, helvTtf.byteOffset + helvTtf.byteLength));

  const titleText = 'KAUSTUBH GONDHALI';
  const subText = 'GRAPHICS DESIGNER | VIDEO EDITOR | MOTION GRAPHICS';

  const titleSize = 130;
  const titleWidth = tanFont.getAdvanceWidth(titleText, titleSize);
  const titleX = (1652 - titleWidth) / 2;
  const titleY = 142;

  const subSize = 25;
  const subWidth = helvFont.getAdvanceWidth(subText, subSize);
  const subX = (1652 - subWidth) / 2;
  const subY = 205;

  const titlePath = tanFont.getPath(titleText, titleX, titleY, titleSize);
  const subPath = helvFont.getPath(subText, subX, subY, subSize);

  const titleD = titlePath.toPathData(2);
  const subD = subPath.toPathData(2);

  return { titleD, subD };
}

module.exports = { generate };
