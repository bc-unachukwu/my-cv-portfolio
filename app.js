const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');

const pageTransitions = () => {
    // Button click Active class
    for (let i = 0; i < sectBtn.length; i++) {
        sectBtn[i].addEventListener('click', function() {
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn';
        })
    }

    // Sections Active class
    allSections.addEventListener('click', (e) => {
        const id = e.target.dataset.id;
        if(id) {

            // --Animation for buttons-- (DISABLED)
            // Remove selected from the other buttons
            // sectBtns.forEach((btn) => {
            //     btn.classList.remove('active');
            // })
            // e.target.classList.add('active');

            // --Animation for sections--
            // Hide other sections
            sections.forEach((section) =>{
                section.classList.remove('active')
            })
            // Animate active section
            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })
   
}

pageTransitions();