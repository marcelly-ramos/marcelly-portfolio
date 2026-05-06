function scrollCarousel(direction) {
    const track = document.getElementById('wireframe-track');
    
    // Verifica se o elemento existe na página antes de executar
    if (track) {
        const slide = track.querySelector('.carousel-slide');
        
        const scrollAmount = slide.clientWidth + 30; 
        
        track.scrollBy({ left: scrollAmount * direction, behavior: 'smooth' });
    }
}