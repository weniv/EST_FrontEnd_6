import sharp from "sharp";
import fs from 'fs';

type Options = {
    text?: string;
    position?: string;
    color?: string;
    fontSize?: number;
}


export function watermarkPlugin(options?: Options) {

    const defaultOptions = {
        text: 'weniv',
        position: 'center',
        color: '#ffffff',
        fontSize: 50
    };

    const mergedOptions = {
        ...defaultOptions,
        ...options
    }


    return {
        name: 'vite-plugin-image-watermark',
        // src : 파일의 소스코드, id: 파일의 경로
        async transform(src, id) {
            console.log('파일 경로: ', id);

            // 이미지파일에서만 작동하도록 필터링
            if (!/\.(png|jpg|jpeg|gif|svg)$/.test(id)) {
                return;
            }

            try {
                // 버퍼 객체를 반환합니다.
                const imageBuffer = fs.readFileSync(id);

                // 샤프 이미지 객체 생성
                const image = sharp(imageBuffer);

                const metadata = await image.metadata();

                const svgText = `
          <svg width="${metadata.width}" height="${metadata.height}">
            <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle"
                  font-size="${mergedOptions.fontSize}" fill="${mergedOptions.color}" font-family="sans-serif">
              ${mergedOptions.text}
            </text>
          </svg>
        `;

                // 원본 이미지와 svg를 합성한 이미지 버퍼를 생성합니다.
                const processedImageBuffer = await image.composite([{ input: Buffer.from(svgText) }]).toBuffer();

                const base64Image = `data:image/${metadata.format};base64,${processedImageBuffer.toString('base64')}`;

                return `export default "${base64Image}"`;
            } catch (error) {
                console.error(error.message);
            }

        }
    }
}