import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'el-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  example1SwipeOptions: any;
  imageUrls: (any)[] = [
    'assets/img/slider2.jpg',
    'assets/img/slider3.jpg',
    'assets/img/slider4.jpg'
  ];
  height: string = '40%';
  minHeight: string = '400px';
  arrowSize: string = '30px';
  showArrows: boolean = true;
  disableSwiping: boolean = false;
  autoPlay: boolean = true;
  autoPlayInterval: number = 3333;
  stopAutoPlayOnSlide: boolean = true;
  debug: boolean = false;
  backgroundSize: string = 'cover';
  backgroundPosition: string = 'center center';
  backgroundRepeat: string = 'no-repeat';
  showDots: boolean = true;
  dotColor: string = '#FFF';
  showCaptions: boolean = true;
  captionColor: string = '#FFF';
  captionBackground: string = 'rgba(0, 0, 0, .35)';
  lazyLoad: boolean = false;
  hideOnNoSlides: boolean = false;
  width: string = '100%';
  fullscreen: boolean = false;
  constructor() { }

  ngOnInit() {
  }

}
