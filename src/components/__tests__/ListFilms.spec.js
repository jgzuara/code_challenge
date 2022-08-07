import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import ListFilms from '../ListFilms.vue'

describe('ListFilms', () => {
  it('renders properly', () => {
    const wrapper = mount(ListFilms, {
       props: { 
        films: [ { 
          "score": 1.4268639, 
          "show": { 
            "id": 174, 
            "url": "https://www.tvmaze.com/shows/174/parks-and-recreation", 
            "name": "Parks and Recreation", 
            "type": "Scripted", 
            "language": "English", 
            "genres": [ "Comedy" ], 
            "status": "Ended", 
            "runtime": 30, 
            "averageRuntime": 30, 
            "premiered": "2009-04-09", 
            "ended": "2015-02-24", 
            "officialSite": "http://www.nbc.com/parks-and-recreation", 
            "schedule": { "time": "20:00", "days": [ "Tuesday" ] }, 
            "rating": { "average": 8.3 }, 
            "weight": 97, 
            "network": { 
              "id": 1, 
              "name": "NBC", 
              "country": { 
                "name": "United States", 
                "code": "US", 
                "timezone": "America/New_York" 
              }, "officialSite": "https://www.nbc.com/" 
            }, "webChannel": null, "dvdCountry": null, 
            "externals": { 
              "tvrage": 21686, 
              "thetvdb": 84912, 
              "imdb": "tt1266020" 
            }, 
            "image": { 
              "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/0/2439.jpg", 
              "original": "https://static.tvmaze.com/uploads/images/original_untouched/0/2439.jpg" 
            }, 
            "summary": "<p><b>Parks and Recreation</b> is a comedy series based around the main character Leslie Knope (a bureaucrat) in the parks department of Pawnee.</p>", 
            "updated": 1651128192, 
            "_links": { 
              "self": { 
                "href": "https://api.tvmaze.com/shows/174" 
              }, "previousepisode": { 
                "href": "https://api.tvmaze.com/episodes/57787" 
              } 
            } 
          } 
        } ]
      } 
    })
    expect(wrapper.html()).toContain('<img')
  })
})
