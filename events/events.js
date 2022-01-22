class Events {

    /**
     * @param defaultActiveClass = !optional , This is the default class the will be used to add, remove or toggle on element 
     */ 
    constructor(defaultActiveClass){

        // the default Active class
        this.defaultActiveClass = defaultActiveClass ? defaultActiveClass : "active"


        console.log(this.defaultActiveClass)
        /////////////////////////////////////////////   -click
        // on click - toggle
        const el_onclick_toggle = document.querySelectorAll('.ay-events-onclick-toggle')
        el_onclick_toggle.forEach(el => {
            el.onclick = ()=>{
                el.classList.toggle(el.getAttribute("ay-events-onclick-toggle") ? el.getAttribute("ay-events-onclick-toggle") : this.defaultActiveClass)
            }
        });
        // on click - add
        const el_onclick_add = document.querySelectorAll('.ay-events-onclick-add')
        el_onclick_add.forEach(el => {
            el.onclick = ()=>{
                el.classList.add(el.getAttribute("ay-events-onclick-add") ? el.getAttribute("ay-events-onclick-add") : this.defaultActiveClass)
            }
        });
        // on click - remove 
        const el_onclick_remove = document.querySelectorAll('.ay-events-onclick-remove')
        el_onclick_remove.forEach(el => {
            el.onclick = ()=>{
                el.classList.remove(el.getAttribute("ay-events-onclick-remove") ? el.getAttribute("ay-events-onclick-remove") : this.defaultActiveClass)
            }
        });

        /////////////////////////////////////////////   -Hover
        // on hover -enter -add
        const el_hover_enter_add = document.querySelectorAll('.ay-events-hover-enter-add')
        el_hover_enter_add.forEach(el => {
            el.onmouseenter = ()=>{
                el.classList.add(el.getAttribute("ay-events-hover-enter-add") ? el.getAttribute("ay-events-hover-enter-add") : this.defaultActiveClass)
            }
        });
        // on hover -enter -remove
        const el_hover_enter_remove = document.querySelectorAll('.ay-events-hover-enter-remove')
        el_hover_enter_remove.forEach(el => {
            el.onmouseenter= ()=>{
                el.classList.remove(el.getAttribute("ay-events-hover-enter-remove") ? el.getAttribute("ay-events-hover-enter-remove") : this.defaultActiveClass)
            }
        });
        // on hover -exit -add
        const el_hover_exit_add = document.querySelectorAll('.ay-events-hover-exit-add')
        el_hover_exit_add.forEach(el => {
            el.onmouseleave= ()=>{
                el.classList.add(el.getAttribute("ay-events-hover-exit-add") ? el.getAttribute("ay-events-hover-exit-add") : this.defaultActiveClass)
            }
        });
        // on hover -exit -remove
        const el_hover_exit_remove = document.querySelectorAll('.ay-events-hover-exit-remove')
        el_hover_exit_remove.forEach(el => {
            el.onmouseleave= ()=>{
                el.classList.remove(el.getAttribute("ay-events-hover-exit-remove") ? el.getAttribute("ay-events-hover-exit-remove") : this.defaultActiveClass)
            }
        });
        // on hover -toggle
        const el_hover_toggle = document.querySelectorAll('.ay-events-hover-toggle')
        el_hover_toggle.forEach(el => {
            el.onmouseenter = ()=>{
                el.classList.toggle(el.getAttribute("ay-events-hover-toggle") ? el.getAttribute("ay-events-hover-toggle") : this.defaultActiveClass)
            }
            el.onmouseleave = ()=>{
                el.classList.toggle(el.getAttribute("ay-events-hover-toggle") ? el.getAttribute("ay-events-hover-toggle") : this.defaultActiveClass)
            }
        });
    }
}



export default Events