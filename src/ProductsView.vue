<template>
  <div class="bg-slate-50 min-h-screen font-sans selection:bg-orange-500 selection:text-white pb-20">
    
    <!-- HERO SECTION -->
    <section class="relative bg-slate-950 pt-32 pb-24 px-6 overflow-hidden">
      <div class="absolute inset-0 z-0">
        <img src="/mundo.jpg" alt="Hero Background" class="w-full h-full object-cover opacity-20 scale-105 animate-slow-zoom" />
        <div class="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/50 to-slate-950/90 z-10"></div>
      </div>
      <div class="container mx-auto relative z-20 text-center max-w-4xl">
        <span class="inline-block px-4 py-1.5 mb-6 text-xs font-black tracking-widest text-orange-500 uppercase bg-orange-500/10 rounded-full border border-orange-500/20 animate-fade-in-down">
          Calidad Profesional Garantizada
        </span>
        <h1 class="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight leading-tight">
          Catálogo de <span class="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Productos</span>
        </h1>
        <p class="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto font-light leading-relaxed mb-10">
          Explora nuestra amplia gama de insumos publicitarios. Selecciona tus materiales, ajusta las cantidades y realiza tu pedido directamente por WhatsApp.
        </p>
        <router-link to="/" class="inline-flex items-center gap-2 px-8 py-3 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-xl transition-all font-bold text-sm">
          <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
          Volver al Inicio
        </router-link>
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

          <!-- PAGINATION -->
          <div v-if="totalPages > 1" class="mt-16 flex flex-wrap justify-center items-center gap-3">
            <button 
              @click="prevPage"
              :disabled="currentPage === 1"
              class="w-12 h-12 flex items-center justify-center rounded-xl border-2 border-slate-200 text-slate-400 hover:border-orange-500 hover:text-orange-500 disabled:opacity-30 disabled:hover:border-slate-200 disabled:hover:text-slate-400 transition-all shadow-sm">
              <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
            </button>
            
            <div class="flex items-center gap-2">
              <button 
                v-for="page in visiblePages" :key="page"
                @click="currentPage = page"
                :class="currentPage === page ? 'bg-orange-500 text-white border-orange-500 shadow-lg shadow-orange-500/30' : 'bg-white text-slate-600 border-slate-200 hover:border-orange-500'"
                class="w-12 h-12 rounded-xl border-2 font-black transition-all">
                {{ page }}
              </button>
            </div>

            <button 
              @click="nextPage"
              :disabled="currentPage === totalPages"
              class="w-12 h-12 flex items-center justify-center rounded-xl border-2 border-slate-200 text-slate-400 hover:border-orange-500 hover:text-orange-500 disabled:opacity-30 disabled:hover:border-slate-200 disabled:hover:text-slate-400 transition-all shadow-sm">
              <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
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
      <div v-if="showMobileCart" class="fixed inset-0 z-[120] flex items-center justify-center p-0 md:p-12">
        <div class="absolute inset-0 bg-slate-950/80 backdrop-blur-md hidden md:block" @click="showMobileCart = false"></div>
        
        <div class="relative w-full max-w-7xl bg-white rounded-none md:rounded-[3rem] shadow-2xl overflow-hidden flex flex-col md:flex-row h-full md:h-[90vh] max-h-screen md:max-h-[900px] animate-slide-up">
          
          <!-- Cart Items List (Left/Main) -->
          <div class="flex-grow p-6 md:p-12 overflow-y-auto custom-scrollbar bg-slate-50 relative">
            <!-- Mobile Header Sticky -->
            <div class="md:hidden sticky top-0 bg-slate-50/80 backdrop-blur-md z-10 -mx-6 px-6 py-4 border-b border-slate-200 flex justify-between items-center mb-6">
               <h3 class="text-xl font-black text-slate-900 tracking-tight">Tu Pedido</h3>
               <button @click="showMobileCart = false" class="bg-white p-2 rounded-full shadow-sm text-slate-400">
                  <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
               </button>
            </div>

            <div class="flex justify-between items-end mb-10 hidden md:flex">
              <div>
                <h3 class="text-4xl font-black text-slate-900 tracking-tight mb-2">Tu Carrito</h3>
                <p class="text-slate-400 font-bold uppercase tracking-widest text-[10px]">Gestiona tus productos antes de finalizar</p>
              </div>
              <button @click="showMobileCart = false" class="group flex items-center gap-3 text-slate-400 hover:text-slate-600 transition-all">
                <span class="text-[10px] font-black uppercase tracking-[0.2em]">Cerrar</span>
                <div class="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center group-hover:rotate-90 transition-transform">
                  <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </div>
              </button>
            </div>

            <!-- Quick Add Search -->
            <div class="mb-10 relative">
              <label class="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 block">¿Olvidaste algo? Añádelo rápido:</label>
              <div class="relative group">
                <input 
                  v-model="quickSearchQuery"
                  type="text" 
                  placeholder="Buscar producto para añadir..." 
                  class="w-full bg-white border border-slate-200 rounded-2xl py-4 px-12 shadow-sm focus:ring-2 focus:ring-orange-500 outline-none transition-all"
                />
                <svg class="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              </div>

              <!-- Quick Results Dropdown -->
              <div v-if="quickSearchQuery && quickSearchResults.length > 0" 
                   class="absolute left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl border border-slate-100 z-50 overflow-hidden animate-slide-up max-h-[300px] overflow-y-auto custom-scrollbar-sidebar">
                <div v-for="p in quickSearchResults" :key="p.id" 
                     @click="quickAdd(p)"
                     class="p-4 flex items-center gap-4 hover:bg-orange-50 cursor-pointer transition-colors border-b border-slate-50 last:border-0">
                  <img :src="p.image" class="w-12 h-12 object-cover rounded-lg border border-slate-100" />
                  <div class="flex-grow text-left">
                    <p class="text-sm font-bold text-slate-900 leading-tight">{{ p.name }}</p>
                    <p class="text-xs text-orange-600 font-black">${{ p.prices[selectedCity].toFixed(2) }}</p>
                  </div>
                  <div class="w-8 h-8 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center">
                    <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>
                  </div>
                </div>
              </div>
              <div v-else-if="quickSearchQuery" class="absolute left-0 right-0 mt-2 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 z-50 text-center text-xs text-slate-400 italic">
                No se encontraron resultados
              </div>
            </div>

            <div v-if="cart.length === 0" class="py-24 text-center bg-white rounded-[3rem] border-2 border-dashed border-slate-100 mx-2">
              <div class="w-24 h-24 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
                <svg class="w-12 h-12 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
              </div>
              <h4 class="text-2xl font-black text-slate-900 mb-2">Tu carrito está vacío</h4>
              <p class="text-slate-400 font-medium px-10">Explora nuestro catálogo y añade los mejores vinilos a tu pedido.</p>
              <button @click="showMobileCart = false" class="mt-8 px-8 py-4 bg-slate-900 text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:scale-105 transition-transform shadow-xl">Ver Productos</button>
            </div>

            <div v-else class="flex flex-col gap-5 md:gap-8">
              <!-- Header Tabla -->
              <div class="hidden md:flex items-center gap-6 pb-6 border-b border-slate-200 text-[10px] font-black uppercase tracking-widest text-slate-400 px-2">
                <div class="w-24">Producto</div>
                <div class="flex-grow">Descripción</div>
                <div class="w-32 text-center">Cantidad</div>
                <div class="w-32 text-right">Subtotal</div>
                <div class="w-10"></div>
              </div>
                <!-- Item List -->
              <div v-for="item in cart" :key="item.id" 
                   class="bg-white md:bg-transparent rounded-3xl md:rounded-none p-5 md:p-6 border border-slate-100 md:border-0 md:border-b md:border-slate-100 last:border-0 shadow-sm md:shadow-none flex flex-col md:flex-row md:items-center md:gap-6 transition-all hover:shadow-md md:hover:shadow-none">
                <div class="flex flex-col md:flex-row md:items-center gap-4 md:gap-6 w-full">
                  <!-- Imagen e Info -->
                  <div class="flex items-center gap-4 flex-grow min-w-0">
                    <img :src="item.image" class="w-20 h-20 md:w-24 md:h-24 object-cover rounded-2xl border border-slate-100 shadow-sm flex-shrink-0" />
                    <div class="flex-grow min-w-0">
                      <p class="font-black text-slate-900 text-sm md:text-base leading-tight truncate">{{ item.name }}</p>
                      <p class="text-[10px] md:text-[11px] font-bold text-blue-600 mt-1 tracking-wider">
                        $ {{ item.prices[selectedCity].toFixed(2) }} <span class="text-slate-400 font-medium">/ unidad</span>
                      </p>
                    </div>
                    <!-- Papelera Móvil -->
                    <button @click="deleteFromCart(item.id)" class="md:hidden w-10 h-10 flex items-center justify-center bg-red-50 text-red-500 rounded-xl">
                      <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                    </button>
                  </div>

                  <!-- Cantidad y Subtotal -->
                  <div class="flex items-center justify-between md:gap-8">
                    <!-- Selector Cantidad -->
                    <div class="w-32 flex-shrink-0">
                      <div class="flex items-center gap-1 bg-slate-50 border border-slate-200 rounded-xl p-1 shadow-inner h-11">
                        <button @click="removeFromCart(item.id)" class="w-9 h-full flex items-center justify-center text-slate-400 hover:text-orange-500 text-xl font-bold transition-colors">-</button>
                        <div class="flex-grow text-center font-black text-slate-900 text-sm">
                          {{ isDecimalProduct(item) ? item.quantity.toFixed(2) : item.quantity }}
                        </div>
                        <button @click="addToCart(item)" class="w-9 h-full flex items-center justify-center text-slate-400 hover:text-orange-500 text-xl font-bold transition-colors">+</button>
                      </div>
                    </div>

                    <!-- Subtotal -->
                    <div class="text-right min-w-[100px] md:w-32">
                      <span class="md:hidden text-[9px] font-black uppercase text-slate-400 block mb-0.5 tracking-widest">Subtotal</span>
                      <p class="font-black text-slate-900 text-xl md:text-lg tracking-tighter">
                        $ {{ (item.quantity * item.prices[selectedCity]).toFixed(2) }}
                      </p>
                    </div>

                    <!-- Papelera Desktop -->
                    <div class="hidden md:block w-10">
                      <button @click="deleteFromCart(item.id)" class="text-slate-300 hover:text-red-500 transition-colors">
                        <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Order Summary & Checkout (Right Sidebar in Modal) -->
          <div class="w-full md:w-[450px] bg-white md:bg-slate-900 p-8 md:p-12 flex flex-col md:border-l border-slate-100 md:border-white/5 overflow-y-visible md:overflow-y-auto custom-scrollbar">
            <div class="space-y-10 flex-grow">
              <div class="flex justify-between items-center">
                <h4 class="text-xl font-black uppercase tracking-widest text-orange-500">Resumen del Pedido</h4>
                <button @click="clearCart" class="text-[10px] font-black uppercase tracking-widest text-red-500 md:text-red-400/60 hover:text-red-600 md:hover:text-red-400 transition-colors">Vaciar Carrito</button>
              </div>
              
              <!-- Customer Form -->
              <div class="space-y-8">
                <div class="space-y-3">
                  <label class="text-[10px] font-black uppercase tracking-widest text-slate-400 flex justify-between items-center">
                    <span>Nombre del Cliente</span>
                    <span v-if="!customerName" class="text-orange-500/50 text-[8px]">Requerido</span>
                  </label>
                  <div class="relative group">
                    <input v-model="customerName" type="text" placeholder="Ej: Juan Pérez" 
                          class="w-full bg-slate-50 md:bg-white/5 border border-slate-200 md:border-white/10 rounded-2xl py-5 px-6 text-slate-900 md:text-white focus:ring-2 focus:ring-orange-500 outline-none transition-all group-hover:border-slate-300 md:group-hover:border-white/20" />
                    <svg class="w-5 h-5 text-slate-300 md:text-white/20 absolute right-6 top-1/2 -translate-y-1/2 group-focus-within:text-orange-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                  </div>
                </div>
                <div class="space-y-3">
                  <label class="text-[10px] font-black uppercase tracking-widest text-slate-400">Sede para el Pedido</label>
                  <div class="relative group">
                    <select v-model="selectedCity" 
                            class="w-full bg-slate-50 md:bg-white/5 border border-slate-200 md:border-white/10 rounded-2xl py-5 px-6 text-slate-900 md:text-white focus:ring-2 focus:ring-orange-500 outline-none cursor-pointer appearance-none transition-all group-hover:border-slate-300 md:group-hover:border-white/20">
                      <option value="Táchira" class="text-slate-900">San Cristóbal (Táchira)</option>
                      <option value="Caracas" class="text-slate-900">Caracas</option>
                      <option value="Barinas" class="text-slate-900">Barinas</option>
                      <option value="Nacional / Otros" class="text-slate-900">Otras Ciudades / Nacional</option>
                    </select>
                    <svg class="w-5 h-5 text-slate-300 md:text-white/20 absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none group-focus-within:text-orange-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                </div>
              </div>

            <!-- Totals & Button -->
            <div class="mt-12 pt-10 border-t border-slate-100 md:border-white/10 space-y-8 pb-32 md:pb-0">
              <div class="space-y-5">
                <div class="flex justify-between items-center text-slate-500 md:text-slate-400 text-sm">
                  <span class="font-medium">Subtotal de productos:</span>
                  <span class="font-bold text-slate-900 md:text-white text-lg">${{ cartTotal.toFixed(2) }}</span>
                </div>
                <div class="flex justify-between items-center text-slate-500 md:text-slate-400 text-sm">
                  <span class="font-medium">IVA (16%):</span>
                  <span class="font-bold text-slate-900 md:text-white text-lg">${{ cartIVA.toFixed(2) }}</span>
                </div>
                <div class="flex flex-col gap-2 pt-8 border-t border-slate-200 md:border-white/20 hidden md:flex">
                  <div class="flex justify-between items-end">
                    <span class="text-xs font-black uppercase tracking-[0.2em] text-slate-500">Monto Total Estimado</span>
                    <span class="text-5xl font-black text-orange-500 tracking-tighter">${{ cartGrandTotal.toFixed(2) }}</span>
                  </div>
                </div>
              </div>

              <button @click="checkoutWhatsApp" :disabled="cart.length === 0"
                      class="hidden md:flex w-full py-7 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-black rounded-[2.5rem] hover:scale-[1.02] active:scale-95 transition-all shadow-2xl shadow-orange-500/30 items-center justify-center gap-4 disabled:opacity-50 disabled:scale-100 disabled:shadow-none">
                <span class="text-lg">Realizar Pedido vía WhatsApp</span>
                <svg class="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.025 3.334l-.639 2.336 2.395-.627c1.012.554 2.112.847 3.013.847l.001-.001c3.181 0 5.769-2.587 5.77-5.768 0-3.181-2.588-5.787-5.797-5.787zm3.844 8.805c-.157.443-.913.848-1.258.896-.345.048-.689.048-1.121-.097-.281-.097-.615-.224-1.12-.423-2.008-.79-3.328-2.827-3.428-2.96-.101-.133-.808-1.077-.808-2.052 0-.974.506-1.455.688-1.657.182-.202.396-.253.528-.253.133 0 .265.001.381.006.116.006.273-.044.428.329.157.373.532 1.298.579 1.398.047.101.079.219.012.355-.067.136-.101.219-.202.339-.101.119-.214.269-.304.37-.101.114-.206.239-.089.439.117.2.521.859 1.121 1.393.771.688 1.419.902 1.621 1.002.201.101.319.084.439-.05.12-.134.521-.607.659-.813.137-.206.274-.173.463-.105.188.068 1.196.564 1.401.666.206.101.343.151.394.24.051.088.051.513-.106.956z"/></svg>
              </button>
              <p class="hidden md:block text-center text-[10px] text-slate-500 uppercase tracking-widest font-bold">Respuesta inmediata en horario comercial</p>
            </div>
          </div>

          <!-- STICKY MOBILE FOOTER -->
          <div class="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 p-6 z-[130] shadow-[0_-15px_40px_rgba(0,0,0,0.1)] flex flex-col gap-4">
             <div class="flex justify-between items-center">
                <div>
                   <span class="text-[9px] font-black uppercase text-slate-400 tracking-widest block mb-0.5">Total Estimado</span>
                   <span class="text-3xl font-black text-slate-900 tracking-tighter">${{ cartGrandTotal.toFixed(2) }}</span>
                </div>
                <div class="text-right">
                   <span class="text-[9px] font-black uppercase text-slate-400 tracking-widest block mb-0.5">Items</span>
                   <span class="text-xl font-black text-blue-600">{{ cart.length }}</span>
                </div>
             </div>
             <button @click="checkoutWhatsApp" :disabled="cart.length === 0"
                     class="w-full py-5 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-black rounded-2xl flex items-center justify-center gap-3 shadow-xl shadow-orange-500/20 active:scale-95 transition-all">
                <span>Realizar Pedido WhatsApp</span>
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.025 3.334l-.639 2.336 2.395-.627c1.012.554 2.112.847 3.013.847l.001-.001c3.181 0 5.769-2.587 5.77-5.768 0-3.181-2.588-5.787-5.797-5.787zm3.844 8.805c-.157.443-.913.848-1.258.896-.345.048-.689.048-1.121-.097-.281-.097-.615-.224-1.12-.423-2.008-.79-3.328-2.827-3.428-2.96-.101-.133-.808-1.077-.808-2.052 0-.974.506-1.455.688-1.657.182-.202.396-.253.528-.253.133 0 .265.001.381.006.116.006.273-.044.428.329.157.373.532 1.298.579 1.398.047.101.079.219.012.355-.067.136-.101.219-.202.339-.101.119-.214.269-.304.37-.101.114-.206.239-.089.439.117.2.521.859 1.121 1.393.771.688 1.419.902 1.621 1.002.201.101.319.084.439-.05.12-.134.521-.607.659-.813.137-.206.274-.173.463-.105.188.068 1.196.564 1.401.666.206.101.343.151.394.24.051.088.051.513-.106.956z"/></svg>
             </button>
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

// Bloquear scroll cuando el carrito está abierto
watch(showMobileCart, (val) => {
  if (val) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
});

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

const products = productsData.map(product => {
  let img = product.image;
  const name = product.name.toUpperCase();
  
  // 1. Match 4-digit code (e.g. 6010, 1002)
  const codeMatch = name.match(/(\d{4})/);
  if (codeMatch) {
    const code = codeMatch[1];
    const isPB = name.includes('PB');
    
    // Special check for codes known to exist in /img/
    const validCodes = ['1002', '1011', '1040', '1049', '1052', '1067', '1068', '1087', '6814','1096', '1800', '1805', '2010', '2011', '2021', '2025', '2031', '2032', '2034', '2037', '2039', '2040', '2041', '2049', '2056', '2061', '2065', '2067', '2068', '2074', '2075', '2076', '2086', '2087', '2088', '2090', '2095', '2096', '2097', '2631', '2800', '2805', '6010', '6011', '6021', '6022', '6025', '6026', '6031', '6032', '6033', '6034', '6035', '6037','6038', '6039', '6040', '6041', '6049', '6050', '6051', '6052', '6056', '6060', '6061', '6062', '6065', '6066', '6067', '6068', '6072', '6073', '6074', '6075', '6076', '6080', '6086', '6087', '6088', '6090', '6095', '6096', '6097', '6631', '6800', '6805', '7803', '7804', '7807', '7809', '7810', '7811', '7813', '7816', '7819', '9101', '9102', '9103', '9104', '9107'];
    
    if (isPB && ['7803', '7804'].includes(code)) {
      img = `/img/${code} PB.jpg`;
    } else if (validCodes.includes(code)) {
      img = `/img/${code}.jpg`;
    }
  }
  
  // 2. Match Papel Ahumado
  else if (name.includes('PAPEL AHUMADO')) {
    if (name.includes('1%')) img = '/img/papel ahumado 1%.jpg';
    else if (name.includes('20%')) img = '/img/papel ahumado 20%.jpg';
    else if (name.includes('35%')) img = '/img/papel ahumado 35%.jpg';
    else if (name.includes('ESPEJO')) img = '/img/papel tipo espejo plata.jpg';
  }
  
  // 3. Match Esmerilado
  else if (name.includes('ESMERILADO')) {
    if (name.includes('BLANCO')) img = '/img/esmerilado blanco.jpg';
    else if (name.includes('GRIS')) img = '/img/esmerilado gris.jpg';
  }
  
  // 4. Match TM Reflectivo
  else if (name.includes('TM REFLECTIVO') || (name.includes('TM ') && !name.includes('DE '))) {
    if (name.includes('BLANCO')) img = '/img/tm blanco.jpg';
    else if (name.includes('AMARILLO')) img = '/img/tm amarillo.jpg';
    else if (name.includes('AZUL')) img = '/img/tm azul.jpg';
    else if (name.includes('ROJO')) img = '/img/tm rojo.jpg';
    else if (name.includes('VERDE')) img = '/img/tm verde.jpg';
    else if (name.includes('NARANJA')) img = '/img/tm naranja.jpg';
    else if (name.includes('NEGRO')) img = '/img/tm negro.jpg';
  }
  
  // 5. Match DF Pastel
  else if (name.includes('DF ')) {
    const dfMatch = name.match(/DF\s?(\d{2})/);
    if (dfMatch) {
      const num = dfMatch[1];
      if (['02','03','05','06','07'].includes(num)) img = `/img/df ${num}.jpg`;
      else img = `/img/df${num}.jpg`;
    }
  }

  // 6. Other specific ones
  else if (name.includes('TORNASOL')) img = '/img/tornasol.jpg';
  else if (name.includes('VINYL IMANTADO')) img = '/img/vinyl imantado.jpg';
  else if (name.includes('ROSA GLITER')) img = '/img/rosa gliter.jpg';
  else if (name.includes('CLEAR')) img = '/img/CLEAR.jpg';
  else if (name.includes('TA-02')) img = '/img/TA-02.jpg';
  else if (name.includes('TT01')) img = '/img/TT01.jpg';
  
  return { ...product, image: img };
});
const searchQuery = ref('');
const currentPage = ref(1);
const itemsPerPage = ref(6);

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

const totalPages = computed(() => Math.ceil(filteredProducts.value.length / itemsPerPage.value));

const displayedProducts = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value;
  return filteredProducts.value.slice(start, start + itemsPerPage.value);
});

const quickSearchQuery = ref('');
const quickSearchResults = computed(() => {
  if (!quickSearchQuery.value) return [];
  const q = quickSearchQuery.value.toLowerCase();
  return products.filter(p => 
    p.name.toLowerCase().includes(q) || 
    p.id.toLowerCase().includes(q)
  ).slice(0, 5);
});

const quickAdd = (product) => {
  addToCart(product);
  quickSearchQuery.value = '';
};

const visiblePages = computed(() => {
  const range = [];
  const start = Math.max(1, currentPage.value - 2);
  const end = Math.min(totalPages.value, start + 4);
  for (let i = start; i <= end; i++) range.push(i);
  return range;
});

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
};

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
};

watch([activeCategory, searchQuery], () => {
  currentPage.value = 1;
});

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
    existing.quantity = Math.round((existing.quantity + step) * 100) / 100;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
};

const removeFromCart = (productId) => {
  const index = cart.findIndex(item => item.id === productId);
  if (index !== -1) {
    const step = isDecimalProduct(cart[index]) ? 0.1 : 1;
    if (cart[index].quantity > step) {
      cart[index].quantity = Math.round((cart[index].quantity - step) * 100) / 100;
    } else {
      cart.splice(index, 1);
    }
  }
};

const clearCart = () => {
  // Eliminamos el confirm() del navegador por si acaso está bloqueado
  cart.splice(0, cart.length);
  quickSearchQuery.value = '';
};

const deleteFromCart = (productId) => {
  const index = cart.findIndex(item => item.id === productId);
  if (index !== -1) {
    cart.splice(index, 1);
  }
};

const cartTotal = computed(() => {
  const total = cart.reduce((total, item) => total + (item.prices[selectedCity.value] * item.quantity), 0);
  return Math.round(total * 100) / 100;
});

const cartIVA = computed(() => {
  const iva = cartTotal.value * 0.16;
  return Math.round(iva * 100) / 100;
});

const cartGrandTotal = computed(() => {
  return Math.round((cartTotal.value + cartIVA.value) * 100) / 100;
});

const checkoutWhatsApp = () => {
  if (!customerName.value) {
    alert('Por favor, ingresa tu nombre antes de realizar el pedido.');
    return;
  }

  // Enrutamiento por ciudad
  const phoneNumbers = {
    'Táchira': '584247285832',
    'Caracas': '584227772800',
    'Barinas': '584120998630',
    'Nacional / Otros': '584247285832'
  };

  const phoneNumber = phoneNumbers[selectedCity.value] || '584247285832';
  
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
