import { ref, onMounted, onUnmounted, shallowRef } from 'vue'

const isShown = shallowRef(false); 
const component = ref(null)
const props = ref({})

// by convention, composable function names start with "use"
export function useGenericModal() {
  return {
    /**
     * Variables
     */
    isShown, 
    component, 
    props, 

    /** 
     * Methods
     */
    setModal(_component, _props) {
        component.value = _component; 
        props.value = _props;
    },
    hideModal() {
        isShown.value = false;
    },
    showModal() {
        isShown.value = true; 
    },
    toggleModal() {
        if(isShown.value == true) 
            this.hideModal(); 
        else if(isShown.value == false) 
            this.showModal();
    }
 }
}