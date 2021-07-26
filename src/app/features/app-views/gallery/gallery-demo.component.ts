import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery-demo',
  templateUrl: './gallery-demo.component.html',
})
export class GalleryDemoComponent implements OnInit {

  constructor() { }

  public pictures = [
    {
      src: "assets/img/superbox/andhika-y-wiguna-LNqX_PcO4II-unsplash.jpg",
      img: "assets/img/superbox/andhika-y-wiguna-LNqX_PcO4II-unsplash.jpg",
      alt: "My first photoshop layer mask on a high end PSD template theme",
    },
    {
      src: "assets/img/superbox/anton-murygin-nqSD287S-fc-unsplash.jpg",
      img: "assets/img/superbox/anton-murygin-nqSD287S-fc-unsplash.jpg",
      alt: "My first photoshop layer mask on a high end PSD template theme",
    },

    {
      src: "assets/img/superbox/artem-beliaikin-JRU0FrS8eys-unsplash.jpg",
      img: "assets/img/superbox/artem-beliaikin-JRU0FrS8eys-unsplash.jpg",
      alt: "My first photoshop layer mask on a high end PSD template theme",
    },

    {
      src: "assets/img/superbox/aviv-rachmadian-7F7kEHj72MQ-unsplash.jpg",
      img: "assets/img/superbox/aviv-rachmadian-7F7kEHj72MQ-unsplash.jpg",
      alt: "My first photoshop layer mask on a high end PSD template theme",
    },

    {
      src: "assets/img/superbox/charles-deluvio-_4K7BwaHUGc-unsplash.jpg",
      img: "assets/img/superbox/charles-deluvio-_4K7BwaHUGc-unsplash.jpg",
      alt: "My first photoshop layer mask on a high end PSD template theme", title: "Study Time",
    },
    {
      src: "assets/img/superbox/charles-deluvio-kyD7I53MEuE-unsplash.jpg",
      img: "assets/img/superbox/charles-deluvio-kyD7I53MEuE-unsplash.jpg",
      alt: "My first photoshop layer mask on a high end PSD template theme",
    },

    {
      src: "assets/img/superbox/gervyn-louis-ZVZxYaSrvAI-unsplash.jpg",
      img: "assets/img/superbox/gervyn-louis-ZVZxYaSrvAI-unsplash.jpg",
      alt: "My first photoshop layer mask on a high end PSD template theme", title: "New Styla",
    },

    {
      src: "assets/img/superbox/jinsoo-choi-3FKaVc4llPA-unsplash.jpg",
      img: "assets/img/superbox/jinsoo-choi-3FKaVc4llPA-unsplash.jpg",
      alt: "My first photoshop layer mask on a high end PSD template theme", title: "Cristpta",
    },

    {
      src: "assets/img/superbox/logan-weaver-KiYQn4o-K7w-unsplash.jpg",
      img: "assets/img/superbox/logan-weaver-KiYQn4o-K7w-unsplash.jpg",
      alt: "My first photoshop layer mask on a high end PSD template theme",
    },

    {
      src: "assets/img/superbox/markus-winkler-1lmPFQ7ZXeM-unsplash.jpg",
      img: "assets/img/superbox/markus-winkler-1lmPFQ7ZXeM-unsplash.jpg",
      alt: "My first photoshop layer mask on a high end PSD template theme",
    },

    {
      src: "assets/img/superbox/markus-winkler-bfuy8aRCRt4-unsplash.jpg",
      img: "assets/img/superbox/markus-winkler-bfuy8aRCRt4-unsplash.jpg",
      alt: "My first photoshop layer mask on a high end PSD template theme", title: "Elegance",
    },

    {
      src: "assets/img/superbox/nilay-sozbir-WmS0I2iKDtE-unsplash.jpg",
      img: "assets/img/superbox/nilay-sozbir-WmS0I2iKDtE-unsplash.jpg",
      alt: "My first photoshop layer mask on a high end PSD template theme", title: "China Town",
    },

    {
      src: "assets/img/superbox/s-o-c-i-a-l-c-u-t-7KkDiSs5UdQ-unsplash.jpg",
      img: "assets/img/superbox/s-o-c-i-a-l-c-u-t-7KkDiSs5UdQ-unsplash.jpg",
      alt: "My first photoshop layer mask on a high end PSD template theme", title: "Sky Diving",
    },

    {
      src: "assets/img/superbox/sunyu-kim-VGZyA-NNapw-unsplash.jpg",
      img: "assets/img/superbox/sunyu-kim-VGZyA-NNapw-unsplash.jpg",
      alt: "My first photoshop layer mask on a high end PSD template theme",
    },

    {
      src: "assets/img/superbox/superbox-thumb-22.jpg",
      img: "assets/img/superbox/superbox-full-22.jpg",
      alt: "My first photoshop layer mask on a high end PSD template theme",
    },
    {
      src: "assets/img/superbox/wilhelm-gunkel-o51Hd_BuFvc-unsplash.jpg",
      img: "assets/img/superbox/wilhelm-gunkel-o51Hd_BuFvc-unsplash.jpg",
      alt: "My first photoshop layer mask on a high end PSD template theme",
    },

    {
      src: "assets/img/superbox/superbox-thumb-17.jpg",
      img: "assets/img/superbox/superbox-full-17.jpg",
      alt: "My first photoshop layer mask on a high end PSD template theme", title: "Snowpine",
    },

    {
      src: "assets/img/superbox/superbox-thumb-18.jpg",
      img: "assets/img/superbox/superbox-full-18.jpg",
      alt: "My first photoshop layer mask on a high end PSD template theme",
    },

    {
      src: "assets/img/superbox/superbox-thumb-19.jpg",
      img: "assets/img/superbox/superbox-full-19.jpg",
      alt: "My first photoshop layer mask on a high end PSD template theme",
    },

    {
      src: "assets/img/superbox/superbox-thumb-20.jpg",
      img: "assets/img/superbox/superbox-full-20.jpg",
      alt: "My first photoshop layer mask on a high end PSD template theme", title: "Dragon Fly",
    },

    {
      src: "assets/img/superbox/superbox-thumb-21.jpg",
      img: "assets/img/superbox/superbox-full-21.jpg",
      alt: "My first photoshop layer mask on a high end PSD template theme", title: "Kinds Road",
    },

    {
      src: "assets/img/superbox/superbox-thumb-22.jpg",
      img: "assets/img/superbox/superbox-full-22.jpg",
      alt: "My first photoshop layer mask on a high end PSD template theme", title: "Tokyo",
    },

    {
      src: "assets/img/superbox/superbox-thumb-23.jpg",
      img: "assets/img/superbox/superbox-full-23.jpg",
      alt: "My first photoshop layer mask on a high end PSD template theme", title: "Rome",
    },

    {
      src: "assets/img/superbox/superbox-thumb-24.jpg",
      img: "assets/img/superbox/superbox-full-24.jpg",
      alt: "My first photoshop layer mask on a high end PSD template theme", title: "Traning",
    }
  ];

  ngOnInit() {
  }


  onDelete(picture){
    console.log('GalleryDemoComponent onDelete', picture)
  }
  onEdit(picture){
    console.log('GalleryDemoComponent onEdit', picture)
  }


}
