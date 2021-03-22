class Movie {
    constructor(name, image, description, date, stars) {
      this.name = name;
      this.image = image;
      this.desc = description;
      this.date = date;
      this.stars = stars;
    }
  
    addTofavorites() {
      favoritMovies.add(this);
    }
  
    removeFromfavorites() {
      favoritMovies.delete(this);
    }
  }
  
  function renderTabs(movies) {
    const tabsBlock = document.getElementById('movies');
  
    tabsBlock.innerHTML = '';
    
    if (movies.size !== 0) {
      let starsRender = stars => {
        let res = '';
        
        stars.forEach(star => {
          res += `
            <div class="tab-content__star">${star}</div>
          `;
        });
    
        return res;
      };
      let tabsHTML = '',
        tabsContentHTML = '';
    
      movies.forEach((movie) => {
        let activeHeartClass = '';
        
        tabsHTML += `
          <div class="tab-item"><span>${movie.name}</span></div>
        `;
  
        if (favoritMovies.has(movie)) {
          activeHeartClass = ' add-to-favorites__active';
        }
  
        tabsContentHTML += `
          <div class="tab-content">
            <div class="tab-content__info">
              <div class="tab-content__add-to-favorites${activeHeartClass}"
                  value="${movie.name}">
                <svg onclick="addTofavorites(this)" xmlns="http://www.w3.org/2000/svg"
                    version="1.1" width="20px" height="20px" viewBox="0 0 512 512" xml:space="preserve">
                  <path d="M376,30c-27.783,0-53.255,8.804-75.707,26.168c-21.525,16.647-35.856,37.85-44.293,53.268    c-8.437-15.419-22.768-36.621-44.293-53.268C189.255,38.804,163.783,30,136,30C58.468,30,0,93.417,0,177.514    c0,90.854,72.943,153.015,183.369,247.118c18.752,15.981,40.007,34.095,62.099,53.414C248.38,480.596,252.12,482,256,482    s7.62-1.404,10.532-3.953c22.094-19.322,43.348-37.435,62.111-53.425C439.057,330.529,512,268.368,512,177.514    C512,93.417,453.532,30,376,30z"/>
                </svg>
              </div>
              <div class="tab-content__title">${movie.name}</div>
              <div class="tab-content__date">${movie.date}</div>
              <div class="tab-content__stars">
                ${starsRender(movie.stars)}
              </div>
              <div class="tab-content__desc">${movie.desc}</div>
            </div>
            <div class="tab-content__image">
              <img src="${movie.image}" alt="${movie.name} Promo">
            </div>
          </div>
        `;
      });
  
      tabsBlock.innerHTML += `
        <div id="tabs-block">
          ${tabsHTML}
        </div>
        <div id="tabs-content-block">
          ${tabsContentHTML}
        </div>
      `;
  
      hideTabsContent();
      showTabsContent();
    } else {
      tabsBlock.innerHTML = `
        <div class="empty-catalog">Oops.. unfortunately, you don't have any favorites yet.</div>
      `;
    }
  }
  
  function hideTabsContent() {
    const tabs = document.querySelectorAll('.tab-item'),
      tabsContent = document.querySelectorAll('.tab-content');
  
    tabs.forEach(tab => {
      tab.classList.remove('tab-item__active');
    });
  
    tabsContent.forEach(item => {
      item.classList.add('hide-tab-content');
      item.classList.remove('show-tab-content');
    });
  }
  
  function showTabsContent(i = 0) {
    const tabs = document.querySelectorAll('.tab-item'),
      tabsContent = document.querySelectorAll('.tab-content');
  
    tabsContent[i].classList.add('show-tab-content', 'fade-tab-content');
    tabsContent[i].classList.remove('hide-tab-content');
    tabs[i].classList.add('tab-item__active');
  }
  
  function addTofavorites(btn) {
    if (btn.parentNode.classList.contains('add-to-favorites__active')) {
      allMovies.forEach(el => {
        if (el.name === btn.parentNode.getAttribute('value')) {
          el.removeFromfavorites();
        }
      });
  
      btn.parentNode.classList.remove('add-to-favorites__active');
  
      if (filter === 'favorites') {
        renderTabs(favoritMovies);
      }
    } else {
      allMovies.forEach(el => {
        if (el.name === btn.parentNode.getAttribute('value')) {
          el.addTofavorites();
        }
      });
  
      btn.parentNode.classList.add('add-to-favorites__active');
    }
  }
  
  let favoritMovies = new Set();
  let allMovies = new Set([
    new Movie(
      "Us",
      "./assets/images/1.png",
      "In 1986, a young girl named Adelaide Thomas goes on vacation with her parents to Santa Cruz. At the Santa Cruz Beach Boardwalk, she wanders off and enters a funhouse named \"Find Yourself\", where she encounters a doppelgänger of herself in the House of mirrors. In the present day, the now-adult Adelaide is haunted by memories of the encounter. She goes on vacation with her husband, Gabe Wilson, and their children, Zora and Jason. She is apprehensive about the trip, but Gabe, eager to impress their rich friends Josh and Kitty Tyler, brushes off her misgivings. At the beach, Jason sees a man standing with his arms outstretched, blood dripping from one hand.",
      "March 8, 2019",
      ['Lupita Nyong\'o', 'Winston Duke', 'Elisabeth Moss']
    ),
    new Movie(
      "Get Out",
      "./assets/images/2.png",
      "Black photographer Chris Washington is apprehensive as he prepares to meet the family of his white girlfriend, Rose Armitage. Later, at the Armitage house in rural Upstate New York, Rose's brother Jeremy and their parents, neurosurgeon Dean and hypnotherapist Missy, make disconcerting comments about black people. Chris witnesses strange behavior from the estate's black housekeeper Georgina and groundskeeper Walter.",
      "January 23, 2017",
      ['Daniel Kaluuya', 'Allison Williams', 'Lil Rel Howery']
    ),
    new Movie(
      "A Quiet Place",
      "./assets/images/3.png",
      "Throughout the year 2020, most of Earth's human and animal populations have been annihilated by sightless extraterrestrial creatures. The creatures, which attack anything that makes noise, have hypersensitive hearing and are covered in armor which is invulnerable to bullets and explosives. The Abbott family – wife Evelyn, husband Lee, congenitally deaf daughter Regan, and sons Marcus and Beau – silently scavenge for supplies in a deserted town. Going barefoot while out in the open, the family communicates in American Sign Language. Four-year-old Beau is drawn to a battery-powered space shuttle toy, but Lee takes it away due to the noise it would make. Regan returns the toy to Beau, who also takes the batteries that his father removed from it. Beau activates the toy when the family is walking home while crossing a bridge, giving away his location to a nearby creature that kills him before Lee can save him.",
      "March 9, 2018",
      ['John Krasinski', 'Emily Blunt', 'Noah Jupe']
    ),
    new Movie(
      "Halloween",
      "./assets/images/4.png",
      "On October 31, 1963, on Halloween night in the fictional small town of Haddonfield, Illinois, six-year-old Michael Myers inexplicably stabs his older sister Judith to death with a kitchen knife in their home and is incarcerated at Smith's Grove sanitarium. Fifteen years later, on October 30, 1978, Michael's psychiatrist, Dr. Samuel Loomis and his colleague, Marion Chambers, arrive at the sanitarium to escort Michael to court. Michael escapes by stealing their car and returns to Haddonfield, killing a mechanic for his coveralls and stealing a white mask, a rope, and knives from a local hardware store.",
      "October 25, 1978",
      ['Donald Pleasence', 'Jamie Lee Curtis', 'Nancy Loomis']
    ),
    new Movie(
      "The Witch",
      "./assets/images/5.png",
      "In 1630s New England, English settler William and his family—wife Katherine, daughter Thomasin, son Caleb, and fraternal twins Mercy and Jonas—are banished from a Puritan Plymouth Colony over a religious dispute. The family builds a farm near a large, secluded forest and Katherine bears her fifth child, Samuel. One day, when Thomasin is playing peekaboo with Samuel, the baby abruptly disappears. It is soon revealed that a witch has stolen the unbaptized Samuel, killing him and using his remains to make a flying ointment.",
      "January 27, 2015",
      ['Anya Taylor-Joy', 'Ralph Ineson', 'Kate Dickie']
    ),
    new Movie(
      "It Follows",
      "./assets/images/6.png",
      "Oakland University student Jaime \"Jay\" Height (Monroe) goes on a date with her new boyfriend, Hugh (Weary). That night, Hugh points out a young girl in the back of the theater. When Jaime says she cannot see the girl, Hugh becomes unnerved and asks that they leave. On another date, Hugh and Jaime have sex in his car, but afterwards, he incapacitates Jaime with chloroform and she wakes up tied to a wheelchair in the Packard Plant, where Hugh explains that she will be pursued by an entity that only they can see and which can take the appearance of any person. If it catches Jaime, it will kill her and pursue the previous person to have passed it on: Hugh. After they see a naked woman walking toward them, Hugh drives Jaime home and flees.",
      "May 17, 2014",
      ['Maika Monroe', 'Keir Gilchrist', 'Daniel Zovatto']
    )
  ]);
  const tabsParent = document.querySelector('.movies'),
    filterParent = document.querySelector('.filters');
  
  let filter = 'all';
  
  renderTabs(allMovies);
  
  tabsParent.addEventListener('click', (event) => {
    const target = event.target;
    const tabs = document.querySelectorAll('.tab-item');
    
    if (target && target.classList.contains('tab-item')) {
      tabs.forEach((item, i) => {
        if (target == item) {
          hideTabsContent();
          showTabsContent(i);
        }
      });
    }
  });
  
  filterParent.addEventListener('click', (event) => {
    const target = event.target;
  
    if (target && target.classList.contains('filter-btn')) {
      if ((filter = target.getAttribute('value')) === 'all') {
        renderTabs(allMovies);
      } else {
        renderTabs(favoritMovies);
      }
  
      filterParent.querySelectorAll('.filter-btn')
        .forEach(el => el.classList.remove('filter-btn-active'));
      target.classList.add('filter-btn-active');
    }
  });
  