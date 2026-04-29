<template>
  <div class="bg-slate-50 min-h-screen font-sans selection:bg-orange-500 selection:text-white">
    <!-- HERO SECTION -->
    <section class="relative bg-slate-950 pt-28 pb-32 px-6 overflow-hidden text-center">
      <div class="absolute inset-0">
        <div class="absolute inset-0 bg-gradient-to-br from-blue-950 via-slate-900 to-slate-950 opacity-90 z-10"></div>
        <div class="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-[120px] z-10 pointer-events-none"></div>
        <div class="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] z-10 pointer-events-none"></div>
      </div>

      <div class="container mx-auto relative z-20 max-w-4xl">
        <nav class="flex items-center justify-center gap-x-3 text-sm mb-8 text-blue-200/70 font-medium">
          <router-link to="/" class="hover:text-orange-400 transition-colors duration-300">Inicio</router-link>
          <span class="w-1 h-1 rounded-full bg-blue-500"></span>
          <span class="text-white font-semibold">Contáctanos</span>
        </nav>
        
        <h1 class="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-slate-400 leading-tight tracking-tight mb-6">
          Estamos a un <span class="text-orange-500">clic de distancia</span>
        </h1>
        <p class="text-xl text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
          ¿Tienes un proyecto en mente o necesitas asesoría técnica? Nuestro equipo de expertos está listo para ayudarte a hacerlo realidad.
        </p>
      </div>
    </section>

    <!-- CONTACT CARDS -->
    <section class="py-24 px-6 -mt-16 relative z-30">
      <div class="container mx-auto max-w-7xl">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <!-- Phone Card -->
          <div class="bg-white p-10 rounded-[2.5rem] shadow-2xl shadow-slate-200/60 border border-slate-100 group hover:-translate-y-2 transition-all duration-500">
            <div class="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center text-3xl mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
              <svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
            </div>
            <h3 class="text-xl font-black text-slate-900 mb-2 tracking-tight">Llámanos</h3>
            <p class="text-slate-500 mb-6 leading-relaxed text-sm">Atención inmediata en horario de oficina.</p>
            <a href="https://wa.me/584247000814" target="_blank" class="text-lg font-bold text-blue-900 hover:text-orange-500 transition-colors">+58 424 700 0814</a>
          </div>

          <!-- Email Card -->
          <div class="bg-white p-10 rounded-[2.5rem] shadow-2xl shadow-slate-200/60 border border-slate-100 group hover:-translate-y-2 transition-all duration-500">
            <div class="w-16 h-16 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center text-3xl mb-8 group-hover:bg-orange-600 group-hover:text-white transition-all duration-500">
              <svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
            </div>
            <h3 class="text-xl font-black text-slate-900 mb-2 tracking-tight">Escríbenos</h3>
            <p class="text-slate-500 mb-6 leading-relaxed text-sm">Respondemos tus correos en menos de 24h.</p>
            <a href="mailto:redes.mundovinyl.sancristobal@gmail.com" class="text-lg font-bold text-blue-900 hover:text-orange-500 transition-colors">redes.mundovinyl.sancristobal@gmail.com</a>
          </div>

          <!-- Address Card -->
          <div class="bg-white p-10 rounded-[2.5rem] shadow-2xl shadow-slate-200/60 border border-slate-100 group hover:-translate-y-2 transition-all duration-500">
            <div class="w-16 h-16 bg-slate-50 text-slate-900 rounded-2xl flex items-center justify-center text-3xl mb-8 group-hover:bg-slate-900 group-hover:text-white transition-all duration-500">
              <svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
            </div>
            <h3 class="text-xl font-black text-slate-900 mb-2 tracking-tight">Sede Principal</h3>
            <p class="text-slate-500 mb-1 leading-relaxed text-sm">San Cristóbal, Edo. Táchira.</p>
            <p class="text-slate-400 mb-6 text-[10px] font-bold uppercase tracking-widest">RIF: J-40500343-0</p>
            <router-link to="/tiendas" class="text-lg font-bold text-blue-900 hover:text-orange-500 transition-colors">Ver todas las sedes</router-link>
          </div>

        </div>
      </div>
    </section>

    <!-- FORM SECTION -->
    <section class="py-24 px-6 bg-white relative overflow-hidden">
      <div class="container mx-auto max-w-7xl">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          <div class="space-y-12">
            <div>
              <h2 class="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-6">
                Envíanos un mensaje <br/>
                <span class="text-blue-900">estaremos felices de ayudarte</span>
              </h2>
              <p class="text-xl text-slate-600 leading-relaxed">
                Utiliza el formulario para enviarnos tus requerimientos específicos. También puedes visitarnos en nuestras redes sociales.
              </p>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div class="space-y-4">
                <h4 class="font-black text-slate-900 uppercase tracking-widest text-xs">Caracas</h4>
                <a href="https://wa.me/584227772800" target="_blank" class="text-sm text-blue-900 font-bold hover:text-orange-500 transition-colors">+58 422 777 2800</a>
              </div>
              <div class="space-y-4">
                <h4 class="font-black text-slate-900 uppercase tracking-widest text-xs">Barinas</h4>
                <a href="https://wa.me/584120998630" target="_blank" class="text-sm text-blue-900 font-bold hover:text-orange-500 transition-colors">+58 412 099 8630</a>
              </div>
            </div>

            <div class="flex items-center gap-6">
              <a href="https://www.instagram.com/mundovinyl/" target="_blank" class="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-slate-900 hover:bg-orange-500 hover:text-white transition-all duration-300">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.919-.058-1.265-.069-1.644-.069-4.849 0-3.204.013-3.583.069-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.2-4.353-2.619-6.78-6.98-6.98-1.28-.059-1.688-.073-4.947-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.209-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="https://www.facebook.com/MundoVinylve" target="_blank" class="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-slate-900 hover:bg-orange-500 hover:text-white transition-all duration-300">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://wa.me/584247000814" target="_blank" class="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-slate-900 hover:bg-green-500 hover:text-white transition-all duration-300">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
              </a>
            </div>
          </div>

          <div class="bg-slate-50 p-10 md:p-16 rounded-[3rem] border border-slate-100 shadow-inner">
            <form @submit.prevent="handleSubmit" class="space-y-8">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div class="space-y-3">
                  <label class="text-sm font-black text-slate-900 uppercase tracking-widest">Nombre Completo</label>
                  <input v-model="form.name" type="text" placeholder="Tu nombre" required
                         class="w-full px-0 py-4 bg-transparent border-b-2 border-slate-200 focus:border-orange-500 outline-none transition-all" />
                </div>
                <div class="space-y-3">
                  <label class="text-sm font-black text-slate-900 uppercase tracking-widest">Correo Electrónico</label>
                  <input v-model="form.email" type="email" placeholder="tucorreo@ejemplo.com" required
                         class="w-full px-0 py-4 bg-transparent border-b-2 border-slate-200 focus:border-orange-500 outline-none transition-all" />
                </div>
              </div>

              <div class="space-y-3">
                <label class="text-sm font-black text-slate-900 uppercase tracking-widest">Asunto</label>
                <select v-model="form.subject" required
                        class="w-full px-0 py-4 bg-transparent border-b-2 border-slate-200 focus:border-orange-500 outline-none transition-all cursor-pointer">
                  <option value="" disabled selected>¿En qué podemos ayudarte?</option>
                  <option value="Ventas">Información de Ventas</option>
                  <option value="Soporte">Soporte Técnico</option>
                  <option value="Maquinaria">Cotización de Insumos</option>
                  <option value="Otro">Otro Asunto</option>
                </select>
              </div>

              <div class="space-y-3">
                <label class="text-sm font-black text-slate-900 uppercase tracking-widest">Tu Mensaje</label>
                <textarea v-model="form.message" rows="4" placeholder="Cuéntanos más detalles..." required
                          class="w-full px-0 py-4 bg-transparent border-b-2 border-slate-200 focus:border-orange-500 outline-none transition-all resize-none"></textarea>
              </div>

              <button type="submit" 
                      class="inline-flex items-center gap-4 px-12 py-5 bg-blue-900 text-white font-black rounded-2xl hover:bg-orange-500 transition-all duration-500 transform hover:-translate-y-1 shadow-xl shadow-blue-900/20">
                Enviar Mensaje
                <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>

    <!-- FAQ MINI SECTION -->
    <section class="py-24 px-6 bg-slate-50">
      <div class="container mx-auto max-w-4xl text-center">
        <h2 class="text-3xl font-black text-slate-900 mb-12 tracking-tight">Preguntas Frecuentes</h2>
        <div class="space-y-4 text-left">
          <div v-for="(faq, index) in faqs" :key="index" class="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
            <h4 class="font-bold text-slate-900 mb-2">{{ faq.q }}</h4>
            <p class="text-slate-600 text-sm leading-relaxed">{{ faq.a }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { reactive } from 'vue';

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
});

const faqs = [
  { q: '¿Hacen envíos a nivel nacional?', a: 'Sí, realizamos envíos a toda Venezuela a través de las principales empresas de encomiendas (Zoom, MRW, Tealca).' },
  { q: '¿Ofrecen asesoría técnica?', a: 'Sí, nuestro equipo está capacitado para brindarte asesoría técnica sobre el uso y aplicación de todos nuestros materiales.' },
  { q: '¿Tienen tienda física en Caracas?', a: '¡Sí! Contamos con sedes en Táchira, Caracas y Barinas para tu comodidad.' }
];

const handleSubmit = () => {
  alert(`¡Gracias ${form.name}! Hemos recibido tu mensaje sobre "${form.subject}". Te contactaremos pronto.`);
  form.name = '';
  form.email = '';
  form.subject = '';
  form.message = '';
};
</script>

<style scoped>
::selection {
  background-color: #f97316;
  color: white;
}
</style>
