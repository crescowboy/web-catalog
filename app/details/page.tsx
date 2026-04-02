export default function DetallesProximamente() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white flex flex-col items-center justify-center p-10">
      <h1 className="text-4xl font-bold mb-4 text-blue-500 underline">Página de Detalle</h1>
      <p className="text-gray-400 text-xl">Estamos trabajando en los detalles técnicos de este producto. ¡Vuelve pronto!</p>
      <a href="/" className="mt-8 text-blue-400 hover:text-white transition-colors">
        ← Volver al catálogo
      </a>
    </main>
  );
}