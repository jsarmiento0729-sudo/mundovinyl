import { reactive } from 'vue';

export const globalState = reactive({
  selectedCity: localStorage.getItem('mundovinyl_city') || '',
  customerName: localStorage.getItem('mundovinyl_name') || '',
  hasSelectedCityThisSession: false, // Controla si ya preguntamos la ciudad en esta carga
  openCartOnLoad: false,             // Señal para abrir el carrito al cargar ProductsView
  resetCityOnLoad: false,            // Señal para mostrar modal de ciudad al cargar ProductsView
});
