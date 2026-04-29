<template>
  <div class="bg-slate-50 font-sans selection:bg-orange-500 selection:text-white">
    
    <!-- HERO SECTION PREMIUM -->
    <section class="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-slate-950">
      <div class="absolute inset-0 z-0">
        <img src="/mundo.jpg" alt="Hero Background" class="w-full h-full object-cover opacity-40 scale-105 animate-slow-zoom" />
        <div class="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-transparent to-slate-950/90"></div>
      </div>

      <div class="container mx-auto px-6 relative z-10">
        <div class="max-w-4xl mx-auto text-center">
          <span class="inline-block px-4 py-1.5 mb-6 text-xs font-black tracking-widest text-orange-500 uppercase bg-orange-500/10 rounded-full border border-orange-500/20 animate-fade-in-down">
            Expertos en Soluciones Gráficas
          </span>
          <h1 class="text-5xl md:text-8xl font-black text-white mb-8 leading-tight tracking-tight animate-fade-in-up">
            Potencia tu <span class="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">creatividad</span> al máximo
          </h1>
          <p class="text-xl text-slate-300 mb-12 max-w-2xl mx-auto font-light leading-relaxed animate-fade-in-up delay-100">
            Distribución líder de insumos, vinilos y materiales profesionales para la industria publicitaria en toda Venezuela desde el 2011.
          </p>
          <div class="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-in-up delay-200">
            <router-link to="/productos" class="w-full sm:w-auto px-10 py-5 bg-orange-600 hover:bg-orange-700 text-white font-black rounded-2xl transition-all shadow-xl shadow-orange-600/30 transform hover:-translate-y-1 flex items-center justify-center gap-2">
              Explorar Catálogo
              <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </router-link>
            <router-link to="/contactanos" class="w-full sm:w-auto px-10 py-5 bg-white/10 hover:bg-white/20 text-white font-black rounded-2xl transition-all backdrop-blur-md border border-white/20 flex items-center justify-center gap-2">
              Asesoría Técnica
            </router-link>
          </div>
        </div>
      </div>

      <!-- Scroll indicator -->
      <div class="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <div class="w-px h-16 bg-gradient-to-b from-orange-500 to-transparent"></div>
      </div>
    </section>

    <!-- STATS BAR -->
    <section class="relative z-20 -mt-12 container mx-auto px-6">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-0 rounded-[2.5rem] overflow-hidden bg-white shadow-2xl shadow-slate-200/60 border border-slate-100">
        <div class="p-10 text-center border-b md:border-b-0 md:border-r border-slate-100 group hover:bg-slate-50 transition-colors">
          <div class="text-4xl font-black text-blue-900 mb-2">+1,300</div>
          <div class="text-sm font-bold text-slate-500 uppercase tracking-widest">Productos Activos</div>
        </div>
        <div class="p-10 text-center border-b md:border-b-0 md:border-r border-slate-100 group hover:bg-slate-50 transition-colors">
          <div class="text-4xl font-black text-orange-600 mb-2">3</div>
          <div class="text-sm font-bold text-slate-500 uppercase tracking-widest">Sedes Nacionales</div>
        </div>
        <div class="p-10 text-center group hover:bg-slate-50 transition-colors">
          <div class="text-4xl font-black text-blue-900 mb-2">100%</div>
          <div class="text-sm font-bold text-slate-500 uppercase tracking-widest">Garantía de Calidad</div>
        </div>
      </div>
    </section>

    <!-- CATEGORIES SECTION CAROUSEL -->
    <section class="py-32 container mx-auto px-6">
      <div class="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div class="max-w-2xl">
          <h2 class="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
            Nuestras <span class="text-orange-500">Categorías</span>
          </h2>
          <p class="text-lg text-slate-500 leading-relaxed">
            Explora nuestro catálogo completo dividido por especialidades técnicas.
          </p>
        </div>
        <div class="flex gap-4">
          <button @click="scrollCategories(-1)" class="w-14 h-14 rounded-full border-2 border-slate-200 flex items-center justify-center hover:border-orange-500 hover:text-orange-500 transition-all">
            <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
          </button>
          <button @click="scrollCategories(1)" class="w-14 h-14 rounded-full border-2 border-slate-200 flex items-center justify-center hover:border-orange-500 hover:text-orange-500 transition-all">
            <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
          </button>
        </div>
      </div>

      <div ref="categoryScroll" class="flex gap-8 overflow-x-auto pb-12 scrollbar-hide scroll-smooth">
        <router-link v-for="cat in allCategories" :key="cat.slug" :to="`/productos`" 
                     class="flex-none w-72 h-96 group relative rounded-[2.5rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-slate-100">
          <img :src="cat.image" :alt="cat.name" class="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
          <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
          <div class="absolute bottom-8 left-8 right-8">
            <div class="text-orange-500 text-3xl mb-4 transform group-hover:-translate-y-2 transition-transform duration-500">{{ cat.icon }}</div>
            <h3 class="text-xl font-black text-white uppercase tracking-tight group-hover:text-orange-400 transition-colors leading-tight">{{ cat.name }}</h3>
          </div>
        </router-link>
      </div>
    </section>

    <!-- WHY CHOOSE US -->
    <section class="py-24 bg-blue-950 relative overflow-hidden">
      <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
      
      <div class="container mx-auto px-6 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 class="text-4xl md:text-5xl font-black text-white mb-10 tracking-tight leading-tight">
              ¿Por qué somos la <br/>
              <span class="text-orange-500">primera opción</span> de los expertos?
            </h2>
            <div class="space-y-8">
              <div class="flex items-start gap-6 group">
                <div class="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                  <svg class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                <div>
                  <h4 class="text-xl font-bold text-white mb-2">Calidad Certificada</h4>
                  <p class="text-slate-400 leading-relaxed">Solo trabajamos con marcas líderes mundiales que garantizan durabilidad y acabados impecables.</p>
                </div>
              </div>
              <div class="flex items-start gap-6 group">
                <div class="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                  <svg class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                </div>
                <div>
                  <h4 class="text-xl font-bold text-white mb-2">Respuesta Inmediata</h4>
                  <p class="text-slate-400 leading-relaxed">Entendemos tus tiempos. Envíos nacionales en tiempo récord y atención técnica especializada.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="relative">
            <div class="aspect-square rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white/5">
              <img src="/logo2.png" alt="Featured Work" class="w-full h-full object-cover" />
            </div>
            <!-- Floating element -->
            <div class="absolute -bottom-10 -left-10 bg-white p-8 rounded-[2rem] shadow-2xl hidden md:block">
              <div class="flex items-center gap-4">
                <div class="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 11-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"></path></svg>
                </div>
                <div>
                  <div class="text-sm font-black text-slate-900">Satisfacción Total</div>
                  <div class="text-xs text-slate-500">Calificación 5/5 de nuestros clientes</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CLIENTS CAROUSEL -->
    <section class="py-32 bg-white overflow-hidden">
      <div class="container mx-auto px-6 text-center mb-16">
        <h3 class="text-xs font-black text-slate-400 uppercase tracking-[0.3em] mb-4">Confían en nosotros</h3>
        <h2 class="text-3xl font-black text-slate-900">Empresas que impulsan su éxito con MundoVinyl</h2>
      </div>
      <div class="flex animate-scroll gap-12 items-center opacity-40 hover:opacity-100 transition-opacity duration-700">
        <div v-for="(client, index) in [...clients, ...clients]" :key="index" class="flex-none bg-slate-50 px-12 py-8 rounded-2xl border border-slate-100">
          <span class="text-slate-900 font-black text-xl tracking-tighter uppercase whitespace-nowrap">{{ client.name }}</span>
        </div>
      </div>
    </section>

    <!-- CTA SECTION -->
    <section class="py-24 container mx-auto px-6">
      <div class="bg-gradient-to-br from-orange-500 to-orange-700 rounded-[3rem] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl shadow-orange-600/20">
        <div class="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <svg width="100%" height="100%"><defs><pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" stroke-width="1"/></pattern></defs><rect width="100%" height="100%" fill="url(#grid)" /></svg>
        </div>
        <div class="relative z-10 max-w-3xl mx-auto">
          <h2 class="text-4xl md:text-6xl font-black mb-8 leading-tight">¿Listo para empezar tu próximo proyecto?</h2>
          <p class="text-xl text-orange-100 mb-12 font-light">Estamos listos para asesorarte y brindarte los mejores materiales del mercado.</p>
          <router-link to="/contactanos" class="inline-block px-12 py-5 bg-white text-orange-600 font-black rounded-2xl hover:bg-slate-900 hover:text-white transition-all shadow-xl shadow-white/10 transform hover:-translate-y-1">
            Contáctanos ahora
          </router-link>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { ref } from 'vue';

const categoryScroll = ref(null);

const scrollCategories = (direction) => {
  if (categoryScroll.value) {
    const scrollAmount = 350;
    categoryScroll.value.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
  }
};

const allCategories = [
  { name: 'Viniles de Corte', slug: 'vinil-corte', icon: '🎨', image: '/vinil_corte.png' },
  { name: 'Vinil Textil', slug: 'vinil-textil', icon: '👕', image: '/logo2.png' },
  { name: 'Sublimación', slug: 'sublimacion', icon: '🌀', image: '/mundo.jpg' },
  { name: 'Tintas', slug: 'tintas', icon: '🧪', image: '/logo2.png' },
  { name: 'Prendas', slug: 'prendas', icon: '🎽', image: '/logo2.png' },
  { name: 'Rollos y Otros', slug: 'rollos', icon: '📦', image: '/mundo.jpg' },
  { name: 'Reflectivos y Screem', slug: 'reflectivos', icon: '✨', image: '/vinil_corte.png' },
  { name: 'Vinil de Impresión', slug: 'impresion', icon: '🖨️', image: '/mundo.jpg' },
  { name: 'Fantasy y Holográficos', slug: 'fantasy', icon: '🌈', image: '/logo2.png' },
  { name: 'Otros Insumos', slug: 'otros', icon: '🛠️', image: '/logo2.png' },
];

const clients = [
  { name: 'APX' }, { name: 'Digiprint' }, { name: 'Wao Publicidad' }, 
  { name: 'Lienzos Publicidad' }, { name: 'Arrow Publicidad' }, { name: 'Idearte' },
  { name: 'PubliMax' }, { name: 'StudioGraf' }
];
</script>

<style scoped>
@keyframes scroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

@keyframes slow-zoom {
  0% { transform: scale(1.05); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1.05); }
}

.animate-scroll {
  display: flex;
  width: max-content;
  animation: scroll 40s linear infinite;
}

.animate-slow-zoom {
  animation: slow-zoom 20s ease-in-out infinite;
}

.animate-fade-in-down {
  animation: fadeInDown 1s ease-out forwards;
}

.animate-fade-in-up {
  animation: fadeInUp 1s ease-out forwards;
  opacity: 0;
}

.delay-100 { animation-delay: 0.1s; }
.delay-200 { animation-delay: 0.2s; }

@keyframes fadeInDown {
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-scroll:hover {
  animation-play-state: paused;
}

.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>