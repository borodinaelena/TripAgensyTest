import { Component } from '@angular/core';
import { IMyTrip } from '../interfaces/trips'

@Component({
  selector: 'app-demodata'
})
export class DemodataService {

  trips: IMyTrip[];

  constructor() {
    this.trips = [
      {
        title: "Beautiful place",
        id: '1',
        imageUrl: 'https://ukranews.com/upload/news/2019/06/13/5d021ba50248f-kyiv-today-2015_1200.jpg',
        fromDate: '25/04/2020',
        toDate: '13/05/2020',
        location: 'Kyiv',
        price: 200,
        avgRating: 5,
        description: 'This city will become your favorite as soon as you visit it',
        like: true
      },
      {
        title: "The City of New York",
        id: '2',
        imageUrl: 'https://pix10.agoda.net/geo/city/318/1_318_02.jpg?s=1920x822',
        fromDate: '13/05/2020',
        toDate: '17/06/2020',
        location: 'NY',
        price: 500,
        avgRating: 5,
        description: "New York (also called New York City, short form NYC) is the biggest city in the United States, located in the state of New York. Over 8 million people live in it, and over 22 million people live in the bigger New York metropolitan area. It is in the south end of the state of New York, which is in the northeastern United States. It is the financial capital of the US since it is home to the nation's stock market, Wall Street, and the One World Trade Center. It is also the home of the United Nations Headquarters.",
        like: true
      },
      {
        title: "Town of LOVE",
        id: '3',
        imageUrl: 'https://photos.mandarinoriental.com/is/image/MandarinOriental/paris-2017-home?wid=2880&hei=1280&fmt=jpeg&crop=9,336,2699,1200&anchor=1358,936&qlt=75,0&fit=wrap&op_sharpen=0&resMode=sharp2&op_usm=0,0,0,0&iccEmbed=0&printRes=72',
        fromDate: '19/10/2019',
        toDate: '20/11/2019',
        location: 'Paris',
        price: 800,
        avgRating: 4.5,
        description: 'Paris is the center of French economy, politics, traffic and culture. Paris has many art museums and historical buildings. As a traffic center, Paris has a very good underground subway system (called the Metro). It also has two airports. ',
        like: true
      },
      {
        title: "Los Angeles",
        id: '4',
        imageUrl: 'https://www.forumdaily.com/wp-content/uploads/2016/11/Depositphotos_48010397_m-2015.jpg',
        fromDate: '21/11/2019',
        toDate: '30/11/2019',
        location: 'LA',
        price: 300,
        avgRating: 4,
        description: 'Los Angeles officially the City of Los Angeles and often known by its initials L.A., is the most populous city in California, the second most populous city in the United States, after New York City, and the third most populous city in North America. With an estimated population of nearly four million,[11] Los Angeles is the cultural, financial, and commercial center of Southern California. The city is known for its Mediterranean climate, ethnic diversity, Hollywood, the entertainment industry, and its sprawling metropolis. Los Angeles is the largest city on the West Coast of North America.',
        like: false
      },
      {
        title: "All you need is love",
        id: '5',
        imageUrl: 'https://tuusik.ee/img/medium/65549ba03987ca8149076f43ec20cf7b.jpg',
        fromDate: '20/10/2019',
        toDate: '23/10/2019',
        location: 'Nice',
        price: 150,
        avgRating: 4,
        description: 'Nice (pronounced "neese") is a city in southern France on the Mediterranean coast. It is a commune in the French department of Alpes-Maritimes.',
        like: true
      }
    ]
  }
  getTrips() {
    return this.trips;
  }

}
