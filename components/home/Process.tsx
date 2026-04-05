const steps=[
    {
        number:'1',
        title:'Consulta',
        description:'Cuéntanos tus ideas'
    },
    {
        number:'2',
        title:'Diseño',
        description:'Creamos el modelo 3D '
    },
    {
        number:'3',
        title:'Aprobación',
        description:'Revisa y aprueba'
    },
    {
        number:'4',
        title:'Fabricación',
        description:'Fabricamos tu figura'
    },

]

export default function Process(){
    return(
        <section className="md:py-24 text-white px-4 border-gray-900">
            <div className="max-w-7xl mx-auto text-center space-y-10">
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                    Nuestro Proceso
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
                    <div className="hidden lg:block absolute top-8 left-[12%] right-[12%] h-[1px] bg-gray-800 z-0" />
                    {steps.map((step,index)=>(
                        <div key={index} className="flex flex-col items-center space-y-3 relative z-10 group">
                            <div className="w-16 h-16 flex items-center justify-center rounded-full border border-amber-400 bg-[#0a0f1e] group-hover:bg-amber-400 group-hover:text-[#0a0f1e] transition-all duration-300 shadow-[0_0_12px_rgba(251,191,36,0.1)] group-hover:shadow-[0_0_20px_rgba(251,191,36,0.3)]">
                                <span className="text-xl font-bold text-amber-400 group-hover:text-inherit">
                                    {step.number} 
                                </span>
                            </div>
                            <h3 className="text-base font-semibold pt-1 text-white group-hover:text-amber-300 transition-colors">
                                {step.title}
                            </h3>
                            <p className="text-gray-400 text-xs text-center max-w-[180px]">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}