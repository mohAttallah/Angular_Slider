import { Component, ElementRef, ViewChild } from "@angular/core";

@Component({
    selector: 'app-slider',
    templateUrl: "./slider.component.html",
    styleUrls: ["./slider.component.scss"],
})

export class SliderComponent {
    // Component logic goes here
    @ViewChild('scrollContainer') scrollContainer!: ElementRef;

    scrollLeft() {
        this.scrollContainer.nativeElement.scrollBy({ left: -100, behavior: 'smooth' });
    }

    scrollRight() {
        this.scrollContainer.nativeElement.scrollBy({ left: 100, behavior: 'smooth' });
    }
}
