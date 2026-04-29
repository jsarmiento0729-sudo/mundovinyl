<template>
  <div class="bg-slate-50 min-h-screen font-sans selection:bg-orange-500 selection:text-white">
    <!-- HERO SECTION -->
    <section class="relative bg-slate-950 pt-28 pb-32 px-6 overflow-hidden">
      <div class="absolute inset-0">
        <div class="absolute inset-0 bg-gradient-to-br from-blue-950 via-slate-900 to-slate-950 opacity-90 z-10"></div>
        <!-- Decorative elements -->
        <div class="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] bg-orange-500/20 rounded-full blur-[120px] z-10 pointer-events-none"></div>
        <div class="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px] z-10 pointer-events-none"></div>
      </div>

      <div class="container mx-auto relative z-20 text-center max-w-4xl">
        <nav class="flex items-center justify-center gap-x-3 text-sm mb-8 text-blue-200/70 font-medium">
          <router-link to="/" class="hover:text-orange-400 transition-colors duration-300">Inicio</router-link>
          <span class="w-1 h-1 rounded-full bg-blue-500"></span>
          <span class="text-white font-semibold">Nuestras Tiendas</span>
        </nav>
        
        <h1 class="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-slate-400 leading-tight tracking-tight mb-6">
          Visítanos en nuestras <span class="text-orange-500">Sedes</span>
        </h1>
        <p class="text-xl text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
          Encuentra los mejores insumos y materiales publicitarios en Táchira, Caracas y Barinas. Estamos listos para impulsarte.
        </p>
      </div>
    </section>

    <!-- STORES GRID -->
    <section class="py-24 px-6 -mt-16 relative z-30">
      <div class="container mx-auto max-w-7xl">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div v-for="store in stores" :key="store.city" 
               class="bg-white rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-200/60 border border-slate-100 group hover:-translate-y-2 transition-all duration-500 flex flex-col">
            
            <!-- Store Image/Map Placeholder -->
            <div class="relative h-64 overflow-hidden">
              <iframe 
                :src="store.mapUrl" 
                class="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-700"
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade">
              </iframe>
              <div class="absolute top-6 left-6 px-4 py-2 bg-slate-900/80 backdrop-blur-md text-white text-xs font-black uppercase tracking-widest rounded-full border border-white/10">
                {{ store.city }}
              </div>
            </div>

            <!-- Content -->
            <div class="p-10 flex-grow flex flex-col">
              <h3 class="text-2xl font-black text-slate-900 mb-4 group-hover:text-blue-900 transition-colors">
                MundoVinyl {{ store.city }}
              </h3>
              
              <div class="space-y-4 mb-8 text-slate-600">
                <div class="flex items-start gap-4">
                  <div class="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-50 transition-colors">
                    <svg class="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  </div>
                  <p class="text-sm leading-relaxed">{{ store.address }}</p>
                </div>
                <div class="flex items-start gap-4">
                  <div class="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-orange-50 transition-colors">
                    <svg class="w-5 h-5 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  </div>
                  <p class="text-sm leading-relaxed">{{ store.hours }}</p>
                </div>
                <div class="flex items-start gap-4">
                  <div class="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-green-50 transition-colors">
                    <svg class="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                  </div>
                  <p class="text-sm leading-relaxed font-bold">{{ store.phone }}</p>
                </div>
              </div>

              <a :href="store.googleMapsUrl" target="_blank" class="mt-auto inline-flex items-center justify-center gap-2 w-full py-4 bg-slate-50 text-slate-900 font-bold rounded-2xl hover:bg-blue-900 hover:text-white transition-all duration-300">
                Abrir en Google Maps
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- CONTACT FORM SECTION -->
    <section class="py-24 px-6 bg-white overflow-hidden relative">
      <div class="container mx-auto max-w-7xl">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div class="space-y-8">
            <div class="inline-flex items-center gap-2">
              <span class="w-8 h-1 bg-orange-500 rounded-full"></span>
              <span class="text-orange-600 font-bold uppercase tracking-widest text-sm">Contáctanos</span>
            </div>
            <h2 class="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              ¿Tienes dudas? <br/>
              <span class="text-blue-900">Escríbenos directamente</span>
            </h2>
            <p class="text-xl text-slate-600 leading-relaxed max-w-md">
              Selecciona tu ciudad y nuestro equipo te atenderá vía WhatsApp de forma personalizada.
            </p>
            
            <div class="flex flex-col gap-6">
              <div class="flex items-center gap-6 p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:border-orange-200 transition-colors">
                <div class="w-14 h-14 bg-green-500 text-white rounded-2xl flex items-center justify-center text-2xl shadow-lg shadow-green-500/30">
                  <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.025 3.334l-.639 2.336 2.395-.627c1.012.554 2.112.847 3.013.847l.001-.001c3.181 0 5.769-2.587 5.77-5.768 0-3.181-2.588-5.787-5.797-5.787zm3.844 8.805c-.157.443-.913.848-1.258.896-.345.048-.689.048-1.121-.097-.281-.097-.615-.224-1.12-.423-2.008-.79-3.328-2.827-3.428-2.96-.101-.133-.808-1.077-.808-2.052 0-.974.506-1.455.688-1.657.182-.202.396-.253.528-.253.133 0 .265.001.381.006.116.006.273-.044.428.329.157.373.532 1.298.579 1.398.047.101.079.219.012.355-.067.136-.101.219-.202.339-.101.119-.214.269-.304.37-.101.114-.206.239-.089.439.117.2.521.859 1.121 1.393.771.688 1.419.902 1.621 1.002.201.101.319.084.439-.05.12-.134.521-.607.659-.813.137-.206.274-.173.463-.105.188.068 1.196.564 1.401.666.206.101.343.151.394.24.051.088.051.513-.106.956z"/></svg>
                </div>
                <div>
                  <h4 class="font-bold text-slate-900">Atención Inmediata</h4>
                  <p class="text-sm text-slate-500">Lunes a Sábado: 8:00 AM - 5:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div class="relative">
            <div class="absolute inset-0 bg-orange-500 rounded-[3rem] transform rotate-3 opacity-5"></div>
            <div class="relative bg-white p-8 md:p-12 rounded-[3rem] shadow-2xl border border-slate-100">
              <form @submit.prevent="sendToWhatsApp" class="space-y-6">
                <div>
                  <label class="block text-sm font-black text-slate-900 uppercase tracking-widest mb-3">Tu Nombre</label>
                  <input v-model="form.name" type="text" placeholder="Ej. Juan Pérez" required
                         class="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 outline-none transition-all" />
                </div>
                
                <div>
                  <label class="block text-sm font-black text-slate-900 uppercase tracking-widest mb-3">¿Desde qué ciudad nos escribes?</label>
                  <select v-model="form.city" required
                          class="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all appearance-none cursor-pointer">
                    <option value="" disabled selected>Selecciona tu ciudad</option>
                    <option value="Táchira">Táchira (San Cristóbal)</option>
                    <option value="Caracas">Caracas (Distrito Capital)</option>
                    <option value="Barinas">Barinas</option>
                    <option value="Otra">Otra Ciudad / Envíos Nacionales</option>
                  </select>
                </div>

                <div>
                  <label class="block text-sm font-black text-slate-900 uppercase tracking-widest mb-3">Mensaje o Consulta</label>
                  <textarea v-model="form.message" rows="4" placeholder="¿En qué podemos ayudarte?" required
                            class="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 outline-none transition-all resize-none"></textarea>
                </div>

                <button type="submit" 
                        class="w-full py-5 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-black rounded-2xl hover:shadow-xl hover:shadow-orange-500/30 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-3">
                  Enviar a WhatsApp
                  <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { reactive } from 'vue';

const stores = [
  {
    city: 'Táchira',
    address: 'Calle 16, San Cristóbal 5001, Táchira.',
    hours: 'Lun - Sáb: 8:00 AM - 6:00 PM',
    phone: '+58 424-7000814',
    googleMapsUrl: 'https://maps.app.goo.gl/DCEFnKSqSCfZfwGQA',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15814.73772849557!2d-72.23!3d7.77!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e66683f2e1a3b3b%3A0x6a1b2b3c4d5e6f7g!2sSan%20Crist%C3%B3bal%2C%20T%C3%A1chira!5e0!3m2!1ses!2sve!4v1620000000000!5m2!1ses!2sve'
  },
  {
    city: 'Caracas',
    address: 'Urbanización, Av. Andrés Bello, con Calle Norte 23-2, Caracas 1050, Distrito Capital.',
    hours: 'Lun - Vie: 8:30 AM - 5:30 PM',
    phone: '+58 422-7772800',
    googleMapsUrl: 'https://maps.app.goo.gl/6s5RPPj7ygtEGkhT7',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3923.1!2d-66.9!3d10.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3ca0a8a8a8a8a8%3A0x8a8a8a8a8a8a8a8a!2sCaracas%2C%20Venezuela!5e0!3m2!1ses!2sve!4v1620000000000!5m2!1ses!2sve'
  },
  {
    city: 'Barinas',
    address: 'Av. 23 de Enero, C.C. El Marqués, Planta Baja, Local 4, Barinas.',
    hours: 'Lun - Vie: 8:00 AM - 5:00 PM',
    phone: '+58 412-0998630',
    googleMapsUrl: 'https://maps.google.com/?q=Barinas+Venezuela',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.1!2d-70.2!3d8.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e63a0a8a8a8a8a8%3A0x8a8a8a8a8a8a8a8a!2sBarinas%2C%20Venezuela!5e0!3m2!1ses!2sve!4v1620000000000!5m2!1ses!2sve'
  }
];

const form = reactive({
  name: '',
  city: '',
  message: ''
});

const sendToWhatsApp = () => {
  const phoneNumber = '584247000814'; // Número para compras nacionales y mayoristas
  const text = `¡Hola MundoVinyl! Mi nombre es ${form.name}. Escribo desde ${form.city}. Mi consulta es: ${form.message}`;
  const encodedText = encodeURIComponent(text);
  window.open(`https://wa.me/${phoneNumber}?text=${encodedText}`, '_blank');
};
</script>

<style scoped>
::selection {
  background-color: #f97316;
  color: white;
}
</style>
