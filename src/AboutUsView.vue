<template>
  <div class="bg-slate-50 min-h-screen font-sans overflow-hidden selection:bg-orange-500 selection:text-white">
    <!-- HERO SECTION -->
    <section class="relative bg-slate-950 pt-28 pb-32 px-6 lg:px-12 flex items-center justify-center min-h-[70vh]">
      <!-- Background pattern/image -->
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-br from-blue-950 via-slate-900 to-slate-950 opacity-90 z-10"></div>
        <img src="/mundo.jpg" alt="Fondo MundoVinyl" class="w-full h-full object-cover scale-105 opacity-40 mix-blend-overlay blur-sm" />
        <!-- decorative gradients -->
        <div class="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] bg-orange-500/20 rounded-full blur-[120px] z-10 pointer-events-none"></div>
        <div class="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px] z-10 pointer-events-none"></div>
      </div>

      <div class="container mx-auto relative z-20 max-w-6xl">
        <nav class="flex items-center justify-center gap-x-3 text-sm mb-8 text-blue-200/70 font-medium">
          <router-link to="/" class="hover:text-orange-400 transition-colors duration-300">Inicio</router-link>
          <span class="w-1 h-1 rounded-full bg-blue-500"></span>
          <span class="text-white">Quiénes Somos</span>
        </nav>
        
        <div class="text-center max-w-4xl mx-auto space-y-6">
          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-4">
            <span class="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
            <span class="text-orange-100 text-sm font-semibold tracking-wide uppercase">Líderes en Venezuela</span>
          </div>
          
          <h1 class="text-5xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-slate-400 leading-[1.1] tracking-tight">
            Pasión por la <span class="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Impresión</span><br />
            Compromiso con tu <span class="relative whitespace-nowrap">
              <span class="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Éxito</span>
              <svg class="absolute -bottom-2 left-0 w-full h-3 text-orange-500 opacity-50" viewBox="0 0 100 20" preserveAspectRatio="none"><path d="M0 10 Q 50 20 100 10" stroke="currentColor" stroke-width="4" fill="none"/></svg>
            </span>
          </h1>
          
          <p class="mt-8 text-lg md:text-2xl text-slate-300 font-light max-w-3xl mx-auto leading-relaxed">
            Transformamos ideas en realidades impresas de alto impacto con tecnología de vanguardia y consumibles de calidad superior.
          </p>
        </div>
      </div>
    </section>

    <!-- STATS (Floating overlay) -->
    <div class="relative z-30 container mx-auto px-6 max-w-6xl -mt-16">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 bg-white/70 backdrop-blur-xl p-4 md:p-8 rounded-3xl shadow-2xl shadow-blue-900/10 border border-white">
        <div v-for="(stat, index) in stats" :key="stat.label" 
             class="group flex flex-col items-center justify-center p-4 rounded-2xl hover:bg-white transition-all duration-300">
          <div class="text-4xl md:text-5xl font-black text-slate-800 mb-2 group-hover:text-orange-500 transition-colors duration-300 group-hover:scale-110 transform">
            {{ stat.value }}
          </div>
          <div class="text-xs md:text-sm text-slate-500 uppercase tracking-widest font-bold text-center">
            {{ stat.label }}
          </div>
        </div>
      </div>
    </div>

    <!-- OUR IDENTITY SECTION -->
    <section class="py-24 md:py-32 px-6">
      <div class="container mx-auto max-w-7xl">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <!-- Images composition -->
          <div class="relative w-full aspect-square md:aspect-auto md:h-[600px] group">
            <div class="absolute inset-0 bg-gradient-to-tr from-blue-900 to-orange-500 rounded-[2.5rem] transform -rotate-3 scale-105 opacity-20 group-hover:rotate-0 group-hover:scale-100 transition-all duration-700 ease-out"></div>
            <div class="relative h-full w-full rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white transform transition-transform duration-700 group-hover:-translate-y-2">
              <img src="/logo2.png" alt="Nuestra Identidad MundoVinyl" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-in-out" />
              <div class="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
            </div>
            
            <!-- Floating badge -->
            <div class="absolute -bottom-8 -right-4 md:bottom-12 md:-right-12 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-xs transform hover:scale-105 transition-transform duration-300 z-10">
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <div>
                  <h4 class="font-bold text-slate-800">Calidad Superior</h4>
                  <p class="text-sm text-slate-500 leading-tight mt-1">Garantizada en cada producto que distribuimos.</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Text content -->
          <div class="space-y-8">
            <div class="inline-flex items-center gap-2">
              <span class="w-8 h-1 bg-orange-500 rounded-full"></span>
              <span class="text-orange-600 font-bold uppercase tracking-widest text-sm">Nuestra Identidad</span>
            </div>
            
            <h2 class="text-4xl md:text-5xl font-extrabold text-slate-900 leading-[1.1] tracking-tight">
              Más que proveedores, somos tus <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-500">aliados estratégicos</span>
            </h2>
            
            <div class="prose prose-lg text-slate-600">
              <p class="text-xl text-slate-700 font-medium leading-relaxed">
                En <strong class="text-blue-900">MundoVinyl</strong>, lideramos la distribución de insumos y materiales de alta gama para la industria gráfica y publicitaria en toda Venezuela.
              </p>
              <p>
                Desde nuestra fundación en el año <strong>2011</strong>, hemos entendido que cada emprendedor y cada marca busca plasmar su visión con la mejor calidad posible. Por ello, no solo vendemos productos; entregamos soluciones tecnológicas que transforman ideas en realidades impresas de alto impacto.
              </p>
              <div class="pl-6 border-l-4 border-orange-500 mt-8 py-2">
                <p class="text-lg italic text-slate-700 m-0">
                  Contamos con un equipo técnico altamente capacitado para ofrecerte el respaldo que necesitas, asegurando que tu inversión se traduzca en resultados profesionales constantes.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- MISSION AND VISION -->
    <section class="py-24 bg-slate-900 text-white relative overflow-hidden">
      <!-- Decoraciones de fondo -->
      <div class="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-[150px] pointer-events-none"></div>
      <div class="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/4 w-[600px] h-[600px] bg-orange-600/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div class="container mx-auto px-6 max-w-7xl relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          <!-- Misión -->
          <div class="group relative p-10 md:p-14 bg-white/5 backdrop-blur-lg border border-white/10 rounded-[2rem] hover:bg-white/10 transition-colors duration-500 overflow-hidden">
            <div class="absolute top-0 right-0 p-8 text-white/5 group-hover:text-white/10 group-hover:scale-125 transition-all duration-700 transform origin-top-right">
              <svg class="w-48 h-48" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m-5-9h10v2H7z"/></svg>
            </div>
            
            <div class="relative z-10">
              <div class="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center text-2xl font-black shadow-lg shadow-orange-500/30 mb-8 transform group-hover:-rotate-6 transition-transform duration-300">
                01
              </div>
              <h3 class="text-3xl md:text-4xl font-extrabold mb-6 tracking-tight">Nuestra Misión</h3>
              <p class="text-lg md:text-xl text-slate-300 leading-relaxed font-light">
                Impulsar el crecimiento del sector publicitario venezolano mediante el acceso a tecnologías de vanguardia y consumibles de calidad superior, brindando asesoría personalizada que garantice la rentabilidad de nuestros clientes.
              </p>
            </div>
          </div>

          <!-- Visión -->
          <div class="group relative p-10 md:p-14 bg-gradient-to-br from-blue-900 to-blue-950 border border-blue-800 rounded-[2rem] shadow-2xl hover:shadow-blue-900/50 transition-all duration-500 overflow-hidden">
            <div class="absolute top-0 right-0 p-8 text-white/5 group-hover:text-white/10 group-hover:scale-125 transition-all duration-700 transform origin-top-right">
              <svg class="w-48 h-48" fill="currentColor" viewBox="0 0 24 24"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5M12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5"/></svg>
            </div>
            
            <div class="relative z-10">
              <div class="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-blue-900 text-2xl font-black shadow-lg mb-8 transform group-hover:rotate-6 transition-transform duration-300">
                02
              </div>
              <h3 class="text-3xl md:text-4xl font-extrabold mb-6 tracking-tight">Nuestra Visión</h3>
              <p class="text-lg md:text-xl text-blue-100 leading-relaxed font-light">
                Ser el referente nacional indiscutible en la industria gráfica, reconocidos por nuestra innovación constante y por ser la primera opción de cada emprendedor que inicia su camino en el mundo de la personalización y el diseño.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- CORE VALUES -->
    <section class="py-24 md:py-32 px-6 bg-slate-50">
      <div class="container mx-auto max-w-7xl">
        <div class="text-center max-w-3xl mx-auto mb-20">
          <h2 class="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-6">Valores que nos definen</h2>
          <p class="text-xl text-slate-600">Pilares fundamentales que guían cada decisión, producto y servicio que entregamos a nuestros clientes.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="(value, index) in values" :key="value.title" 
               class="bg-white rounded-[2rem] p-10 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-slate-100 group">
            <div class="w-20 h-20 bg-slate-50 rounded-2xl flex items-center justify-center text-4xl mb-8 group-hover:bg-orange-50 group-hover:scale-110 transition-all duration-500">
              {{ value.icon }}
            </div>
            <h4 class="text-2xl font-bold text-slate-900 mb-4 tracking-tight">{{ value.title }}</h4>
            <p class="text-slate-600 leading-relaxed text-lg">
              {{ value.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA SECTION -->
    <section class="py-12 px-6 pb-24">
      <div class="container mx-auto max-w-6xl">
        <div class="relative bg-gradient-to-r from-orange-500 to-orange-600 rounded-[3rem] p-10 md:p-16 lg:p-20 overflow-hidden shadow-2xl shadow-orange-500/30 flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left">
          
          <!-- Patrón decorativo -->
          <div class="absolute inset-0 opacity-10" style="background-image: radial-gradient(white 2px, transparent 2px); background-size: 30px 30px;"></div>
          <div class="absolute right-0 top-0 w-64 h-full bg-white/10 skew-x-12 translate-x-16 backdrop-blur-sm pointer-events-none"></div>
          
          <div class="relative z-10 max-w-2xl">
            <h3 class="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight leading-tight">
              ¿Listo para llevar tu negocio al siguiente nivel?
            </h3>
            <p class="text-xl text-orange-50 font-medium">
              Descubre nuestro catálogo completo de materiales e insumos profesionales.
            </p>
          </div>
          
          <div class="relative z-10 flex-shrink-0">
            <router-link to="/productos" class="group inline-flex items-center gap-3 px-8 py-5 bg-slate-900 text-white text-lg font-bold rounded-full hover:bg-slate-800 transition-all duration-300 shadow-xl shadow-slate-900/30 transform hover:-translate-y-1">
              Ver Catálogo
              <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </router-link>
          </div>

        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
const stats = [
  { label: 'Años de Experiencia', value: '13+' },
  { label: 'Productos Activos', value: '1.5k+' },
  { label: 'Clientes Felices', value: '5k+' },
  { label: 'Tiendas Físicas', value: '3' }
];

const values = [
  { 
    title: 'Excelencia', 
    icon: '🏆', 
    description: 'No aceptamos menos que lo mejor. Seleccionamos rigurosamente cada rollo de vinil y cada máquina que distribuimos para asegurar resultados de primer nivel.' 
  },
  { 
    title: 'Soporte Real', 
    icon: '🛠️', 
    description: 'Nuestra relación no termina en la venta. Ofrecemos asesoría técnica continua, rápida y efectiva para que nunca dejes de producir.' 
  },
  { 
    title: 'Innovación', 
    icon: '🚀', 
    description: 'Estamos siempre a la caza de las últimas tendencias tecnológicas mundiales en impresión, DTF y sublimación para traértelas a Venezuela.' 
  }
];
</script>

<style scoped>
::selection {
  background-color: #f97316;
  color: white;
}
</style>