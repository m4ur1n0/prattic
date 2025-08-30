import Link from "next/link";


const SketchButtonExternalLink = ({ vectorFile, width, href, label, fontSize="sm", height = 60 }) => {




    return (
        <Link
            href={href}
            className="static-render-sketch-button relative cursor-pointer button-shadow hover:bg-black/5 transition-colors duration-200 ease-in-out focus:outline-2 focus:outline-offset-2 focus:outline-app-black"
            style={{
                width: `${width}px`,
                height: `${height}px`
            }}
            target="_blank"
        >
            {/* bg sketch image */}
            <img
                src={`vectors/${vectorFile}`}
                alt="rough sketch button with label"
                className="absolute inset-0 w-full h-full object-cover"
                loading='eager'
            />
    
            {/* label - stay centered */}
            <p
                className={`absolute inset-0 flex items-center justify-center font-bold text-center leading-none text-${fontSize}`}
                style={{
                padding: 0,
                margin: 0
                }}
            >
                {label}
            </p>
        </Link>
    );
}
  

export default SketchButtonExternalLink