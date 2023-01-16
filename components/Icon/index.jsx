import { ImageContainer } from "./styles"
import Image from 'next/image'

export default function Icon({ src, alt, size }) {
    return (
        <ImageContainer size={size}>
            <Image
                src={src}
                alt={alt}
                width={100}
                height={100}
                layout='responsive'
            />
        </ImageContainer>
    )
}