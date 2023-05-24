function scrollMedia(direction) {
    var mediaScroller = document.getElementById('media-scroller');
    var scrollAmount = 300; // Cantidad de desplazamiento en píxeles
    if (direction === 'prev') {
        mediaScroller.scrollLeft -= scrollAmount; // Desplazamiento hacia la izquierda
    } else if (direction === 'next') {
        mediaScroller.scrollLeft += scrollAmount; // Desplazamiento hacia la derecha
    }
}