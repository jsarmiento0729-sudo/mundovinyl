<template>
  <div class="bg-slate-50 min-h-screen font-sans selection:bg-orange-500 selection:text-white pb-20">
    
    <!-- HERO SECTION -->
    <section class="relative bg-slate-950 pt-28 pb-20 px-6 overflow-hidden">
      <div class="absolute inset-0">
        <div class="absolute inset-0 bg-gradient-to-br from-blue-950 via-slate-900 to-slate-950 opacity-90 z-10"></div>
      </div>
      <div class="container mx-auto relative z-20 text-center">
        <h1 class="text-4xl md:text-6xl font-black text-white mb-4 tracking-tight">Catálogo de <span class="text-orange-500">Productos</span></h1>
        <p class="text-slate-400 max-w-xl mx-auto">Selecciona tus insumos y arma tu pedido directamente para WhatsApp.</p>
      </div>
    </section>

    <!-- CITY SELECTION MODAL -->
    <div v-if="showCityModal" class="fixed inset-0 z-[100] flex items-center justify-center p-6">
      <div class="absolute inset-0 bg-slate-950/80 backdrop-blur-md"></div>
      <div class="relative w-full max-w-lg bg-white rounded-[3rem] p-12 shadow-2xl text-center animate-slide-up">
        <div class="w-20 h-20 bg-orange-100 rounded-3xl flex items-center justify-center mx-auto mb-8">
          <svg class="w-10 h-10 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
        </div>
        <h2 class="text-3xl font-black text-slate-900 mb-4">¡Bienvenido a MundoVinyl!</h2>
        <p class="text-slate-500 mb-10">Para mostrarte los precios correctos, por favor selecciona tu ciudad:</p>
        
        <div class="grid grid-cols-1 gap-4 mb-8">
          <button v-for="city in ['Táchira', 'Caracas', 'Barinas', 'Nacional / Otros']" 
                  :key="city"
                  @click="selectInitialCity(city)"
                  class="py-4 px-6 bg-slate-50 hover:bg-orange-500 hover:text-white border border-slate-200 rounded-2xl font-bold transition-all duration-300">
            {{ city === 'Táchira' ? 'San Cristóbal (Táchira)' : city === 'Nacional / Otros' ? 'Otras Ciudades / Nacional' : city }}
          </button>
        </div>
        <p class="text-xs text-slate-400">Podrás cambiar esto más tarde en el carrito.</p>
      </div>
    </div>

    <div class="container mx-auto px-6 py-12">
      <div class="flex flex-col lg:flex-row gap-12">
        
        <!-- SIDEBAR CATEGORIES -->
        <aside class="lg:w-64 space-y-8 flex-shrink-0">
          <div>
            <h3 class="text-xs font-black text-slate-900 uppercase tracking-widest mb-6">Categorías</h3>
            <div class="flex flex-wrap lg:flex-col gap-2">
              <button 
                @click="activeCategory = 'Todos'"
                :class="activeCategory === 'Todos' ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/30' : 'bg-white text-slate-600 hover:bg-slate-100'"
                class="px-6 py-3 rounded-2xl text-sm font-bold transition-all duration-300 text-left whitespace-nowrap">
                Todos los Productos
              </button>
              <button 
                v-for="cat in categoriesList" :key="cat"
                @click="activeCategory = cat"
                :class="activeCategory === cat ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/30' : 'bg-white text-slate-600 hover:bg-slate-100'"
                class="px-6 py-3 rounded-2xl text-sm font-bold transition-all duration-300 text-left whitespace-nowrap">
                {{ cat }}
              </button>
            </div>
          </div>

        </aside>

        <!-- PRODUCT GRID -->
        <main class="flex-grow">
          <!-- Mobile Cart Access -->
          <div v-if="cart.length > 0" class="lg:hidden mb-6 flex items-center justify-between bg-blue-50 p-4 rounded-2xl border border-blue-100">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 bg-blue-900 text-white rounded-full flex items-center justify-center font-black">
                {{ cart.length }}
              </div>
              <span class="font-bold text-blue-900">Productos en tu pedido</span>
            </div>
            <button @click="showMobileCart = true" class="bg-blue-900 text-white px-6 py-2 rounded-xl font-bold text-sm shadow-lg">
              Ver Carrito
            </button>
          </div>
          <!-- SEARCH BAR -->
          <div class="mb-10 relative">
            <input 
              v-model="searchQuery"
              type="text" 
              placeholder="Buscar por nombre o código..." 
              class="w-full bg-white border border-slate-200 rounded-2xl py-4 px-12 shadow-sm focus:ring-2 focus:ring-orange-500 outline-none transition-all"
            />
            <svg class="w-6 h-6 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            <div v-if="searchQuery" class="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 uppercase">
              {{ filteredProducts.length }} resultados
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
            <div v-for="product in displayedProducts" :key="product.id" 
                 class="bg-white rounded-[2rem] overflow-hidden shadow-lg shadow-slate-200/50 border border-slate-100 group hover:shadow-xl transition-all duration-300">
              
              <div class="relative h-56 bg-slate-100 overflow-hidden">
                <img :src="product.image" :alt="product.name" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div class="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-lg text-xs font-black text-slate-900 shadow-sm">
                  {{ product.category }}
                </div>
              </div>

              <div class="p-8">
                <h3 class="text-lg font-black text-slate-900 mb-2 leading-tight">{{ product.name }}</h3>
                <p class="text-sm text-slate-500 mb-6 leading-relaxed">{{ product.description }}</p>
                
                <div class="flex items-center justify-between">
                  <span class="text-2xl font-black text-blue-900">${{ product.prices[selectedCity].toFixed(2) }}</span>
                  <button 
                    @click="addToCart(product)"
                    class="p-4 bg-slate-900 text-white rounded-2xl hover:bg-orange-500 transition-all duration-300 transform active:scale-95 group-hover:shadow-lg group-hover:shadow-orange-500/20">
                    <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- LOAD MORE -->
          <div v-if="displayLimit < filteredProducts.length" class="mt-16 text-center">
            <button 
              @click="loadMore"
              class="px-12 py-4 bg-white border-2 border-slate-200 text-slate-900 font-black rounded-2xl hover:border-orange-500 hover:text-orange-500 transition-all">
              Cargar más productos
            </button>
          </div>

          <div v-if="filteredProducts.length === 0" class="py-20 text-center">
            <p class="text-slate-400 italic">No se encontraron productos con esa búsqueda.</p>
          </div>
        </main>
      </div>
    </div>

    <!-- CART FLOATING BUTTON (ALL DEVICES) -->
      <div v-if="cart.length > 0" class="fixed bottom-8 left-8 z-[110]">
        <button 
          @click="showMobileCart = true"
          class="bg-blue-900 text-white p-5 md:p-8 rounded-full shadow-2xl flex items-center gap-4 animate-pulse border-4 border-white hover:scale-110 transition-transform">
          <svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
          <span class="font-black text-xl md:text-2xl">{{ cart.length }}</span>
          <span class="hidden md:block font-black uppercase tracking-widest text-sm">Ver mi Pedido</span>
        </button>
      </div>

      <!-- CART OVERLAY MODAL (ALL DEVICES) -->
      <div v-if="showMobileCart" class="fixed inset-0 z-[120] flex items-center justify-center p-4 md:p-12">
        <div class="absolute inset-0 bg-slate-950/80 backdrop-blur-md" @click="showMobileCart = false"></div>
        
        <div class="relative w-full max-w-4xl bg-white rounded-[3rem] shadow-2xl overflow-hidden flex flex-col md:flex-row h-full max-h-[90vh] animate-slide-up">
          
          <!-- Cart Items List (Left/Main) -->
          <div class="flex-grow p-8 md:p-12 overflow-y-auto custom-scrollbar bg-slate-50">
            <div class="flex justify-between items-center mb-10">
              <h3 class="text-3xl font-black text-slate-900">Tu Carrito</h3>
              <button @click="showMobileCart = false" class="text-slate-400 hover:text-slate-900 flex items-center gap-2 font-bold uppercase tracking-widest text-xs">
                <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                Minimizar
              </button>
            </div>

            <div v-if="cart.length === 0" class="py-20 text-center">
              <p class="text-slate-400 italic">Tu carrito está vacío.</p>
            </div>

            <div v-else class="space-y-8">
            <div v-for="item in cart" :key="item.id" class="grid grid-cols-1 md:grid-cols-[auto_1fr_auto] gap-6 pb-8 border-b border-slate-200 last:border-0 items-center">
              <img :src="item.image" class="w-20 h-20 object-cover rounded-2xl border border-slate-200 mx-auto md:mx-0" />
              
              <div class="text-center md:text-left px-2">
                <p class="font-black text-slate-900 text-lg leading-tight">{{ item.name }}</p>
                <p class="text-xs text-slate-400 mt-1">Ref: {{ item.id }} | Un: ${{ item.prices[selectedCity].toFixed(2) }}</p>
              </div>
              
              <div class="flex items-center justify-between md:justify-end gap-4 md:gap-8 bg-white/50 md:bg-transparent p-4 md:p-0 rounded-2xl">
                <!-- Cantidad -->
                <div class="flex items-center gap-3 bg-white border border-slate-200 rounded-xl p-1 shadow-sm">
                  <button @click="removeFromCart(item.id)" class="w-8 h-8 flex items-center justify-center hover:bg-slate-50 rounded-lg transition-all text-xl text-slate-400">-</button>
                  <div class="min-w-[40px] text-center">
                    <input v-if="isDecimalProduct(item)" 
                          type="number" v-model.number="item.quantity" step="0.1" min="0.1"
                          class="w-12 bg-transparent text-center font-black text-sm outline-none" />
                    <span v-else class="font-black text-slate-900 text-sm">{{ item.quantity }}</span>
                  </div>
                  <button @click="addToCart(item)" class="w-8 h-8 flex items-center justify-center hover:bg-slate-50 rounded-lg transition-all text-xl text-slate-400">+</button>
                </div>

                <!-- Precio Total Item -->
                <div class="min-w-[100px] text-right">
                  <span class="font-black text-blue-900 text-xl">${{ (item.quantity * item.prices[selectedCity]).toFixed(2) }}</span>
                </div>

                <!-- Borrar -->
                <button @click="deleteFromCart(item.id)" class="text-slate-300 hover:text-red-500 transition-colors p-2">
                  <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                </button>
              </div>
            </div>
            </div>
          </div>

          <!-- Order Summary & Checkout (Right Sidebar in Modal) -->
          <div class="w-full md:w-[400px] bg-slate-900 p-8 md:p-12 text-white flex flex-col overflow-y-auto custom-scrollbar">
            <div class="space-y-8 flex-grow">
              <h4 class="text-xl font-black uppercase tracking-widest text-orange-500">Resumen del Pedido</h4>
              
              <!-- Customer Form -->
              <div class="space-y-6">
                <div class="space-y-2">
                  <label class="text-[10px] font-black uppercase tracking-widest text-slate-400">Nombre del Cliente</label>
                  <input v-model="customerName" type="text" placeholder="Ej: Juan Pérez" 
                        class="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-5 text-white focus:ring-2 focus:ring-orange-500 outline-none" />
                </div>
                <div class="space-y-2">
                  <label class="text-[10px] font-black uppercase tracking-widest text-slate-400">Sede para el Pedido</label>
                  <select v-model="selectedCity" 
                          class="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-5 text-white focus:ring-2 focus:ring-orange-500 outline-none cursor-pointer">
                    <option value="Táchira" class="text-slate-900">San Cristóbal (Táchira)</option>
                    <option value="Caracas" class="text-slate-900">Caracas</option>
                    <option value="Barinas" class="text-slate-900">Barinas</option>
                    <option value="Nacional / Otros" class="text-slate-900">Otras Ciudades / Nacional</option>
                  </select>
                </div>
              </div>

            <!-- Totals & Button -->
            <div class="mt-10 pt-8 border-t border-white/20 space-y-6">
              <div class="space-y-4">
                <div class="flex justify-between items-center text-slate-400">
                  <span>Subtotal:</span>
                  <span class="font-bold text-white">${{ cartTotal.toFixed(2) }}</span>
                </div>
                <div class="flex justify-between items-center text-slate-400">
                  <span>IVA (16%):</span>
                  <span class="font-bold text-white">${{ cartIVA.toFixed(2) }}</span>
                </div>
                <div class="flex justify-between items-center pt-6 border-t border-white/20">
                  <span class="text-xl font-black uppercase tracking-tighter text-white">Total Final:</span>
                  <span class="text-4xl font-black text-orange-500">${{ cartGrandTotal.toFixed(2) }}</span>
                </div>
              </div>

              <button @click="checkoutWhatsApp" :disabled="cart.length === 0"
                      class="w-full py-6 bg-orange-500 text-white font-black rounded-[2rem] hover:bg-orange-600 transition-all shadow-xl shadow-orange-500/20 flex items-center justify-center gap-4 disabled:opacity-50">
                Hacer Pedido vía WhatsApp
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.025 3.334l-.639 2.336 2.395-.627c1.012.554 2.112.847 3.013.847l.001-.001c3.181 0 5.769-2.587 5.77-5.768 0-3.181-2.588-5.787-5.797-5.787zm3.844 8.805c-.157.443-.913.848-1.258.896-.345.048-.689.048-1.121-.097-.281-.097-.615-.224-1.12-.423-2.008-.79-3.328-2.827-3.428-2.96-.101-.133-.808-1.077-.808-2.052 0-.974.506-1.455.688-1.657.182-.202.396-.253.528-.253.133 0 .265.001.381.006.116.006.273-.044.428.329.157.373.532 1.298.579 1.398.047.101.079.219.012.355-.067.136-.101.219-.202.339-.101.119-.214.269-.304.37-.101.114-.206.239-.089.439.117.2.521.859 1.121 1.393.771.688 1.419.902 1.621 1.002.201.101.319.084.439-.05.12-.134.521-.607.659-.813.137-.206.274-.173.463-.105.188.068 1.196.564 1.401.666.206.101.343.151.394.24.051.088.051.513-.106.956z"/></svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, reactive, watch } from 'vue';
import { productsData } from './products.js';
import { globalState } from './store.js';

const activeCategory = ref('Todos');
const showMobileCart = ref(false);
const cart = reactive([]);

// Usar estado global para persistencia en navegación
const selectedCity = computed({
  get: () => globalState.selectedCity || 'Táchira',
  set: (val) => { globalState.selectedCity = val; }
});

const customerName = computed({
  get: () => globalState.customerName,
  set: (val) => { globalState.customerName = val; }
});

// El modal solo se muestra si NO se ha seleccionado ciudad en esta sesión (esta carga de página)
const showCityModal = ref(!globalState.hasSelectedCityThisSession);

const selectInitialCity = (city) => {
  selectedCity.value = city;
  globalState.hasSelectedCityThisSession = true;
  showCityModal.value = false;
  localStorage.setItem('mundovinyl_city', city);
};

// Observar cambios para persistir en localStorage (opcional, pero útil)
watch(() => globalState.selectedCity, (newCity) => {
  localStorage.setItem('mundovinyl_city', newCity);
});

watch(() => globalState.customerName, (newName) => {
  localStorage.setItem('mundovinyl_name', newName);
});

const categoriesList = [
  'Viniles de Corte', 
  'Vinil Textil', 
  'Sublimación', 
  'Tintas', 
  'Prendas', 
  'Rollos y Otros',
  'Reflectivos y Screem',
  'Vinil de Impresión',
  'Fantasy y Holográficos',
  'Otros'
];

const products = productsData;
const searchQuery = ref('');
const displayLimit = ref(24);

const filteredProducts = computed(() => {
  let result = products;
  
  if (activeCategory.value !== 'Todos') {
    result = result.filter(p => p.category === activeCategory.value);
  }
  
  if (searchQuery.value) {
    const q = searchQuery.value.toLowerCase();
    result = result.filter(p => 
      p.name.toLowerCase().includes(q) || 
      p.id.toLowerCase().includes(q)
    );
  }
  
  return result;
});

const displayedProducts = computed(() => {
  return filteredProducts.value.slice(0, displayLimit.value);
});

const loadMore = () => {
  displayLimit.value += 24;
};

const isDecimalProduct = (product) => {
  const nameUpper = product.name.toUpperCase();
  
  // Productos que NO permiten decimales (se venden por unidad/pieza)
  const unitKeywords = [
    'LAMINA', 'TAZA', 'TERMO', 'CINTA TERMICA', 'ROLLO', 
    'FRANELA', 'HERRAMIENTA', 'TINTA', 'GORRA', 'UNIDAD', 
    'PIEZA', 'PAQUETE', 'RESMA', 'KIT', 'POTE', 'GALON'
  ];
  
  // Categorías que generalmente son por unidad
  const unitCategories = ['Prendas', 'Tintas', 'Rollos y Otros', 'Herramientas'];

  if (unitCategories.includes(product.category)) return false;
  
  // Si el nombre contiene alguna de las palabras clave, es por unidad (no decimal)
  const isUnit = unitKeywords.some(keyword => nameUpper.includes(keyword));
  
  return !isUnit;
};

const addToCart = (product) => {
  const existing = cart.find(item => item.id === product.id);
  const step = isDecimalProduct(product) ? 0.1 : 1;
  
  if (existing) {
    existing.quantity += step;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
};

const removeFromCart = (productId) => {
  const index = cart.findIndex(item => item.id === productId);
  if (index !== -1) {
    const step = isDecimalProduct(cart[index]) ? 0.1 : 1;
    if (cart[index].quantity > step) {
      cart[index].quantity -= step;
    } else {
      cart.splice(index, 1);
    }
  }
};

const deleteFromCart = (productId) => {
  const index = cart.findIndex(item => item.id === productId);
  if (index !== -1) {
    cart.splice(index, 1);
  }
};

const cartTotal = computed(() => {
  return cart.reduce((total, item) => total + (item.prices[selectedCity.value] * item.quantity), 0);
});

const cartIVA = computed(() => {
  return cartTotal.value * 0.16;
});

const cartGrandTotal = computed(() => {
  return cartTotal.value + cartIVA.value;
});

const checkoutWhatsApp = () => {
  if (!customerName.value) {
    alert('Por favor, ingresa tu nombre antes de realizar el pedido.');
    return;
  }

  // Enrutamiento por ciudad
  const phoneNumbers = {
    'Táchira': '584247000814',
    'Caracas': '584227772800',
    'Barinas': '584120998630',
    'Nacional / Otros': '584247000814'
  };

  const phoneNumber = phoneNumbers[selectedCity.value] || '584247000814';
  
  let message = `¡Hola MundoVinyl! 👋\n\n`;
  message += `👤 *Cliente:* ${customerName.value}\n`;
  message += `📍 *Ciudad:* ${selectedCity.value}\n\n`;
  message += `Me gustaría realizar el siguiente pedido:\n\n`;
  
  cart.forEach(item => {
    const itemPrice = item.prices[selectedCity.value];
    message += `✅ ${item.quantity} x ${item.name} - $${(item.quantity * itemPrice).toFixed(2)}\n`;
  });
  
  message += `\n--------------------------\n`;
  message += `📦 Subtotal: $${cartTotal.value.toFixed(2)}\n`;
  message += `📜 IVA (16%): $${cartIVA.value.toFixed(2)}\n`;
  message += `💰 *TOTAL FINAL: $${cartGrandTotal.value.toFixed(2)}*\n\n`;
  message += `_Precios calculados para la ciudad de ${selectedCity.value}_\n\n`;
  message += `¿Podrían confirmarme disponibilidad y métodos de pago?`;
  
  const encodedText = encodeURIComponent(message);
  window.open(`https://wa.me/${phoneNumber}?text=${encodedText}`, '_blank');
};
</script>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
  width: 4px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.05);
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
}
.custom-scrollbar-sidebar::-webkit-scrollbar {
  width: 4px;
}
.custom-scrollbar-sidebar::-webkit-scrollbar-track {
  background: transparent;
}
.custom-scrollbar-sidebar::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
}
.custom-scrollbar-sidebar:hover::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.2);
}

@keyframes slide-up {
  from { transform: translateY(100%); }
  to { transform: translateY(0); }
}
.animate-slide-up {
  animation: slide-up 0.4s ease-out;
}
</style>
