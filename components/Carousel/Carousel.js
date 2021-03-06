class Carousel {
    constructor(carousel) {
        this.carousel = carousel;
        this.leftButton = this.carousel.querySelector('.left-button');
        this.rightButton = this.carousel.querySelector('.right-button');

        this.images = this.carousel.querySelectorAll('img');

        this.images = Array.from(this.images).map(img => new CarouselImage(img));

        this.currentIndex = 0;

        // this.currentImage = this.images[this.currentIndex];

        this.leftButton.addEventListener('click', () => this.handleLeftClick());
        this.rightButton.addEventListener('click', () => this.handleRightClick());
    }

    // Methods

    handleLeftClick() {
        this.images.forEach(img => img.hide());

        this.currentIndex === this.images.length - 1 ? this.currentIndex = 0 : this.currentIndex = this.currentIndex + 1;

        this.images[this.currentIndex].showImage();


    }
    handleRightClick() {
        this.images.forEach(img => img.hide());

        this.currentIndex === 0 ? this.currentIndex = this.images.length - 1 : this.currentIndex = this.currentIndex - 1;

        this.images[this.currentIndex].showImage();
    }
}

class CarouselImage {
    constructor(image) {
        this.image = image;
    }

    showImage() {
        this.image.style.display = 'inline-block';
    }

    hide() {
        this.image.style.display = 'none';
    }
}


// Initial DOM Reference
let carousel = document.querySelector('.carousel');
carousel = new Carousel(carousel);

carousel.images[0].showImage();

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/