import { ImageContainer } from "./styles"
import Image from 'next/image'

export default function Icon({ src, alt, size, ...props }) {
    return (
        <ImageContainer size={size} {...props}>
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