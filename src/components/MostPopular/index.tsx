export function MostPopular() {

  return (
    <section className="flex gap-8 py-32 max-[680px]:flex-col">
      <div className="flex-1">
        <h2 className="w-full text-center md:text-end md:max-w-[300px] ml-auto">Serviços Populares</h2>
      </div>

      <div className="flex-1 md:flex-[1.5] mx-auto w-full">
        <div className="container">
          <div className="container-header">
            <span>Extenção clássica</span>
            <span>R$ 25</span>
          </div>
          <div className="container-info">
          <span className="block">1 artificial one is superimposed on each of its eyelashes.</span>
            <span className="block">Duration 1.5-2 hours</span>
          </div>
        </div>

        <div className="container">
          <div className="container-header">
            <span>Volume 2D</span>
            <span>R$ 28</span>
          </div>
          <div className="container-info">
            <span className="block">1 artificial one is superimposed on each of its eyelashes.</span>
            <span className="block">Duration 1.5-2 hours</span>
          </div>
        </div>

        <div className="container">
          <div className="container-header">
            <span>Volume 3d</span>
            <span>R$ 35</span>
          </div>
          <div className="container-info">
            <span className="block">1 artificial one is superimposed on each of its eyelashes.</span>
            <span className="block">Duration 1.5-2 hours</span>
          </div>
        </div>

        <div className="container">
          <div className="container-header">
            <span>hollywood volume</span>
            <span>R$ 40</span>
          </div>
          <div className="container-info">
            <span className="block">1 artificial one is superimposed on each of its eyelashes.</span>
            <span className="block">Duration 1.5-2 hours</span>
          </div>
        </div>
        <button 
          className="bg-bg-primary hover:bg-button-primary text-contrast transition-all duration-300 mt-4">
          marcar
        </button>
      </div>
    </section>
  )
}
