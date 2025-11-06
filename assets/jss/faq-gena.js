document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.container');
    
    // Удаляем существующие секции (кроме header, nav и footer)
    const existingSections = container.querySelectorAll('.section');
    existingSections.forEach(section => {
        if (!section.closest('header') && !section.closest('nav') && !section.closest('footer')) {
            section.remove();
        }
    });
    
    // Находим элемент перед footer для вставки секций
    const footer = container.querySelector('footer');
    
    // Создаем и добавляем секции из массива данных
    faqData.forEach(category => {
        const section = document.createElement('div');
        section.className = 'section';
        section.id = category.id;
        
        let sectionHTML = `<h2>${category.title}</h2>`;
        
        category.functions.forEach(func => {
            sectionHTML += `
                <h3><code>${func.name}</code></h3>
                <div class="function-desc">
                    ${func.description.replace(/\n/g, '<br>')}
                </div>
                <div class="example-title">Example:</div>
                <pre>${func.example}</pre>
            `;
        });
        
        section.innerHTML = sectionHTML;
        container.insertBefore(section, footer);
    });
    
    console.log('FAQ данные успешно загружены и отображены!');
});