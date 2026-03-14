interface CardProps {
  top: string
  center: string
  bottom: string
}

export function Cardf({ top, center, bottom }: CardProps) {
  return (
    <div className="container noselect">
      <div className="canvas">

        <div className="tracker tr-1"></div>
        <div className="tracker tr-2"></div>
        <div className="tracker tr-3"></div>
        <div className="tracker tr-4"></div>
        <div className="tracker tr-5"></div>
        <div className="tracker tr-6"></div>
        <div className="tracker tr-7"></div>
        <div className="tracker tr-8"></div>
        <div className="tracker tr-9"></div>

        <div id="card">
          <div className="card-content">

            <div className="card-glare"></div>

            <div className="cyber-lines">
              <span></span><span></span><span></span><span></span>
            </div>

            <div className="title">{top}</div>

            <p className="description">
              {center}
            </p>

            <div className="glowing-elements">
              <div className="glow-1"></div>
              <div className="glow-2"></div>
              <div className="glow-3"></div>
            </div>

            <div className="subtitle">
              <span>{bottom}</span>
            </div>

            <div className="card-particles">
              <span></span><span></span><span></span>
              <span></span><span></span><span></span>
            </div>

            <div className="corner-elements">
              <span></span><span></span><span></span><span></span>
            </div>

            <div className="scan-line"></div>

          </div>
        </div>

      </div>
    </div>
  )
}