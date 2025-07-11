

const SketchButton = ({ children }) => (
    <div className="relative inline-block w-[200px] h-[60px]">
      <svg
        viewBox="0 0 200 60"
        className="absolute top-0 left-0 w-full h-full z-0"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern
            id="chalkStroke"
            patternUnits="userSpaceOnUse"
            width="32"
            height="32"
          >
            <image
              href="/textures/chalk-stroke.png"
              x="0"
              y="0"
              width="32"
              height="32"
            />
          </pattern>
        </defs>
        <rect
          x="2"
          y="2"
          width="196"
          height="56"
          rx="10"
          ry="10"
          fill="none"
          stroke="url(#chalkStroke)"
          strokeWidth="4"
        />
      </svg>
  
      <button className="relative z-10 w-full h-full rounded-lg text-black font-medium">
        {children}
      </button>
    </div>
  );
  

export default SketchButton